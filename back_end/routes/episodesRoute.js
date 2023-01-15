import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("We are on episodes");
});

export default router;
