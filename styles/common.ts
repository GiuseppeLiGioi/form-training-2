import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerHome: {
    justifyContent: "center",
    marginTop: 20,
    padding: 16,
    backgroundColor: "#b6d2ffff",
    height: "100%",
  },

  topTextHome: {
    fontSize: 16,
    textAlign: "center",
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
    borderWidth: 2,
    borderRadius: 15,
    padding: 15,
    minWidth: "80%",
    textAlign: "center",
    color: "black",
    borderColor: "blue",
  },

  labelForm: {
    textAlign: "center",
    fontSize: 16,
  },

  containerSwitch: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },

  containerPicker: {},

  pickerForm: {
    minWidth: "80%",
  },
});

export default styles;
