import mongoose from "mongoose";
import Post from "./model/model_post";
mongoose.connect(process.env.CONN_STRING);

export async function create(data) {
  try {
    const newPost = await Post.create({
      title: data.title,
      body: data.description,
      view_cnt: 0,
      thumbnail: null,
    });

    await newPost.save();
  } catch (err) {
    console.error(err.message);
  }
}

export async function read(id) {
  try {
    let postData = await Post.findById(id);
    return postData;
  } catch (err) {
    console.error(err.message);
  }
}

export async function update(id, data) {
  try {
    let post = await Post.findById(id);

    Object.keys(data).forEach((key) => {
      post[key] = data[key];
    });

    await post.save();
  } catch (err) {
    console.error(err.message);
  }
}

export async function del(id) {
  try {
    await Post.deleteOne({ _id: id });
  } catch (err) {
    console.error(err.message);
  }
}
