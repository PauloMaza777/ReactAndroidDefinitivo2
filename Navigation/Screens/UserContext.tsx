// Paulo Esteban Maza Rivera - 20460351
// Interfaz para recuperar el correo del usuario que se utilizo cuando inicio 
// sesión la cual sera mostrada en el HomeScreen

import React, { createContext, useState, useContext, ReactNode } from 'react';

type UserContextType = {
  user: string | null;
  setUser: (user: string | null) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);

   //Renderizar la interfaz 
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

// Paulo Esteban Maza Rivera - 20460351
