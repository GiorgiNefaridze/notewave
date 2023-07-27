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

interface IProps {
  children: JSX.Element;
}

const notes = createContext<INotesContext>({} as INotesContext);

export const NotesContext = () => {
  return useContext(notes);
};

export const NotesContextProvider = ({ children }: IProps) => {
  const [allNote, setallNote] = useState<INotes[]>([]);

  return (
    <notes.Provider value={{ allNote, setallNote }}>{children}</notes.Provider>
  );
};
