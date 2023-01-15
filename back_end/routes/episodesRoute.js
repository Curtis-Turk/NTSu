import express from "express";
import Episode from "../models/Episode";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("We are on episodes");
});

export default router;
