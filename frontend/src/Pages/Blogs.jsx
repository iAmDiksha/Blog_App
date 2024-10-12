import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteBlog } from "../redux/blogs/blogsSlice";
import "../CSS/bloglist.css";  // Import the BlogList CSS
import { Link } from "react-router-dom";

const BlogList = () => {
  const blogs = useSelector((state) => state.blogs?.blogs || []);
  const dispatch = useDispatch();

  return (
    <div>
      {blogs.length === 0 ? (
        <p className="noblog">No blogs available. <Link to={"/create"} className="underline">Create a new blog.</Link> </p>
      ) : (
        <div className="blogs">{
        blogs.map((blog) => (
          <div key={blog.id} className="blog">
            <div className="img">
              <img src={blog.image} alt="image" />
            </div>
            <h2 className="blogtitle">{blog.title}</h2>
            <p className="blogcontent">{blog.content}</p>
            <p className="blogtime"><i class="ri-timer-line"></i> {blog.time} minutes</p>
            <div className="flex">
            <Link to={`/blog/${blog.id}`} className="readmore">Read More <i class="ri-arrow-right-up-line"></i></Link>
            <div>
            <Link to={`/edit/${blog.id}`}>
                <button className="edit btn"><i class="ri-edit-box-line"></i></button> 
            </Link>
            <button className="delete btn" onClick={() => dispatch(deleteBlog(blog.id))}><i class="ri-delete-bin-6-line"></i></button>
            </div>
            </div>
          </div>
        ))
        }
        </div>
      )}
    </div>
  );
};

export default BlogList;
