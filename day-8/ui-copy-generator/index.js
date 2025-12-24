import dotenv from "dotenv";
import Groq from "groq-sdk";

dotenv.config({ path: "./.env" });

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const pageSection = process.argv[2];

if (!pageSection) {
  console.log("Usage: node index.js <hero|features|footer>");
  process.exit(1);
}

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
  throw new Error("Invalid pageSection");
}

(async () => {
  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant", // ✅ FIXED
      messages: [
        {
          role: "system",
          content:
            "You are a senior UX copywriter. Write short, clear, professional UI text.",
        },
        {
          role: "user",
          content: buildPrompt(pageSection),
        },
      ],
    });

    console.log("\nGenerated UI Copy:\n");
    console.log(completion.choices[0].message.content);
  } catch (err) {
    console.error("Error:", err.message);
  }
})();
