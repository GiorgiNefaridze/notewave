import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { notesContext } from "../context/noteContext";

export const useGetAllNotes = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const { setallNote } = notesContext();

  const getAllNotes = async () => {
    setLoading(true);
    const allNotes = [];

    const notesKeyArray = await AsyncStorage.getAllKeys();

    for (let eachNoteKey of notesKeyArray) {
      const note = await AsyncStorage.getItem(eachNoteKey);

      if (note) {
        allNotes.push(JSON.parse(note));
      }
    }

    setLoading(false);
    setallNote(allNotes);
  };

  return { getAllNotes, loading };
};
