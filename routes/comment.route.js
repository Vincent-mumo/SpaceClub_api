import express from "express";
import {
  addComment,
  deleteComment,
  getPostComments,
  getCommentCount, // Import the new controller
} from "../controllers/comment.controller.js";

const router = express.Router();

// Get comments for a post
router.get("/:postId", getPostComments);

// Add a comment to a post
router.post("/:postId", addComment);

// Delete a comment
router.delete("/:id", deleteComment);

// Get comment count for a post
router.get("/:postId/count", getCommentCount); // New route for counting comments

export default router;