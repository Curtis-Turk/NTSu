import express from "express";
import cors from "cors";
import pkg from "body-parser";
const { json } = pkg;
import discogsFetch from "./api/discogsFetch.js";
import bandcampFetch from "./api/bandcampFetch.js";
import youtubeSearch from "./api/youtubeFetch.js";
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

app.post("/discogs", async (req, res) => {
  let data = await discogsFetch(req.body);
  res.json(data);
});
app.post("/youtube", async (req, res) => {
  let data = await youtubeSearch(req.body);
  res.json(data);
});

app.get("/api", (req, res) => {
  res.json({ message: "hello" });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Express app listening on ${PORT}`);
});
