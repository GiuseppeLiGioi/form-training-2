import { useAppContext } from "@/contexts/AppContext";
import styles from "@/styles/common";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { ImageBackground } from "react-native";

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
      ></ImageBackground>
    </LinearGradient>
  );
}
