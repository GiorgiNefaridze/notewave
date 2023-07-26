import { useState, useEffect } from "react";
import { SafeAreaView, View, Dimensions, FlatList } from "react-native";

import { INotes } from "../../components/Note/Types";
import { useGetNotes } from "../../hooks/useGetNotes";
import { NOTE_STATUS } from "../../NotesStatus";
import Header from "../../components/Header/Header";
import Input from "../../components/TextInput/TextInput";
import Note from "../../components/Note/Note";

import styles from "./Search.style";

const screenPadding = 25,
  width = Dimensions.get("screen").width - 2 * screenPadding;

const Search = () => {
  const [searchedNotes, setSearchedNotes] = useState<INotes[]>([]);
  const [value, setValue] = useState<string>("");

  const { getNotes, loading, notes } = useGetNotes();

  useEffect(() => {
    getNotes(NOTE_STATUS.allNotes);
  }, []);

  useEffect(() => {
    if (value) {
      setSearchedNotes(
        notes?.filter(({ title }: INotes) =>
          title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
        )
      );
    } else {
      setSearchedNotes([]);
    }
  }, [value]);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        color="#1C2121"
        size={1}
        text={"Notes"}
        weight="600"
        align="left"
      />
      <Input placeholder="Search" handleChange={(e) => setValue(e)} />
      <Header
        color="#1C2121"
        text={"Recent Searches"}
        weight="400"
        align="left"
        size={2}
      />
      {searchedNotes?.length === 0 && (
        <View style={[styles.noContenContainer, { width }]}>
          <View style={styles.noContentText}>
            <Header
              color="#1C2121"
              size={3}
              text="No recent searches to display"
              align="left"
              weight="300"
              fontStyle="italic"
            />
          </View>
        </View>
      )}
      {searchedNotes?.length > 0 && (
        <FlatList
          data={searchedNotes}
          renderItem={({ item }) => <Note {...item} />}
          keyExtractor={(item) => item.title}
          numColumns={2}
          columnWrapperStyle={{
            columnGap: 10,
            marginBottom: 10,
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;
