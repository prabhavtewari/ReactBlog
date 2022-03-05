import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h3>Page Not Found</h3>
      <h3>
        <Link to="/">Home</Link>
      </h3>
    </div>
  );
};

export default NotFound;
