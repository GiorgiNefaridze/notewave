import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { INotes } from "../components/Note/Types";

export const useGetAllNotes = () => {
  const [notes, setNotes] = useState<INotes[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

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
    setNotes(allNotes);
  };

  return { getAllNotes, notes, loading };
};
