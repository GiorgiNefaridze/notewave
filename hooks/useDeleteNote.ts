import AsyncStorage from "@react-native-async-storage/async-storage";

import { INotes } from "../components/Note/Types";
import { NotesContext } from "../context/noteContext";

export const useDeleteNote = () => {
  const { setallNote } = NotesContext();

  const deleteNote = async (noteData: INotes, status: string) => {
    const deletedNote: INotes = { ...noteData, status };

    await AsyncStorage.setItem(deletedNote?.title, JSON.stringify(deletedNote));

    setallNote((prevNotes) =>
      prevNotes?.filter((note) => note?.title !== deletedNote?.title)
    );
  };

  return { deleteNote };
};
