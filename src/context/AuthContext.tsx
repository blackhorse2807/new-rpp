'use client';

import { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface User {
  email: string;
  // You can add more user fields as needed
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  
  // Check for saved user on initial load
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const backend_url = "http://localhost:8000/auth/login";
      const loginData = { email_id: email, password: password };

      const response = await fetch(backend_url, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData)
      });

      if (response.status === 200) {
        // If login is successful
        const userData = await response.json();
        
        // Create a user object with email (and potentially other data from response)
        const userInfo = { email: email, ...userData.user };
        
        // Update state and localStorage
        setUser(userInfo);
        localStorage.setItem('user', JSON.stringify(userInfo));
        return true;
      } else {
        // If login failed
        return false;
      }
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}