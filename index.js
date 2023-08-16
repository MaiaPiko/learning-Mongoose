import mongoose from 'mongoose'
import Blog from './model/Blog.js';
import User from './model/User.js';


mongoose.connect("mongodb+srv://piko:secret@learning.5pdwos5.mongodb.net/?retryWrites=true&w=majority")


const user = await User.create({
  name: 'Jesse Hall',
  email: 'jesse@email.com',
});

// Create a new blog post object
const article = new Blog({
    title: 'Awesome Post!',
    slug: 'awesome-post',
    author: user._id,
    published: true,
    content: 'This is the best post ever',
    tags: ['featured', 'announcement'],
  });
  
  // Insert the article in our MongoDB database
  // await article.save();


  // Find a single blog post
// const firstArticle = await Blog.findOne({});
// console.log(firstArticle);

const newArticle= await Blog.findOne({ title: "Awesome Post!" }).populate("author");
await newArticle.save()
console.log(newArticle);