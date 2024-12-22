async function tempo2(request, response) {
  const apiSecret = process.env.GEMINI_API;
  const { GoogleGenerativeAI } = require("@google/generative-ai");

  const genAI = new GoogleGenerativeAI(apiSecret);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = "Explique para que serve uma API";

  const result = await model.generateContent(prompt);
  console.log(result.response.text());
}

export default tempo2;
