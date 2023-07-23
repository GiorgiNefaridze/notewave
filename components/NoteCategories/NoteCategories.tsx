import { Pressable, Text, Image, Dimensions } from "react-native";

import { IProps } from "./Types";

import styles from "./NoteCategories.style";

const boxSize = Dimensions.get("screen").width / 2 - 40;

export const categories = [
  {
    id: 1,
    icon: require("../../assets/allNotes.png"),
    label: "All Notes",
  },
  {
    id: 2,
    icon: require("../../assets/favourites.png"),
    label: "Favourites",
  },
  {
    id: 3,
    icon: require("../../assets/hidden.png"),
    label: "Hidden",
  },
  {
    id: 4,
    icon: require("../../assets/trash.png"),
    label: "Trash",
  },
];

const NoteCategories = ({ icon, label, id }: IProps) => {
  return (
    <Pressable
      style={[
        styles.box,
        {
          marginLeft: id == 2 || id == 4 ? 10 : 0,
          width: boxSize,
          marginBottom: 10,
        },
      ]}
    >
      <Image source={icon} />
      <Text>{label}</Text>
    </Pressable>
  );
};

export default NoteCategories;
