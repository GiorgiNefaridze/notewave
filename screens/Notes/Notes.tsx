import { useEffect, useState } from "react";
import { SafeAreaView, FlatList, View, ActivityIndicator } from "react-native";
import { useIsFocused } from "@react-navigation/native";

import { useGetNotes } from "../../hooks/useGetNotes";
import { categories } from "../../NotesCategories";
import { NotesContext } from "../../context/noteContext";
import { NOTE_STATUS } from "../../NotesStatus";
import Header from "../../components/Header/Header";
import TextInput from "../../components/TextInput/TextInput";
import NoteCategories from "../../components/NoteCategories/NoteCategories";
import Note from "../../components/Note/Note";

import styles from "./Notes.style";

const Notes = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const isFocused = useIsFocused();
  const { getNotes, loading } = useGetNotes();
  const { allNote: notes } = NotesContext();

  useEffect(() => {
    getNotes(NOTE_STATUS.allNotes);
    setActiveIndex(1);
  }, [isFocused]);

  if (loading) {
    return (
      <ActivityIndicator
        size={"large"}
        color={"#007AFF"}
        style={styles.loadingIndicator}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header color="black" size={1} text={"Notes"} weight="600" align="left" />
      <TextInput placeholder={"Search"} handleChange={() => {}} />
      <View>
        <FlatList
          data={categories}
          renderItem={({ item }) => {
            return (
              <NoteCategories
                {...item}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            );
          }}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <Header
        color="black"
        size={1}
        text={"Recent Notes"}
        weight="600"
        align="left"
      />
      <FlatList
        data={notes}
        renderItem={({ item }) => <Note {...item} allNoteIndex={activeIndex} />}
        keyExtractor={(item) => item.title}
        numColumns={2}
        columnWrapperStyle={{
          columnGap: 10,
          marginBottom: 10,
        }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Notes;
