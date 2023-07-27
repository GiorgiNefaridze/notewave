import { useEffect, useState } from "react";
import { SafeAreaView, View, TouchableOpacity, TextInput } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import { INotes } from "../../components/Note/Types";
import { useCreateNote } from "../../hooks/useCreateNote";
import { Routes } from "../../navigation/Routes";
import Modal from "../../components/Modal/Modal";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";

import styles from "./CreateNote.style";

interface IProps {
  navigation: unknown;
}

const CreateNote = ({ navigation }: IProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [noteTitle, setNoteTitle] = useState<string>("");
  const [noteContent, setNoteContent] = useState<string>("");
  const [noteStatus, setNoteStatus] = useState<string>("");

  const { createNote } = useCreateNote();

  useEffect(() => {
    if (noteStatus?.length > 1 && !showModal) {
      handleCreate();
    }
  }, [noteStatus, showModal]);

  const handleCreate = async () => {
    if (
      noteTitle?.length < 3 ||
      noteContent?.length < 3 ||
      noteStatus?.length < 1
    )
      return;

    const note: INotes = {
      title: noteTitle,
      content: noteContent,
      date: new Date().toString(),
      status: noteStatus,
    };

    if (await createNote(note)) {
      setNoteTitle("");
      setNoteContent("");
      setNoteStatus("");
      navigation?.navigate?.(Routes.Notes);
    }
  };

  return (
    <SafeAreaView style={styles.conatiner}>
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          setNoteStatus={setNoteStatus}
          noteStatus={noteStatus}
        />
      )}
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation?.goBack?.()}
      >
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
          text="Save"
          width={70}
          height={35}
          handlePress={() => {
            if (noteContent?.length < 3 || noteTitle?.length < 3) return;

            setShowModal(true);
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
