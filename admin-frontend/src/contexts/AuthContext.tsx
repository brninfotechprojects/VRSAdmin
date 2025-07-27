import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface UserType {
  name: string;
  email: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: UserType | null;
  login: (admin: UserType) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<UserType | null>(null);

  // Load from localStorage on first render
  useEffect(() => {
    const storedAdmin = localStorage.getItem("admin");
    console.log("Loaded admin from localStorage:", storedAdmin); // ✅ Debug

    if (storedAdmin) {
      const parsedAdmin = JSON.parse(storedAdmin);
      setUser(parsedAdmin);
      setIsAuthenticated(true);
    }
  }, []);

  const login = (admin: UserType) => {
    setUser(admin);
    setIsAuthenticated(true);
    localStorage.setItem("admin", JSON.stringify(admin));
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("admin");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
