import { Link } from "react-router";
export default function NotFound() {
  return (
    <div>
      <h1>Error Code: 404</h1>
      <p>Not Found</p>
      <Link to="/">Home Page</Link>
    </div>
  );
}
