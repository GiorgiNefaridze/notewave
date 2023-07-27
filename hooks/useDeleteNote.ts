import AsyncStorage from "@react-native-async-storage/async-storage";

import { INotes } from "../components/Note/Types";
import { NotesContext } from "../context/noteContext";
import { useGetNotes } from "./useGetNotes";

export const useDeleteNote = () => {
  const { setallNote } = NotesContext();

  const { getNotes } = useGetNotes();

  const deleteNote = async (noteData: INotes, status: string) => {
    const deleteNote = { ...noteData, status },
      updatedNotes = [];

    await AsyncStorage.setItem(noteData?.title, JSON.stringify(deleteNote));

    await getNotes(status);
  };

  return { deleteNote };
};
