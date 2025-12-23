require("dotenv").config();

const fetch = global.fetch;

/**
 * generateCopy
 * @param {string} prompt
 * @returns {Promise<string[]>}
 */
async function generateCopy(prompt) {
  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "mistralai/mistral-7b-instruct",
        messages: [
          {
            role: "user",
            content: prompt
          }
        ],
        max_tokens: 80
      })
    }
  );

  const data = await response.json();

  // Convert AI text → UI-friendly list
  return data.choices[0].message.content
    .split("\n")
    .map(line => line.replace(/^[0-9.\-•\s]+/, ""))
    .filter(Boolean);
}

module.exports = generateCopy;
