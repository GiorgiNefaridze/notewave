import { useState } from "react";
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import { INotes } from "../../components/Note/Types";
import { useCreateNote } from "../../hooks/useCreateNote";
import { Routes } from "../../navigation/Routes";
import Modal from "../../components/Modal/Modal";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";

import styles from "./CreateNote.style";

const List = ({ text }: { text: string }) => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <View
      style={[styles.modalCategory, hovered && { backgroundColor: "#E6E6E7" }]}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setHovered(false)}
    >
      <Header color="#1C2121" size={3} text={text} weight="400" align="left" />
    </View>
  );
};


const CreateNote = ({ navigation }: { navigation: unknown }) => {
  const [showModal, setShowModal] = useState<boolean>(true);
  const [noteTitle, setNoteTitle] = useState<string>("");
  const [noteContent, setNoteContent] = useState<string>("");

  const { createNote } = useCreateNote();

  const goBack = () => {
    navigation?.goBack?.();
  };

  const handleCreate = async () => {
    if (noteTitle?.length < 3 || noteContent?.length < 3) return;

    const note: INotes = {
      title: noteTitle,
      content: noteContent,
      date: new Date().toString(),
      status: "", /// ============================,
    };

    const createdNote = await createNote(note); /// ============================,

    if (createdNote) {
      setNoteTitle("");
      setNoteContent("");
      navigation?.navigate?.(Routes.Notes);
    }
  };

  return (
    <SafeAreaView style={styles.conatiner}>
      {showModal && <Modal />}
      <TouchableOpacity style={styles.header} onPress={goBack}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <FontAwesomeIcon icon={faAngleLeft} color="#007AFF" />
          <Header
            color="#007AFF"
            size={3}
            text={"Back"}
            weight="400"
            align="left"
          />
        </View>
        <Button
          bgcolor="#1F2124"
          radius={15}
          text="Save as"
          width={70}
          height={35}
          handlePress={() => {
            handleCreate();
            setShowModal((prev) => !prev);
          }}
        />
      </TouchableOpacity>
      <View style={{ rowGap: 15 }}>
        <TextInput
          placeholder="Page Title"
          placeholderTextColor={"#979797"}
          style={styles.input}
          value={noteTitle}
          onChangeText={setNoteTitle}
        />
        <TextInput
          placeholder="Page Content..."
          placeholderTextColor={"#979797"}
          style={styles.input}
          value={noteContent}
          onChangeText={setNoteContent}
        />
      </View>
    </SafeAreaView>
  );
};

export default CreateNote;
