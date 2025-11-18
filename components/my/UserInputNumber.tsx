import styles from "@/styles/common";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Alert, Button, Keyboard, Text, TextInput, View } from "react-native";
export default function UserInputNumber() {
  const [userNumber, setUserNumber] = useState<number>(0);
  const [inputSting, setInputSting] = useState<string>("");

  const handleConfirmChoise = (string: string): boolean => {
    if (!string) {
      Alert.alert("Errore", "Inserisci un numero");
      return false;
    }

    const numeric = parseInt(string, 10);
    if (isNaN(numeric)) {
      Alert.alert("Errore", "Deve essere un numero valido");
      return false;
    }

    if (numeric > 100 || numeric < 1) {
      Alert.alert("Errore", "Deve essere compreso tra 1 e 100");
      return false;
    }

    setUserNumber(numeric);
    console.log("tutto ok");
    return true;
  };

  const handleCancelChoise = () => {
    setInputSting("");
    setUserNumber(0);
  };
  return (
    <View>
      <LinearGradient
        colors={["#4FD1C5", "#63B3ED"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.containerNumberForm}
      >
        <Text style={{ color: "white", fontSize: 20, textAlign: "center" }}>
          Inserisci un numero tra 1 - 100
        </Text>
        <TextInput
          placeholder="inserisci un numero"
          placeholderTextColor="white"
          keyboardType="numeric"
          value={inputSting}
          onChangeText={setInputSting}
          returnKeyType="done"
          maxLength={3}
          onSubmitEditing={Keyboard.dismiss}
          style={styles.innerInput}
        />
        <View style={styles.containerNumberFormButton}>
          <View style={styles.buttonChoose}>
            <Button
              color="#ff6363ff"
              title="Cancel"
              onPress={() => handleCancelChoise()}
            />
          </View>

          <View style={styles.buttonChoose}>
            <Button
              color="#105966ff"
              title="Conferma"
              onPress={() => handleConfirmChoise(inputSting)}
            />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}
