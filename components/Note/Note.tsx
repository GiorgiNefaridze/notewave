import { View, Dimensions } from "react-native";

import { INotes } from "./Types";
import Header from "../Header/Header";

import styles from "./Note.style";

const screenWidth = Dimensions.get("screen").width,
  screenPadding = 25;

const Note = ({ content, date, title }: INotes) => {
  const width =
    content?.length > 100
      ? screenWidth / 2 - screenPadding - 40
      : screenWidth - 2 * screenPadding;

  return (
    <View style={[styles.noteContainer, { width }]}>
      <Header color="#1C2121" size={2} text={title} weight="500" align="left" />
      <View style={styles.divider}></View>
      <Header
        color="#1C2121"
        size={3}
        text={content}
        weight="400"
        align="left"
      />
      <Header color="#3C3C43" size={3} text={date} weight="300" align="left" />
    </View>
  );
};

export default Note;
