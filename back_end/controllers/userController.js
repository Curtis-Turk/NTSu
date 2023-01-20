import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Track from "../models/Track.js";
import User from "../models/User.js";

const userController = {
  Signup: (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email })
      .then((user) => {
        if (user)
          return res.status(409).json({ message: "Email already exists" });

        bcrypt.hash(password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({ error: err });
          }

          const newUser = new User({
            email,
            password: hash,
          });

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

  UserTracks: async (req, res) => {
    const { username } = req.body;
    User.findOne({ email: username }).then(async (user) => {
      const userTracks = await Track.find({ _id: { $in: user.addedTracks } });
      res.send(userTracks);
    });
  },
};

// import crypto from "crypto";
// const JWT_KEY = crypto.randomBytes(64).toString("hex");
// console.log(JWT_KEY);

export default userController;
