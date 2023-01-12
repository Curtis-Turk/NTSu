import express from "express";
import cors from "cors";
import pkg from "body-parser";
const { json } = pkg;
// import { json } from "body-parser";
import bandcampSearch from "./api/bandcampSearch.js";
const app = express();

app.use(cors());
app.use(json());

app.get("/", (req, res) => {
  res.json({ message: "welcome" });
});

app.post("/bandcamp", async (req, res) => {
  // const targetUrl = req.body.url;
  // const scrapedData = await scrapeData(targetUrl);
  let data = await bandcampSearch(req.body.url);
  // console.log(data);
  res.json(data);
});

app.get("/api", (req, res) => {
  res.json({ message: "hello" });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Express app listening on ${PORT}`);
});
