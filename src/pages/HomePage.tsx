import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import PageNav from "../Components/PageNav/PageNav";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <p>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </p>
        <Link to='/app' className="cta">Start Tracking Now</Link>
      </section>
    </main>
  );
}
