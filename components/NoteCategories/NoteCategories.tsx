import { useState, useEffect } from "react";
import { Pressable, Text, Image, Dimensions } from "react-native";

import { IProps } from "./Types";
import { useGetNotes } from "../../hooks/useGetNotes";

import styles from "./NoteCategories.style";

const boxSize: number = Dimensions.get("screen").width / 2 - 40;

const NoteCategories = ({
  id,
  icon,
  label,
  status,
  labelColor,
  activeIndex,
  setActiveIndex,
}: IProps) => {
  const [active, setActive] = useState<boolean>(false);

  const { getNotes } = useGetNotes(); /////////

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
        styles.categoryBox,
        {
          marginLeft: id == 2 || id == 4 ? 10 : 0, /////
          width: boxSize,
          marginBottom: 10,
          backgroundColor: active ? labelColor : "#FFFFFF",
        },
      ]}
      onPress={() => {
        setActiveIndex(id), getNotes(status); ////////////////
      }}
    >
      <Image source={icon} />
      <Text style={{ color: active ? "white" : "black" }}>{label}</Text>
    </Pressable>
  );
};

export default NoteCategories;
