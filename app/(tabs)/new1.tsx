import { useAppContext } from "@/contexts/AppContext";
import styles from "@/styles/common";
import { FlatList, Text, View } from "react-native";

export default function New1Screen() {
  const { personas } = useAppContext();

  return (
    <View style={styles.containerHome}>
      {personas.length === 0 ? (
        <Text style={styles.topTextHome}>Nessuna persona da mostrare</Text>
      ) : (
        <FlatList
          contentContainerStyle={styles.flatList}
          data={personas}
          renderItem={(itemData) => (
            <View style={styles.containerSinglePerson}>
              <View style={styles.containerAnagraphic}>
                <Text>{itemData.item.name}</Text>
                <Text
                  style={{
                    color: itemData.item.isPatented ? "green" : "black",
                  }}
                >
                  {itemData.item.isPatented ? "Patentato" : "Non patentato"}
                </Text>
              </View>

              <View style={styles.containerDetails}>
                <Text>{itemData.item.age}</Text>
                <Text>{itemData.item.employment}</Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
}
