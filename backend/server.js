import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./db/connectDb.js";
import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";

// const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // to parse the incoming request from JSON payloads (from req.body)
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  //root route http://localhost:5000/
  res.send("Realtime ChatApp");
});

server.listen(PORT, () => {
  connectDb();
  console.log(`Server is Running on port ${PORT}`);
});
