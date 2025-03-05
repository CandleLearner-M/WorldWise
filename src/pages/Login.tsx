import { useEffect, useState } from "react";
import styles from "./Login.module.css";
import PageNav from "../Components/PageNav/PageNav";
import { useAuth } from "../Contexts/AuthContext";
import { replace, useNavigate } from "react-router-dom";
import Button from "../Components/Button";

export default function Login() {
  const { login, isAuthenticated } = useAuth();

  const navigate = useNavigate();

  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("mostafa@example.com");
  const [password, setPassword] = useState("qwerty");

  useEffect(() => {
    if (isAuthenticated)
      navigate("/app", {
        replace: true,
      });
  }, [isAuthenticated, navigate]);

  return (
    <main className={styles.login}>
      <PageNav />

      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button
            type="primary"
            isSubmitBtn={true}
            onClick={(e) => {
              e.preventDefault();
              if (email && password) login(email, password);
            }}
          >
            Login
          </Button>
        </div>
      </form>
    </main>
  );
}
