import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 30,
    rowGap: 15,
    position: "relative",
  },
  loadingIndicator: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default styles;
