import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Track from "../models/Track.js";

import User from "../models/User.js";

const userController = {
  Signup: (req, res) => {
    console.log("signin up", req.body);

    const { email, password } = req.body;

    // Check if user already exists
    User.findOne({ email })
      .then((user) => {
        if (user) {
          return res.status(409).json({ message: "Email already exists" });
        }

        // Hash password
        bcrypt.hash(password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({ error: err });
          }

          // Create new user
          const newUser = new User({
            email,
            password: hash,
          });

          // Save user to database
          newUser
            .save()
            .then((result) => {
              res.status(201).json({ message: "User created" });
            })
            .catch((error) => {
              res.status(500).json({ error });
            });
        });
      })
      .catch((error) => {
        res.status(500).json({ error });
      });
  },
  Login: (req, res) => {
    console.log("loggin in", req.body);

    const { email, password } = req.body;

    // Find user by email
    User.findOne({ email })
      .then((user) => {
        if (!user) {
          return res.status(404).json({ message: "Email not found" });
        }

        // Compare passwords
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) {
            return res.status(401).json({ message: "Auth failed" });
          }

          if (result) {
            // Create JWT

            const token = jwt.sign(
              { email, userId: user._id },
              process.env.JWT_KEY,
              { expiresIn: "1h" }
            );

            return res.status(200).json({ message: "Auth successful", token });
          }

          res.status(401).json({ message: "Auth failed" });
        });
      })
      .catch((error) => {
        res.status(500).json({ error });
      });
  },
  UserTracks: (req, res) => {
    console.log("getting here");
    const { username } = req.body;
    console.log(req.body);
    User.findOne(
      { username }.then((user) => {
        if (err) {
          res.status(500).send(err);
        } else {
          console.log(user);
          // const userTracks = await Track.find({ _id: { $in: user.addedTracks } });
          // res.send(userTracks);
        }
      })
    );
  },
};

// UserTracks: (req, res) => {
//   console.log("getting here");
//   const { email } = req.body;
//   User.findOne({ email }, async (err, user) => {
//     if (err) {
//       res.status(500).send(err);
//     } else res.send(user.addedTracks);
//   });
// },

// PopulateTracks: async (req, res) => {
//   const trackIds = req.body.userTracks;
//   const userTracks = await Track.find({ _id: { $in: trackIds } });
//   // await episodePop.populate({ path: "allTracks" });
//   res.send(userTracks);
// },

// import crypto from "crypto";
// const JWT_KEY = crypto.randomBytes(64).toString("hex");
// console.log(JWT_KEY);

export default userController;
