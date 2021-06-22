const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
  },
  { timestmaps: true }
);
const Blog = mongoose.model("data", blogSchema);
module.exports = Blog;
