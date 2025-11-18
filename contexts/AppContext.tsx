import { createContext, ReactNode, useContext, useState } from "react";

export enum EnumProperty {
  STUDENT = "Student",
  WORKER = "Worker",
  RETIRED = "Retired",
}

export type Persona = {
  id: number;
  name: string;
  age: number;
  isPatented: boolean;
  employment: EnumProperty;
};

type AppContext = {
  personas: Persona[];
  addPersona: (persona: Omit<Persona, "id">) => boolean;
  deletePersona: (id: number) => boolean;
};

export const AppContext = createContext<AppContext>({
  personas: [],
  addPersona: () => false,
  deletePersona: () => false,
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [personas, setPersonas] = useState<Persona[]>([]);

  /*Omit serve per dire: sarà un oggetto di tipo Persona, ma senza l'id. Omit vuol dire proprio senza quella proprietà dopo la , */
  const addPersona = (persona: Omit<Persona, "id">) => {
    if (persona) {
      const newPerson: Persona = { id: Date.now(), ...persona };
      setPersonas((currentPersonas) => [...currentPersonas, newPerson]);
      return true;
    } else {
      return false;
    }
  };

  const deletePersona = (id: number) => {
    if (id) {
      setPersonas(personas.filter((p) => p.id !== id));
      return true;
    }
    return false;
  };

  return (
    <AppContext.Provider value={{ personas, addPersona, deletePersona }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("Devi essere dentro il Provider");
  } else {
    return context;
  }
};
