import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modal: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "white",
    borderRadius: 35,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    padding: 15,
    justifyContent: "space-between",
    zIndex: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default styles;
