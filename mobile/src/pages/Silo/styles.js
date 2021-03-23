import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  propertys: {
    paddingTop: 30,
  },

  siloProperty: {
    fontSize: 14,
    color: "#41414d",
    fontWeight: "bold",
    paddingBottom: 5,
  },

  siloValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: "#737380",
  },

  chooseButton: {
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    borderRadius: 5,
    marginTop: 20,
  },

  chooseButtonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },

  headerTable: {
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  tableTitle: {
    paddingBottom: 5,
    fontSize: 18,
    fontWeight: "bold",
  },

  tableLabel: {
    paddingTop: 15,
  },

  tableRow: {
    flexDirection: "row",
  },

  scrollView: {
    marginHorizontal: 5,
  },

  sensorParams: {
    width: 90,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
  },

  footerLabel: {
    width: 90,
    height: 60,
    paddingLeft: 25,
  },
});
