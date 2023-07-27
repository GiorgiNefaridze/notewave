import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    paddingTop: 45,
    paddingHorizontal: 25,
    position: "relative",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    fontWeight: "bold",
    fontSize: 30,
    paddingVertical: 10,
  },

  modalCategory: {
    width: "100%",
    paddingVertical: 10,
    paddingLeft: 10,
    backgroundColor: "white",
    borderRadius: 8,
  },
});

export default styles;
