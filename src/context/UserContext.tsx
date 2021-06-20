import React, { createContext, useContext, useState } from 'react';

type UserContextType = {
  userID: string;
  username: string;
  email: string;
};

export const INITIAL_STATE: UserContextType = {
  userID: '',
  username: '',
  email: '',
};

export const UserContext =
  createContext<{
    user: UserContextType;
    setUser: React.Dispatch<any>;
  } | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(INITIAL_STATE);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
