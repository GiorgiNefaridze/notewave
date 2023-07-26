import AsyncStorage from "@react-native-async-storage/async-storage";

import { notesContext } from "../context/noteContext";

export const useDeleteNote = () => {
  const { setallNote } = notesContext();

  const deleteNote = async (note: {}) => {
    // const allDeletedNotes = [];
    // const deletedNotes = await AsyncStorage.getItem("deleteNotes");
    // await AsyncStorage.removeItem(note?.title);
    // setallNote((prevNotes) =>
    //   prevNotes?.filter((note) => note.title !== note?.title)
    // );
  };

  return { deleteNote };
};
