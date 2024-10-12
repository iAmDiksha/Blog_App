import './App.css'
import Blogs from './Pages/Blogs';
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import CreateBlog from './Pages/CreateBlog';
import Home from './Pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EditBlogForm from './components/EditBlogForm';
import Blog from './Pages/Blog';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="box">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/create" element={<CreateBlog />} />
          <Route path="/edit/:id" element={<EditBlogForm/>}/>
          <Route path="/blog/:id" element={<Blog/>}/>
        </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
