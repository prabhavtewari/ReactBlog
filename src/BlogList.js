import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {(blogs.length === 0) && <p>No Blogs</p>}
      { blogs.length !== 0 &&
      blogs.map((blog) => (
        <Link to={"/details/" + blog.id} className="nostyle">
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Author: {blog.author}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogList;
