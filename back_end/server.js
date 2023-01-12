import express from "express";
import cors from "cors";
import pkg from "body-parser";
const { json } = pkg;
// import { json } from "body-parser";
import bandcampFetch from "./api/bandcampFetch.js";
const app = express();

app.use(cors());
app.use(json());

app.get("/", (req, res) => {
  res.json({ message: "welcome" });
});

app.post("/bandcamp", async (req, res) => {
  let data = await bandcampFetch(req.body);
  res.json(data);
});

app.get("/api", (req, res) => {
  res.json({ message: "hello" });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Express app listening on ${PORT}`);
});
