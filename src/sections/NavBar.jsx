import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="flex gap-4 p-4 bg-gray-800 text-white">
      <Link to="/">Landing</Link>
      <Link to="/solution">Solution</Link>
      <Link to="/process">Process</Link>
      <Link to="/impact">Impact</Link>
      <Link to="/tech">Technology</Link>
      <Link to="/cta">Get Started</Link>
    </nav>
  );
}
