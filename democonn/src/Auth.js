import { useContext } from "react";
// import { children } from "react";
import { useState, createContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const loginuser = (user) => {
    setUser(user);
  };

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, loginuser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
