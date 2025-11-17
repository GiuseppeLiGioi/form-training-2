import InputForm from "@/components/InputForm";
import styles from "@/styles/common";
import { Text, View } from "react-native";
export default function HomeScreen() {
  return (
    <View style={styles.containerHome}>
      <Text style={styles.topTextHome}>
        Benvenuto! Compila i campi del form e visualizza il risultato!
      </Text>
      <InputForm />
    </View>
  );
}
