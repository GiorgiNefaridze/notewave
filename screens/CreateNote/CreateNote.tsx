import { useState, useEffect } from "react";
import { SafeAreaView, View, TouchableOpacity, TextInput } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";

import styles from "./CreateNote.style";

const CreateNote = ({ navigation }: { navigation: unknown }) => {
  const [noteTitle, setNoteTitle] = useState<string>("");
  const [noteContent, setNoteContent] = useState<string>("");

  const goBack = () => {
    navigation?.goBack?.();
  };

  useEffect(() => {}, [noteTitle, noteContent]);

  return (
    <SafeAreaView style={styles.conatiner}>
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
          text="Save"
          width={70}
          height={35}
          handlePress={() => {}}
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
