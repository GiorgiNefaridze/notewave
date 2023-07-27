import { NOTE_STATUS } from "./NotesStatus";

export const categories = [
  {
    id: 1,
    icon: require("./assets/allNotes.png"),
    label: "All Notes",
    status: NOTE_STATUS.allNotes,
    labelColor: "#8E8E92",
  },
  {
    id: 2,
    icon: require("./assets/favourites.png"),
    label: "Favourites",
    status: NOTE_STATUS.Favourites,
    labelColor: "#F7CE45",
  },
  {
    id: 3,
    icon: require("./assets/hidden.png"),
    label: "Hidden",
    status: NOTE_STATUS.Hidden,
    labelColor: "#4E94F8",
  },
  {
    id: 4,
    icon: require("./assets/trash.png"),
    label: "Trash",
    status: NOTE_STATUS.Trash,
    labelColor: "#EB4D3D",
  },
];
