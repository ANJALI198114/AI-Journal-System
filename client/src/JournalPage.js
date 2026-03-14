import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function JournalPage() {

    const [text, setText] = useState("");
    const [entries, setEntries] = useState([]);
    const [insights, setInsights] = useState(null);

    const userId = "123";

    const submitJournal = async () => {

        if (!text) {
            alert("Please write something");
            return;
        }

        await axios.post(
            "http://localhost:5000/api/journal/analyze",
            {
                userId,
                text
            }
        );

        setText("");
        loadEntries();
        loadInsights();
    };

    const loadInsights = async () => {

        const res = await axios.get(
            `http://localhost:5000/api/journal/insights/${userId}`
        );

        setInsights(res.data);
    };

    const loadEntries = async () => {

        const res = await axios.get(
            `http://localhost:5000/api/journal/${userId}`
        );

        setEntries(res.data);
    };

    useEffect(() => {
        loadEntries();
        loadInsights();
    }, []);

    return (

        <div className="container">

            <h1 className="title">AI Journal System</h1>

            <div className="dashboard">

                {/* Write Journal */}
                <div className="card journal-card">

                    <h3>Write Journal</h3>

                    <textarea
                        placeholder="Write about your nature session..."
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />

                    <button onClick={submitJournal}>
                        Submit Entry
                    </button>

                </div>


                {/* Insights */}
                {insights && (

                    <div className="card insights-card">

                        <h3>Journal Insights</h3>

                        <p>Total Entries: {insights.totalEntries}</p>

                        <p>Top Emotion: {insights.topEmotion}</p>

                    </div>

                )}

            </div>

            {/* Previous Entries */}

            <div className="entries">

                <h3>Previous Entries</h3>

                {entries.map((entry) => (
                    <div className="entry" key={entry._id}>

                        <p>{entry.text}</p>

                        {entry.emotion && (
                            <span className="emotion-badge">
                                {entry.emotion}
                            </span>
                        )}

                    </div>
                ))}

            </div>

        </div>

    );
}

export default JournalPage;