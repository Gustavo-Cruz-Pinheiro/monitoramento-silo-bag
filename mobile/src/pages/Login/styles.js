import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    alignItems: "center",
  },

  iconKey: {
    marginTop: 50,
    paddingBottom: 10,
  },

  input: {
    marginTop: 50,
    fontSize: 18,
    color: "#222",
    borderWidth: 0,
    borderBottomWidth: 2,
    marginBottom: 90,
  },

  button: {
    height: 50,
    width: "48%",
    backgroundColor: "rgb(35, 141, 35)",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "bold",
  },
});
