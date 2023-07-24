import { useState } from "react";
import { SafeAreaView, FlatList, View } from "react-native";

import { categories } from "../../components/NoteCategories/NoteCategories";
import { INotes } from "../../components/Note/Types";
import Header from "../../components/Header/Header";
import TextInput from "../../components/TextInput/TextInput";
import NoteCategories from "../../components/NoteCategories/NoteCategories";
import Note from "../../components/Note/Note";

import styles from "./Notes.style";

const Notes = () => {
  const [notes, setNotes] = useState<INotes[]>([]);

  return (
    <SafeAreaView style={styles.container}>
      <Header color="black" size={1} text={"Notes"} weight="600" align="left" />
      <TextInput placeholder={"Search"} />
      <View>
        <FlatList
          data={categories}
          renderItem={({ item }) => {
            return <NoteCategories {...item} />;
          }}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
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
        renderItem={({ item }) => <Note {...item} />}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginVertical: 7,
        }}
      />
    </SafeAreaView>
  );
};

export default Notes;
