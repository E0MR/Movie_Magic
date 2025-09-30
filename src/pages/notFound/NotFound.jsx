import "./NotFound.css";

import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container notfound-container">
      <h2>404</h2>
      <p>Oops! Page not found!</p>
      <Link className="btn-prim" to="/">
        Go back home
      </Link>
    </div>
  );
}

export default NotFound;
