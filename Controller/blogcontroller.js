const Blog = require("../Modals/blog");

const blog_home = (req, res) => {
  Blog.find().then((result) => {
    res.render("allblogs", { blog: result });
  });
};
const blog_form = (req, res) => {
  res.render("createblog");
};
const save_blog = (req, res) => {
  const data = new Blog(req.body);
  data
    .save()
    .then((result) => {
      res.redirect("/allblogs");
    })
    .catch((err) => {
      console.log(err);
    });
};
const blog_deatils = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("details", { blog: result });
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = {
  blog_form,
  save_blog,
  blog_home,
  blog_deatils,
};
