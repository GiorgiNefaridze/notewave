import { NOTE_STATUS } from "../../NotesStatus";

export const noteBgColorsBasedOnStatus = {
  [NOTE_STATUS.allNotes]: "rgba(142, 142, 144, 0.20)",
  [NOTE_STATUS.Favourites]: "rgba(247, 206, 69, 0.20)",
  [NOTE_STATUS.Hidden]: "rgba(78, 148, 248, 0.20)",
  [NOTE_STATUS.Trash]: "rgba(235, 77, 61, 0.20)",
};
