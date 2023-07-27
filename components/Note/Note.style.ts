import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  noteContainer: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: "white",
    padding: 15,
    rowGap: 10,
  },
  divider: {
    height: 1,
    backgroundColor: "black",
    textAlign: "center",
    opacity: 0.2,
  },
  trashIcon: { width: 50, height: 50 },
});

export default styles;
