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

  title: {
    fontSize: 25,
    marginBottom: 16,
    marginTop: 40,
    color: "#13131a",
    fontWeight: "bold",
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#737380",
  },

  total: {
    fontSize: 15,
    color: "#737380",
    paddingTop: 10,
  },

  totalBold: {
    fontWeight: "bold",
  },

  siloList: {
    marginTop: 32,
  },

  silo: {
    borderStyle: "solid",
    borderTopWidth: 10,
    borderTopColor: "#49a010",
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#FFF",
    marginBottom: 16,
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

  siloValueAverage: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    width: 20,
    color: "black",
  },

  detailsButton: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  detailsButtonText: {
    color: "#49a010",
    fontSize: 15,
    fontWeight: "bold",
  },
});
