import { useState, useEffect } from "react";
import { View, Dimensions, Pressable, Image } from "react-native";

import { INotes } from "./Types";
import { noteBgColorsBasedOnStatus } from "./NoteBgColors";
import { NOTE_STATUS } from "../../NotesStatus";
import { useDeleteNote } from "../../hooks/useDeleteNote";
import Header from "../Header/Header";

import styles from "./Note.style";

const screenWidth = Dimensions.get("screen").width,
  screenPadding = 25;

const Note = ({ content, date, title, status, allNoteIndex }: INotes) => {
  const [deleteIndicator, setDeleteIndicator] = useState<boolean>(false);
  const [bgColor, setBgColor] = useState<string>("white");

  const { deleteNote } = useDeleteNote();

  const width =
    content?.length > 100
      ? screenWidth / 2 - 2 * screenPadding
      : screenWidth - 2 * screenPadding;

  useEffect(() => {
    if (allNoteIndex == 1) {
      setBgColor(noteBgColorsBasedOnStatus.allNotes);
    } else {
      setBgColor(noteBgColorsBasedOnStatus[status]);
    }
  }, [status, allNoteIndex]);

  return (
    <Pressable
      style={[
        styles.noteContainer,
        {
          width,
          backgroundColor: deleteIndicator ? "red" : bgColor,
        },
      ]}
      onLongPress={() =>
        setDeleteIndicator((prev) => status !== NOTE_STATUS.Trash && !prev)
      }
    >
      {!deleteIndicator && (
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
            onPress={() =>
              deleteNote({ content, date, title, status }, NOTE_STATUS.Trash)
            }
          >
            <Image
              source={require("../../assets/trashIcon.png")}
              style={styles.trashIcon}
            />
          </Pressable>
        </View>
      )}
    </Pressable>
  );
};

export default Note;
