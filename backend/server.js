require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

const authRoutes = require('./routes/authRoutes');
const sessionRoutes = require('./routes/sessionRoutes');
const questionRoutes = require('./routes/questionRoutes');
const { protect } = require("./middlewares/authMiddleware");
const { generateInterviewQuestions, generateConceptExplaination } = require("./controllers/aiController");


const app = express();



// Middleware to handle cors
app.use(
    cors({
        origin: [
            "https://interview-prep-ai-front-end.onrender.com",
            "http://localhost:3000"
        ],
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

connectDB()



// Middleware
app.use(express.json());



// Health check route
app.get("/", (req, res) => {
    res.send("Backend is running!");
});



// Routes
app.use("/api/auth", authRoutes);
app.use("/api/sessions", sessionRoutes);
app.use("/api/questions", questionRoutes);

app.use("/api/ai/generate-questions", protect, generateInterviewQuestions);
app.use("/api/ai/generate-explanations", protect, generateConceptExplaination);


// Serve uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads"), {}));


// Start Server
const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));
