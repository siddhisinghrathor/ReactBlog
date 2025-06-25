import React, { useState } from "react";
import blogsData from "../data/blogs";

function BlogList() {
  const [blogs, setBlogs] = useState(blogsData.blogs);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  const handleAddBlog = () => {
    if (title.trim() === "" || description.trim() === "") {
      alert("Please fill in Title and Description!");
      return;
    }

    const newBlog = {
      title: title,
      description: description,
      date: new Date().toISOString().slice(0, 10),
      tags: tags.split(",").map((tag) => tag.trim()),
    };

    setBlogs([newBlog, ...blogs]);
    setTitle("");
    setDescription("");
    setTags("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 p-8">
      <h1 className="text-4xl text-white font-extrabold mb-6 text-center drop-shadow-lg">
         Colorful Blog App 
      </h1>

   
      <div className="bg-white rounded-xl shadow-xl p-6 mb-8 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">
          Add a New Blog
        </h2>
        <input
          type="text"
          placeholder="Enter Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 mb-3 border-2 border-purple-400 rounded focus:ring-2 focus:ring-purple-300"
        />
        <textarea
          placeholder="Enter Blog Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 mb-3 border-2 border-purple-400 rounded focus:ring-2 focus:ring-purple-300"
        ></textarea>
        <input
          type="text"
          placeholder="Tags (comma separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="w-full p-3 mb-4 border-2 border-purple-400 rounded focus:ring-2 focus:ring-purple-300"
        />
        <button
          onClick={handleAddBlog}
          className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-bold py-2 px-6 rounded shadow-md hover:shadow-xl transition-all"
        >
          ➕ Add Blog
        </button>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl p-6 transform hover:scale-105 transition-all duration-300"
          >
            <h2 className="text-2xl font-bold text-indigo-600 mb-2">
              {blog.title}
            </h2>
            <p className="text-gray-700 mb-2">{blog.description}</p>
            <p className="text-gray-500 text-sm mb-2">Date: {blog.date}</p>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 text-white text-xs px-3 py-1 rounded-full shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
