import InputForm from "@/components/InputForm";
import { Persona, useAppContext } from "@/contexts/AppContext";
import styles from "@/styles/common";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { personas, addPersona } = useAppContext();

  const handleSubmit = (data: Omit<Persona, "id">) => {
    return addPersona(data);
  };

  return (
    <>
      <LinearGradient
        colors={["#2612ddff", "#dbdadaff"]}
        style={styles.containerHome}
      >
        <ImageBackground
          source={require("../../assets/images/background.jpg")}
          resizeMode="cover"
          style={styles.containerHome}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={{ flex: 1, padding: 8 }}>
            <Text style={styles.topTextHome}>
              Benvenuto! Compila i campi del form e visualizza il risultato
              nelle altre pagine!
            </Text>
            <InputForm onSubmit={handleSubmit} />
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}
