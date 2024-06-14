import {
  createContext,
  FC,
  useEffect,
  useReducer,
  PropsWithChildren,
  useCallback,
} from "react";
import axios from "axios";
// CUSTOM LOADING COMPONENT
import { LoadingProgress } from "@/components/loader";

const API_URL = "http://localhost:5000";

interface INITIAL_AUTH_STATE {
  isAuthenticated: boolean;
  isInitialized: boolean;
  user: null | { _id: string; name: string; email: string };
}

const initialState: INITIAL_AUTH_STATE = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const setSession = (accessToken: string | null) => {
  if (accessToken) {
    localStorage.setItem("accessToken", accessToken);
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    localStorage.removeItem("accessToken");
    delete axios.defaults.headers.common.Authorization;
  }
};

const reducer = (state: INITIAL_AUTH_STATE, action: any) => {
  switch (action.type) {
    case "INIT": {
      return {
        isInitialized: true,
        user: action.payload.user,
        isAuthenticated: action.payload.isAuthenticated,
      };
    }
    case "LOGIN": {
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    }
    case "LOGOUT": {
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    }
    case "REGISTER": {
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    }
    default: {
      return state;
    }
  }
};

interface ContextProps extends INITIAL_AUTH_STATE {
  method: string;
  logout: () => void;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
}

export const AuthContext = createContext({} as ContextProps);

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // USER LOGIN HANDLER
  const login = useCallback(async (email: string, password: string) => {
    const { data } = await axios.post(`${API_URL}/users/login`, {
      email,
      password,
    });
    setSession(data.token);
    dispatch({ type: "LOGIN", payload: { user: data } });
  }, []);

  // USER REGISTER HANDLER
  const register = useCallback(
    async (name: string, email: string, password: string) => {
      const { data } = await axios.post(`${API_URL}/users`, {
        name,
        email,
        password,
      });
      setSession(data.token);
      dispatch({ type: "REGISTER", payload: { user: data } });
    },
    [],
  );

  // USER LOGOUT HANDLER
  const logout = () => {
    setSession(null);
    dispatch({ type: "LOGOUT" });
  };

  useEffect(() => {
    const init = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");

        if (accessToken) {
          setSession(accessToken);

          const { data } = await axios.get(`${API_URL}/users/profile`);

          dispatch({
            type: "INIT",
            payload: { user: data, isAuthenticated: true },
          });
        } else {
          dispatch({
            type: "INIT",
            payload: { user: null, isAuthenticated: false },
          });
        }
      } catch (err) {
        // console.error(err);
        dispatch({
          type: "INIT",
          payload: { user: null, isAuthenticated: false },
        });
      }
    };

    init();
  }, []);

  // show loading until not initialized
  if (!state.isInitialized) return <LoadingProgress />;

  return (
    <AuthContext.Provider
      value={{ ...state, method: "JWT", login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
