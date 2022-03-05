import { useState } from "react";
import {useHistory} from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const history=useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsLoading(true);
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    })
      .then(()=>{
          console.log("Blog Added");
          setIsLoading(false);
          history.push('/');
      })

      .catch((err) => console.log(err));
  };
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <input 
        value={author} 
        onChange={(e) => setAuthor(e.target.value)}
        type="text">
        </input>
        {!isLoading && <button>Add Blog</button>}
        {isLoading && <button disabled>Adding Blog</button>}
      </form>
    </div>
  );
};

export default Create;
