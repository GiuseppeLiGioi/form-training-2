import { EnumProperty } from "@/contexts/AppContext";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { Button, Switch, Text, TextInput, View } from "react-native";
import styles from "../styles/common";

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

  return (
    <View style={styles.containerForm}>
      <View>
        <Text style={styles.labelForm}>Nome:</Text>
        <TextInput
          placeholder="inserisci il tuo nome"
          value={name}
          onChangeText={setName}
          style={styles.innerInput}
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
          keyboardType="numeric"
          style={styles.innerInput}
        />
      </View>

      <View style={styles.containerSwitch}>
        <Text style={styles.labelForm}>Sei Patentato?</Text>
        <Switch value={isPatented} onValueChange={setIsPatented} />
      </View>

      <View>
        <Picker
          selectedValue={employment}
          onValueChange={(value) => setEmployment(value as EnumProperty)}
          style={styles.pickerForm}
        >
          <Picker.Item label="Student" value={EnumProperty.STUDENT} />
          <Picker.Item label="Worker" value={EnumProperty.WORKER} />
          <Picker.Item label="Retired" value={EnumProperty.RETIRED} />
        </Picker>
      </View>

      <Button
        title="Aggiungi"
        onPress={() => {
          const success = onSubmit({ name, age, isPatented, employment });
          if (success) {
            setName("");
            setAge(0);
            setIsPatented(false);
            setEmployment(EnumProperty.STUDENT);
          }
        }}
      />
    </View>
  );
}
