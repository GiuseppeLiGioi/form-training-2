import { useAppContext } from "@/contexts/AppContext";
import styles from "@/styles/common";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { ImageBackground, Text, View } from "react-native";
import FeedbackButtons from "../../components/my/FeedbackButtons";
import UserInputNumber from "../../components/my/UserInputNumber";

export default function New1Screen() {
  const [columns, setColumns] = useState<number>(2);
  const { personas, deletePersona } = useAppContext();

  return (
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
        <View style={styles.containerNumberGame}>
          <Text style={{ color: "white", fontSize: 20, textAlign: "center" }}>
            Inserisci un numero, l'app proverà ad indovinarlo!
          </Text>
          <View style={styles.containerAllComponents}>
            <UserInputNumber />
            <FeedbackButtons />
          </View>
        </View>
      </ImageBackground>
    </LinearGradient>
  );
}
