import { Router } from "express";
import { verifytoken } from "../utils/token-manager.js";
import { chatCompletionValidator, validate } from "../utils/validator.js";
import {
  deleteChats,
  generateChatCompletion,
  sendChatsToUser,
} from "../controllers/chat-controllers.js";

//Protected API
const chatRoutes = Router();
chatRoutes.post(
  "/new",
  validate(chatCompletionValidator),
  verifytoken,
  generateChatCompletion
);
chatRoutes.get("/all-chats", verifytoken, sendChatsToUser);
chatRoutes.delete("/delete", verifytoken, deleteChats);

export default chatRoutes;
