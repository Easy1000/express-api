import express from "express";

const app = express();

app.get("/api", (req, res) => {
  res.send("Express on Vercel");
});

export default app