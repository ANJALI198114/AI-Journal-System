
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const journalRoutes = require("./routes/journalRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/journalDB")
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err));

app.use("/api/journal", journalRoutes);

app.listen(5000, ()=>console.log("Server running on port 5000"));