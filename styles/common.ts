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
    color: "#363636ff",
  },

  containerForm: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    width: "100%",
    marginTop: 20,
    gap: 20,
  },

  innerInput: {
    borderWidth: 3,
    borderRadius: 15,
    padding: 15,
    minWidth: "80%",
    textAlign: "center",
    color: "black",
    borderColor: "#ffffff",
  },

  labelForm: {
    textAlign: "center",
    fontSize: 16,
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

  flatList: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },

  containerAnagraphic: {
    flexDirection: "row",
    gap: 50,
  },

  containerDetails: {
    flexDirection: "row",
    gap: 50,
  },

  containerSinglePerson: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    padding: 15,
    minWidth: "80%",
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "blue",
  },

  buttonOuter: {
    padding: 8,
    backgroundColor: "white",
    borderRadius: 12,
  },
});

export default styles;
