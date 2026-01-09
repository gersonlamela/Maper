'use client';

import { createContext, useContext } from 'react';

type AuthContextType = {
  user: {
    id: string;
    email?: string;
    role?: string;
  } | null;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({
  children,
  user,
}: {
  children: React.ReactNode;
  user: AuthContextType['user'];
}) {
  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }

  return context;
}
