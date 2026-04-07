import { createContext, useContext, ReactNode } from 'react';

interface SauceContextType {
  id: string;
  pages: number;
}

export const SauceContext = createContext<SauceContextType | undefined>(undefined);

export const useSauce = () => {
  const context = useContext(SauceContext);
  if (!context) {
    throw new Error('useSauce must be used within SauceContext.Provider');
  }
  return context;
};