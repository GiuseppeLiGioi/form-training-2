import { useAppContext } from "@/contexts/AppContext";
import styles from "@/styles/common";
import { LinearGradient } from "expo-linear-gradient";
import { FlatList, ImageBackground, Text, View } from "react-native";

export default function New2Screen() {
  const { personas } = useAppContext();

  return (
    <LinearGradient
      colors={["#2612ddff", "#dbdadaff"]}
      style={styles.containerHome}
    >
      <ImageBackground
        source={require("../../assets/images/background.jpg")}
        resizeMode="cover"
        style={[styles.containerHome, styles.backgroundImage]}
      >
        {personas.length === 0 ? (
          <Text style={styles.topTextHome}>Nessuna persona da mostrare</Text>
        ) : (
          <FlatList
            style={{ marginTop: 20 }}
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
      </ImageBackground>
    </LinearGradient>
  );
}
