import {
  useContext,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

import { INotes } from "../components/Note/Types";

interface INotesContext {
  allNote: INotes[];
  setallNote: Dispatch<SetStateAction<INotes[]>>;
}

const notes = createContext<INotesContext>({} as INotesContext);

export const notesContext = () => {
  return useContext(notes);
};

export const NotesContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [allNote, setallNote] = useState<INotes[]>([]);

  return (
    <notes.Provider value={{ allNote, setallNote }}>{children}</notes.Provider>
  );
};
