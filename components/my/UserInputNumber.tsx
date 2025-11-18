import { useState } from "react";
import { Alert, Button, Keyboard, Text, TextInput, View } from "react-native";
export default function UserInputNumber() {
  const [userNumber, setUserNumber] = useState<number>(0);

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
    return true;
  };

  const handleCancelChoise = () => {
    setUserNumber(0);
  };
  return (
    <View>
      <Text>Inserisci un numero tra 1 - 100</Text>
      <View>
        <TextInput
          placeholder="inserisci un numero"
          keyboardType="numeric"
          value={userNumber.toString()}
          returnKeyType="done"
          maxLength={3}
          onSubmitEditing={Keyboard.dismiss}
        />
      </View>
      <View>
        <Button
          title="Cancel"
          onPress={() => {
            handleCancelChoise;
          }}
        />
        <Button
          title="Conferma"
          onPress={() => {
            handleConfirmChoise;
          }}
        />
      </View>
    </View>
  );
}
