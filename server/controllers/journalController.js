const Journal = require("../models/Journal");


exports.createJournal = async (req, res) => {
    if (!req.body.text || !req.body.userId) {
        return res.status(400).json({
            error: "text and userId are required"
        });
    }
    try {
        const journal = await Journal.create(req.body);
        res.json(journal);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getJournals = async (req, res) => {
    try {
        const entries = await Journal.find({ userId: req.params.userId });
        res.json(entries);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.analyzeJournal = async (req, res) => {
    try {

        const text = req.body.text;
        const userId = "123";

        if (!text) {
            return res.status(400).json({ error: "Text required" });
        }

        const lowerText = text.toLowerCase();

        let emotion = "neutral";
        let keywords = [];

        if (
            lowerText.includes("calm") ||
            lowerText.includes("peace") ||
            lowerText.includes("relax") ||
            lowerText.includes("nature")
        ) {
            emotion = "calm";
            keywords = ["peace", "nature", "relax"];
        }

        else if (
            lowerText.includes("happy") ||
            lowerText.includes("joy") ||
            lowerText.includes("joyful") ||
            lowerText.includes("gratitude") ||
            lowerText.includes("energetic")
        ) {
            emotion = "happy";
            keywords = ["joy", "gratitude", "energy"];
        }

        else if (
            lowerText.includes("stress") ||
            lowerText.includes("sad") ||
            lowerText.includes("tired") ||
            lowerText.includes("anxious")
        ) {
            emotion = "sad";
            keywords = ["stress", "sadness"];
        }

        const journal = await Journal.create({
            userId,
            ambience: "forest",
            text,
            emotion,
            keywords
        });

        res.json({
            emotion,
            keywords,
            journal
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

exports.getInsights = async (req, res) => {
    try {
        const entries = await Journal.find({ userId: req.params.userId });

        const totalEntries = entries.length;

        const emotionCount = {};
        const ambienceCount = {};
        let recentKeywords = [];

        entries.forEach((entry) => {
            if (entry.emotion) {
                emotionCount[entry.emotion] = (emotionCount[entry.emotion] || 0) + 1;
            }

            if (entry.ambience) {
                ambienceCount[entry.ambience] = (ambienceCount[entry.ambience] || 0) + 1;
            }

            if (entry.keywords && Array.isArray(entry.keywords)) {
                recentKeywords.push(...entry.keywords);
            }
        });

        const topEmotion =
            Object.keys(emotionCount).length > 0
                ? Object.keys(emotionCount).reduce((a, b) =>
                    emotionCount[a] > emotionCount[b] ? a : b
                )
                : null;

        const mostUsedAmbience =
            Object.keys(ambienceCount).length > 0
                ? Object.keys(ambienceCount).reduce((a, b) =>
                    ambienceCount[a] > ambienceCount[b] ? a : b
                )
                : null;

        recentKeywords = [...new Set(recentKeywords)].slice(-5);

        res.json({
            totalEntries,
            topEmotion,
            mostUsedAmbience,
            recentKeywords
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};