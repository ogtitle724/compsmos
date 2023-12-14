import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    minLength: 1,
  },
  body: {
    type: String,
    minLength: 1,
  },
  wr_date: {
    type: Date,
    immutable: true,
    default: () => new Date(),
  },
  re_date: {
    type: Date,
    default: () => new Date(),
  },
  view_cnt: Number,
  thumbnail: String,
});

//TODO: increase view count every get req
postSchema.pre("save", function (next) {
  this.re_date = new Date();
  next();
});

const Post = mongoose.models.posts || mongoose.model("posts", postSchema);

export default Post;
