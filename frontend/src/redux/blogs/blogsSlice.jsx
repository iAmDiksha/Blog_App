// src/features/blogs/blogsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  blogs: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    addBlog: (state, action) => {
      // Add the new blog post to the blogs array
      state.blogs.push(action.payload);
    },
    deleteBlog: (state, action) => {
        // Filter out the blog with the matching id
        state.blogs = state.blogs.filter((blog) => blog.id !== action.payload);
    },
    editBlog: (state, action) => {
        const { id, title, content,author, time, image } = action.payload;
        const existingBlog = state.blogs.find((blog) => blog.id === id);
        if (existingBlog) {
          existingBlog.title = title;
          existingBlog.content = content;
          existingBlog.author = author;
          existingBlog.time = time;
          existingBlog.image = image;
        }
    },
    // add more reducers here as needed
  },
});

// Export the action creator for addBlog
export const { addBlog, deleteBlog, editBlog } = blogsSlice.actions;

// Export the reducer to be used in the store
export default blogsSlice.reducer;
