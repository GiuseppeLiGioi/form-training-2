import { useAppContext } from "@/contexts/AppContext";
import styles from "@/styles/common";
import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { FlatList, ImageBackground, Text, View } from "react-native";

export default function New1Screen() {
  const [columns, setColumns] = useState<number>(2);
  const { personas } = useAppContext();

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
        {personas.length === 0 ? (
          <Text style={styles.topTextHome}>Nessuna persona da mostrare</Text>
        ) : (
          <View style={styles.containerFlatList}>
            <FlatList
              style={{ marginTop: 20 }}
              contentContainerStyle={styles.flatList}
              data={personas}
              key={columns}
              numColumns={columns}
              columnWrapperStyle={{ justifyContent: "space-between" }}
              renderItem={(itemData) => (
                <LinearGradient
                  colors={["#4B3F92", "#8d7bf1ff", "#2BB3C7"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.containerSinglePerson}
                >
                  <View style={styles.containerAnagraphic}>
                    <Text style={styles.nameCard}>{itemData.item.name}</Text>
                    <Text style={styles.ageCard}>{itemData.item.age}</Text>
                    <Text style={styles.employmentCard}>
                      {itemData.item.employment}
                    </Text>
                  </View>

                  <View style={styles.lineSeparatorCard}></View>

                  <View style={styles.containerDetails}>
                    <Text style={styles.isPatented}>
                      {itemData.item.isPatented ? "Patentato" : "Non patentato"}
                    </Text>
                    <FontAwesome5
                      name="car-side"
                      size={16}
                      color={itemData.item.isPatented ? "green" : "gray"}
                    />
                  </View>

                  <View style={styles.lineSeparatorCard}></View>
                </LinearGradient>
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        )}
      </ImageBackground>
    </LinearGradient>
  );
}
