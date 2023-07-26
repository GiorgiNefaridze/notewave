import { useState, useEffect } from "react";
import { Pressable, Text, Image, Dimensions } from "react-native";

import { IProps } from "./Types";
import { useGetNotes } from "../../hooks/useGetNotes";

import styles from "./NoteCategories.style";

const boxSize = Dimensions.get("screen").width / 2 - 40;

export const categories = [
  {
    id: 1,
    icon: require("../../assets/allNotes.png"),
    label: "All Notes",
    status: "allNotes",
    labelColor: "#8E8E92",
  },
  {
    id: 2,
    icon: require("../../assets/favourites.png"),
    label: "Favourites",
    status: "favourites",
    labelColor: "#F7CE45",
  },
  {
    id: 3,
    icon: require("../../assets/hidden.png"),
    label: "Hidden",
    status: "hidden",
    labelColor: "#4E94F8",
  },
  {
    id: 4,
    icon: require("../../assets/trash.png"),
    label: "Trash",
    status: "trash",
    labelColor: "#EB4D3D",
  },
];

const NoteCategories = ({
  icon,
  label,
  id,
  status,
  labelColor,
  activeIndex,
  setActiveIndex,
}: IProps) => {
  const [active, setActive] = useState<boolean>(false);

  const { getNotes } = useGetNotes();

  useEffect(() => {
    if (activeIndex === id) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [activeIndex]);

  return (
    <Pressable
      style={[
        styles.box,
        {
          marginLeft: id == 2 || id == 4 ? 10 : 0,
          width: boxSize,
          marginBottom: 10,
          backgroundColor: active ? labelColor : "#FFFFFF",
        },
      ]}
      onPress={() => {
        setActiveIndex(id), getNotes(status);
      }}
    >
      <Image source={icon} />
      <Text style={{ color: active ? "white" : "black" }}>{label}</Text>
    </Pressable>
  );
};

export default NoteCategories;
