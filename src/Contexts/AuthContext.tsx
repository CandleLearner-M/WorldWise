import { createContext, useContext, useReducer } from "react";

type InitialState = {
  user: null;
  isAuthenticated: boolean;
};

const initialState: InitialState = {
  user: null,
  isAuthenticated: false,
};

type Action =
  | {
      type: "login";
      payload: {
        name: string;
        email: string;
        password: string;
        avatar: string;
      };
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
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

const AuthContext = createContext();

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
}

export { useAuth, AuthProvider };
