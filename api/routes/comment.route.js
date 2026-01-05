const router = require("express").Router();
const {
  createComment,
  getComments,
  editComment,
  deleteComment,
  updateCommentLike,
} = require("../controllers/comment.control.js");
const { verifyUser } = require("../utils/verifyUser.js");

router.use(verifyUser);

router
  .post("/create", createComment)
  .get("/get-comments/:postId", getComments)
  .put("/edit-comment/:commentId", editComment)
  .delete("/delete-comment/:commentId", deleteComment)
  .put("/updateLike/:commentId", updateCommentLike);

module.exports = router;
