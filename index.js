const express = require("express");

const app = express();
const PORT = process.env.PORT || 8000

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "hi" });
});

app.listen(PORT, () => {
  console.log("Server Started");
});
