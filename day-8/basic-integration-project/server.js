import express from "express";
import dotenv from "dotenv";
import Groq from "groq-sdk";

// Load environment variables
dotenv.config({ path: "./.env" });

// Create express app
const app = express();
const PORT = process.env.PORT || 3000;

// Initialize Groq client
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// Helper function to build prompt
function buildPrompt(section) {
  if (section === "hero") {
    return "Generate a landing page hero headline and short subheading for a productivity web app.";
  }

  if (section === "features") {
    return "Generate 3 short feature descriptions for a productivity web app.";
  }

  if (section === "footer") {
    return "Generate a short professional footer message for a web application.";
  }

  throw new Error("Invalid section");
}

// API endpoint
app.get("/api/generate-copy", async (req, res) => {
  // ✅ Normalize input
  const section = req.query.section?.toLowerCase().trim();

  // Validation
  if (!section) {
    return res.status(400).json({
      error: "Query parameter 'section' is required (hero | features | footer)",
    });
  }

  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content:
            "You are a senior UX copywriter. Write short, clear, professional UI text.",
        },
        {
          role: "user",
          content: buildPrompt(section),
        },
      ],
    });

    res.json({
      section,
      copy: completion.choices[0].message.content,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
