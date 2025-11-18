import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    justifyContent: "center",
  },

  backgroundImage: {
    opacity: 0.65,
  },

  topTextHome: {
    fontSize: 16,
    textAlign: "center",
    color: "white",
  },

  containerForm: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    width: "100%",
    gap: 20,
  },

  innerInput: {
    borderWidth: 3,
    borderRadius: 15,
    padding: 15,
    minWidth: "80%",
    textAlign: "center",
    color: "white",
    borderColor: "#aad9ffff",
  },

  labelForm: {
    textAlign: "center",
    fontSize: 16,
    color: "white",
    marginBottom: 5,
  },
  lineSeprator: {
    width: "80%",
    height: 2,
    backgroundColor: "#ffffff",
  },

  containerSwitch: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },

  pickerForm: {
    minWidth: "80%",
  },
  buttonOuter: {
    padding: 8,
    backgroundColor: "white",
    borderRadius: 12,
  },

  containerFlatList: {
    flex: 1,
    padding: 8,
  },

  flatList: {
    gap: 20,
  },

  containerSinglePerson: {
    borderWidth: 2,
    padding: 8,
    borderRadius: 12,
    borderColor: "white",
    width: "48%",
  },

  containerAnagraphic: {
    padding: 12,
    gap: 10,
  },

  nameCard: {
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
  },

  ageCard: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },

  employmentCard: {
    fontSize: 20,
    color: "white",
    fontWeight: "500",
  },

  lineSeparatorCard: {
    height: 1,
    width: "85%",
    backgroundColor: "white",
    alignSelf: "center",
    alignItems: "center",
  },

  containerDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    gap: 10,
  },

  isPatented: {
    fontSize: 14,
    color: "white",
    fontWeight: "500",
  },

  buttonRemoveItem: {
    backgroundColor: "rgba(175, 175, 175, 0.2)",
    marginTop: 10,
    width: "70%",
    alignSelf: "center",
    borderRadius: 15,
  },

  /*stile del gioco in new2 */

  containerNumberGame: {
    flex: 1,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },

  containerAllComponents: {
    flex: 1,
    gap: 15,
    marginTop: 15,
  },

  containerNumberForm: {
    padding: 16,
    gap: 15,
    borderRadius: 20,
  },

  containerNumberFormButton: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 5,
  },

  buttonChoose: {
    backgroundColor: "rgba(175, 175, 175, 0.2)",
    alignSelf: "center",
    padding: 4,
    borderRadius: 15,
  },
});

export default styles;
