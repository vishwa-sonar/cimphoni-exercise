"use client";

import { useContext, useEffect, useState } from "react";
import { DashboardContext } from "./DashboardContext";
import Dashboard from "./page";

interface Dashboard {
  children: any;
}

export const useDashboardContext = () => {
  const data = useContext(DashboardContext);
  
  if (data) {
    return data;
  }
};

const DashboardProvider: React.FC<Dashboard> = ({ children }: any) => {
  const [prompts, setPrompts] = useState<any>([]);

  const getPrompts = async () => {
    try {
      const response = await fetch(
        "https://6509bd34f6553137159bedbc.mockapi.io/cimphony/prompts"
      );
      const promptData = await response.json();
      setPrompts(promptData);
    } catch (error) {
      
      return error;
    }
  };

  useEffect(() => {
    getPrompts();
  }, []);
  return (
    <div>
      <DashboardContext.Provider value={{ prompts }}>
        {children}
      </DashboardContext.Provider>
    </div>
  );
};

export default DashboardProvider;
