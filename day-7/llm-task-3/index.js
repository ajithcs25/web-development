const generateCopy = require("./generateCopy");

async function run() {
  const signupCTA = await generateCopy(
    "Suggest 3 CTA button texts for a signup page"
  );

  console.log("CTA Suggestions:");
  console.log(signupCTA);
}

run();
