import React, { createContext, useContext, useState } from 'react';

type UserContextType = {
  userId: string;
  email: string;
};

export const INITIAL_STATE: UserContextType = {
  userId: '',
  email: '',
};

export const UserContext = createContext<{
  user?: UserContextType;
  setUser?: React.Dispatch<any>;
}>({ user: INITIAL_STATE });

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(INITIAL_STATE);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
