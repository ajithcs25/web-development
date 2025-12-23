require("dotenv").config();

const fetch = global.fetch;

async function run() {
  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "mistralai/mistral-7b-instruct",
      messages: [
        {
          role: "user",
          content: "Write a friendly error message for failed payment."
        }
      ],
      max_tokens: 50
    })
  });

  const data = await response.json();
  console.log(data.choices[0].message.content);
}

run();
