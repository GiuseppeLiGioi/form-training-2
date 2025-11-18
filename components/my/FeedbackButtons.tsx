import styles from "@/styles/common";
import { Button, View } from "react-native";
export default function FeedbackButtons() {
  return (
    <View>
      <View style={[styles.buttonChoose, styles.sameWidth]}>
        <Button title="Più alto" />
      </View>
      <View style={[styles.buttonChoose, styles.sameWidth]}>
        <Button title="Più basso" />
      </View>
      <View style={[styles.buttonChoose, styles.sameWidth]}>
        <Button title="Corretto" />
      </View>
    </View>
  );
}
