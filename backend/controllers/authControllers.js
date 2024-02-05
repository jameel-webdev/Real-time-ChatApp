import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import { generateToken } from "../utils/genrateJwtToken.js";

export const signupUser = async (req, res) => {
  try {
    const { fullName, userName, password, confirmPassword, gender } = req.body;
    // PASSWORD CHECK
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password do not match" });
    }

    //EXSISTING USER CHECK
    const user = await User.findOne({ userName });
    if (user) return res.status(400).json({ error: "Username already exists" });

    //HASH PASSWORD - SECURITY PURPOSE
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    //AVATAR - RANDOM PROFILEPIC GENERATOR API `https://avatar-placeholder.iran.liara.run/`
    const maleProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const femaleProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

    //CREATING NEW USER
    const newUser = new User({
      fullName,
      userName,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? maleProfilePic : femaleProfilePic,
    });

    if (newUser) {
      // GENERATE JWT TOKEN
      generateToken(newUser._id, res);
      await newUser.save(); //saving in database
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        userName: newUser.userName,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "Invalid Userdata" });
    }
  } catch (error) {
    console.log("Error while SignUp", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { userName, password } = req.body;
    //FIND USER AND COMPARE HASHED PASSWORD
    const user = await User.findOne({ userName });
    const isPasswordValid = await bcryptjs.compare(
      password,
      user.password || ""
    );

    if (!user || !isPasswordValid) {
      return res.status(400).json({ error: "Invalid Username or Password" });
    }

    //GENRATE JWT TOKEN AND SET COOKIE
    generateToken(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      userName: user.userName,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("Error while login", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const logoutUser = async (req, res) => {
  try {
    res.cookie("jwt_token", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error while logout", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
