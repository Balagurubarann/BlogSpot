const router = require("express").Router();
const {
  createPost,
  getPosts,
  updatePost,
  deletePost,
} = require("../controllers/post.control.js");
const { verifyUser } = require("../utils/verifyUser.js");

router.use(verifyUser);

router
  .post("/create", createPost)
  .get("/get-posts", getPosts)
  .put("/update/:postId/:userId", updatePost)
  .delete("/delete/:postId/:userId", deletePost)
  .get("/", getPosts);

module.exports = router;
