import { EnumProperty } from "@/contexts/AppContext";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import {
  Alert,
  Button,
  Keyboard,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import Toast from "react-native-toast-message";
import styles from "../../styles/common";

type InputFormProps = {
  onSubmit: (data: {
    name: string;
    age: number;
    isPatented: boolean;
    employment: EnumProperty;
  }) => boolean;
};

export default function InputForm({ onSubmit }: InputFormProps) {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [isPatented, setIsPatented] = useState<boolean>(false);
  const [employment, setEmployment] = useState<EnumProperty>(
    EnumProperty.STUDENT
  );

  const validation = () => {
    if (!name.trim() || name.length === 0) return "Il nome è obbligatorio.";
    if (age > 100 || age < 1) return "L'età deve essere compresa tra 1 e 100!";
    if (employment === null) return "Seleziona la tua occupazione!";
  };

  return (
    <View style={styles.containerForm}>
      <View>
        <Text style={styles.labelForm}>Nome:</Text>
        <TextInput
          placeholder="inserisci il tuo nome"
          placeholderTextColor="white"
          value={name}
          onChangeText={setName}
          style={styles.innerInput}
          autoCapitalize="words"
        />
      </View>

      <View>
        <Text style={styles.labelForm}>Età:</Text>
        <TextInput
          placeholder="inserisci la tua età"
          value={age.toString()}
          onChangeText={(text) => {
            const numeric = parseInt(
              text,
              10
            ); /*per evitare di perdere il tipo di dato number => lo converto in stringa, se effettivamente è UN NUMERO lo ritrasformo in base 10 e lo restituisco */
            if (!isNaN(numeric))
              setAge(
                numeric
              ); /*diversamente avrei dovuto dichiarare l'età come stringa e mettere nel textInput  keyboardType="numeric" */
          }}
          maxLength={2}
          keyboardType="numeric"
          returnKeyType="send" /*compare send sulla tastiera per chiudere il tastierino*/
          onSubmitEditing={
            Keyboard.dismiss
          } /*funzione che chiude il tastierino al send, importare KeyBoard*/
          style={styles.innerInput}
        />
      </View>

      <View style={styles.containerSwitch}>
        <Text style={styles.labelForm}>Sei Patentato?</Text>
        <Switch value={isPatented} onValueChange={setIsPatented} />
      </View>

      <View style={styles.lineSeprator}></View>

      <View>
        <Picker
          selectedValue={employment}
          onValueChange={(value) => setEmployment(value as EnumProperty)}
          style={styles.pickerForm}
          itemStyle={{ color: "white" }}
        >
          <Picker.Item label="Student" value={EnumProperty.STUDENT} />
          <Picker.Item label="Worker" value={EnumProperty.WORKER} />
          <Picker.Item label="Retired" value={EnumProperty.RETIRED} />
        </Picker>
      </View>

      <View style={styles.buttonOuter}>
        <Button
          title="Aggiungi"
          onPress={() => {
            const error = validation();

            if (error) {
              return Alert.alert("Errore nella compilazione", error, [
                { text: "Okay", style: "destructive" },
              ]);
            }
            const success = onSubmit({ name, age, isPatented, employment });
            if (success) {
              Toast.show({
                type: "success",
                text1: "Persona aggiunta !",
                text2: "Inserimento avvenuto con successo",
                position: "bottom",
              });

              setName("");
              setAge(0);
              setIsPatented(false);
              setEmployment(EnumProperty.STUDENT);
            }
          }}
        />
      </View>
    </View>
  );
}
