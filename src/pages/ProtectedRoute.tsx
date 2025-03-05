import { ReactNode } from "react";
import { useAuth } from "../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (!isAuthenticated) navigate("/");

  return children;
}
