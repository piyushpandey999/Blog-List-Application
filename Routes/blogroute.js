const express = require("express");
const Blog = require("../Modals/blog");
const router = express.Router();
const blogcontroller = require("../Controller/blogcontroller");

//routers

router.get("/allblogs", blogcontroller.blog_home);
router.get("/createblog", blogcontroller.blog_form);
router.post("/allblogs", blogcontroller.save_blog);
router.get("/allblogs/:id", blogcontroller.blog_deatils);
router.get("/", (req, res) => {
  res.render("landing");
});
router.delete("/allblogs/:id", (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/allblogs" });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
