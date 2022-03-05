import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import {useHistory} from 'react-router-dom';

const BlogDetails = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useFetch(
    "http://localhost:8000/blogs/" + id
  );
  const history =useHistory();
  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    })
      .then(() => {
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="blog-details">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && (
        <div className="blog">
          <h2>{data.title}</h2>
          <br />
          <p>Written By : {data.author}</p>
          <br />
          <p>{data.body}</p>
          <button onClick={handleDelete} className="trash-wrap"><img src='/trash-can.png' alt="" className="trash-can" /></button>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
