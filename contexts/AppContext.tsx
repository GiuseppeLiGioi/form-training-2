import { createContext, ReactNode, useContext, useState } from "react";

enum EnumProperty {
  STUDENT = "Student",
  WORKER = "Worker",
  RETIRED = "Retired",
}

type Persona = {
  id: number;
  name: string;
  age: number;
  isPatented: boolean;
  prop: EnumProperty;
};

type AppContext = {
  personas: Persona[];
  addPersona: (persona: Omit<Persona, "id">) => boolean;
  togglePatented: (id: number) => void;
};

export const AppContext = createContext<AppContext>({
  personas: [],
  addPersona: () => false,
  togglePatented: () => {},
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

  const togglePatented = (id: number) => {
    setPersonas(
      (
        currentPersonas /*currentPersonas sarebbe prev. Ancora meglio dargli un nome chiaro per capire il funzionamento */
      ) =>
        currentPersonas.map((c) =>
          c.id === id ? { ...c, isPatented: !c.isPatented } : c
        )
    );
  };

  return (
    <AppContext.Provider value={{ personas, addPersona, togglePatented }}>
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
