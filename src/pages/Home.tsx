import { Link } from "react-router-dom";
import PageNav from "../Components/PageNav/PageNav";

export default function Home() {
  return (
    <div>
      <PageNav />
      <h1>Home</h1>

      <Link to="/pricing">Pricing</Link>
    </div>
  );
}
