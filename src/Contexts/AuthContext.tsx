import { createContext, useContext, useReducer } from "react";

type InitialState = {
  user: null;
  isAuthenticated: boolean;
};

type User = {
  name: string;
  email: string;
  password: string;
  avatar: string;
};

const initialState: InitialState = {
  user: null,
  isAuthenticated: false,
};

type Action =
  | {
      type: "login";
      payload: User;
    }
  | { type: "logout" };

function reducer(state: InitialState, action: Action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case "logout":
      return initialState;
    default:
      throw new Error("unknown action");
  }
}

const FAKE_USER = {
  name: "Mostafa",
  email: "mostafa@example.com",
  password: "qwerty",
  avatar: "https://avatars.githubusercontent.com/u/154463223?v=4",
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
};
const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(email: string, password: string) {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      dispatch({ type: "login", payload: FAKE_USER });
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("Auth context was used outside of the AuthProvider");
  return context  
}

export { useAuth, AuthProvider };
