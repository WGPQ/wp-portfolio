'use client';
import { createContext, ReactNode, useContext, useState } from "react";
import { Project } from "../projects";

interface AppContextType {
  project: Project | null;
  setProject: (project: Project | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [project, setProject] = useState<Project | null>(null);
  return (
    <AppContext.Provider value={{ project, setProject }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext debe usarse dentro de AppContextProvider');
  }
  return context;
};
