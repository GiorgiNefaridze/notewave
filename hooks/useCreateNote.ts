import AsyncStorage from "@react-native-async-storage/async-storage";

import { INotes } from "../components/Note/Types";

export const useCreateNote = () => {
  const createNote = async (note: INotes) => {
    await AsyncStorage.setItem(note?.title, JSON.stringify(note));

    const newNote = await AsyncStorage.getItem(note?.title);

    if (newNote && Object.keys(JSON.parse(newNote)).length) {
      return true;
    } else {
      return false;
    }
  };

  return { createNote };
};
