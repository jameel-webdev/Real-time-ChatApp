import express from "express";
import { getMessage, sendMessage } from "../controllers/messageControllers.js";
import { protectRoute } from "../middlewares/protectMiddleware.js";

const router = express.Router();

router.get("/:id", protectRoute, getMessage);
router.post("/send/:id", protectRoute, sendMessage);

export default router;
