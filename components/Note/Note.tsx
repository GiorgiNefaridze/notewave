import { useState } from "react";
import { View, Dimensions, Pressable, Image } from "react-native";

import { INotes } from "./Types";
import { useDeleteNote } from "../../hooks/useDeleteNote";
import Header from "../Header/Header";

import styles from "./Note.style";

const screenWidth = Dimensions.get("screen").width,
  screenPadding = 25;

const Note = ({ content, date, title, status }: INotes) => {
  const [deleteIndicator, setDeleteIndicator] = useState<boolean>(false);

  const { deleteNote } = useDeleteNote();

  const width =
    content?.length > 100
      ? screenWidth / 2 - screenPadding - 40
      : screenWidth - 2 * screenPadding;

  return (
    <Pressable
      style={[
        styles.noteContainer,
        { width, backgroundColor: deleteIndicator ? "red" : "white" },
      ]}
      onLongPress={() => setDeleteIndicator((prev) => !prev)}
    >
      {deleteIndicator == false && (
        <>
          <Header
            color="#1C2121"
            size={2}
            text={title}
            weight="500"
            align="left"
          />
          <View style={styles.divider}></View>
          <Header
            color="#1C2121"
            size={3}
            text={content}
            weight="400"
            align="left"
          />
          <Header
            color="#3C3C43"
            size={3}
            text={date}
            weight="300"
            align="left"
          />
        </>
      )}

      {deleteIndicator && (
        <View
          style={{ flex: 1, alignItems: "flex-end", justifyContent: "center" }}
        >
          <Pressable
            onPress={() => deleteNote({ content, date, title, status })}
          >
            <Image
              source={require("../../assets/trashIcon.png")}
              style={{ width: 50, height: 50 }}
            />
          </Pressable>
        </View>
      )}
    </Pressable>
  );
};

export default Note;
