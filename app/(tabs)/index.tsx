import InputForm from "@/components/InputForm";
import { Persona, useAppContext } from "@/contexts/AppContext";
import styles from "@/styles/common";
import { Text, View } from "react-native";

export default function HomeScreen() {
  const { personas, addPersona } = useAppContext();

  const handleSubmit = (data: Omit<Persona, "id">) => {
    return addPersona(data);
  };

  return (
    <>
      <View style={styles.containerHome}>
        <Text style={styles.topTextHome}>
          Benvenuto! Compila i campi del form e visualizza il risultato nelle
          altre pagine!
        </Text>
        <InputForm onSubmit={handleSubmit} />
      </View>
    </>
  );
}
