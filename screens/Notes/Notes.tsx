import { SafeAreaView, FlatList, View } from "react-native";

import { categories } from "../../components/NoteCategories/NoteCategories";
import Header from "../../components/Header/Header";
import TextInput from "../../components/TextInput/TextInput";
import NoteCategories from "../../components/NoteCategories/NoteCategories";

import styles from "./Notes.style";

const Notes = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header color="black" size={1} text={"Notes"} weight="700" align="left" />
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
        weight="700"
        align="left"
      />
    </SafeAreaView>
  );
};

export default Notes;
