import mongoose from "mongoose";
import Blog from "../model/blog.js";
import User from "../model/user.js";
export const getAllBlogs = async (req, res, next) => {
    let blogs;
    try {
        blogs = await Blog.find();

    } catch (err) {
        return console.log(err);
    }
    if (!blogs) {
        return res.status(404).json({ message: "No blogs found" });
    }
    return res.status(200).json({ blogs });
}
export const addBlog = async (req, res, next) => {
    const { title, description, image, user } = req.body;
    let existingUser;
    try {
        existingUser = await User.findById(user);
    } catch (err) {
        return console.log(err);
    }
    if (!existingUser) {
        return res.status(400).json({ message: "unable to find user" });

    }
    const blog = new Blog({
        title, description, image, user
    });
    try {
        const session = await mongoose.startSession();
        session.startTransaction();
        await blog.save();
        existingUser.blogs.push(blog);
        await existingUser.save({ session });
        await session.commitTransaction();
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: err });
    }
    return res.status(200).json({ blog });
}
export const updateBlog = async (req, res, next) => {
    const { title, description } = req.body;
    const blogId = req.params.id;
    let blog;
    try {
        blog = await Blog.findByIdAndUpdate(blogId, {
            title,
            description
        });
    } catch (err) {
        return console.log(err);
    }
    if (!blog) {
        return res.status(500).json({ message: "Unable to update" });
    }
    return res.status(200).json({ blog });
}
export const getById = async (req, res, next) => {
    const blogId = req.params.id;
    let blog;
    try {
        blog = await Blog.findById(blogId);
    } catch (err) {
        return console.log(err);
    }
    if (!blog) {
        return res.status(500).json({ message: "Unable to find blog" });
    }
    return res.status(200).json({ blog });
}

export const deleteById = async (req, res, next) => {
    const blogId = req.params.id;
    let blog;
    try {
        //When you want to fetch a blog and also get information about the user who created it, you can use the populate method
        // When you use populate('user'), it tells MongoDB to go and fetch the full user document associated with that ID
        //  and replace the user's ID in the blog document with all the details of the user. So, now you know the user's name, 
        //  email, or any other information you have about them.
        blog = await Blog.findByIdAndRemove(blogId).populate('user');
        await blog.user.blogs.pull(blog);
        await blog.user.save();
    } catch (err) {
        return console.log(err);
    }
    if (!blog) {
        return res.status(500).json({ message: "Unable to delete blog" });
    }
    return res.status(200).json({ message: "Successfully deleted" });
}
export const getByUserId = async (req, res, next) => {
    const userId = req.params.id;
    let userBlogs;
    try {
        userBlogs = await User.findById(userId).populate('blogs');

    } catch (err) {
        return console.log(err);
    }
    if (!userBlogs) {
        return res.status(500).json({ message: "no blog found" });
    }
    return res.status(200).json({ blogs: userBlogs });
}