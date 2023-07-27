import { useEffect, useState } from "react";
import { View, Dimensions, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowUpWideShort, faXmark } from "@fortawesome/free-solid-svg-icons";
import CheckBox from "react-native-check-box";

import { NOTE_STATUS } from "../../NotesStatus";
import Header from "../Header/Header";

import styles from "./Modal.style";

const modalWidth: number = Dimensions.get("screen").width,
  modalHeight: number = Dimensions.get("screen").height / 3;

const categories = [
  NOTE_STATUS.allNotes,
  NOTE_STATUS.Favourites,
  NOTE_STATUS.Hidden,
  NOTE_STATUS.Trash,
];

interface IProps {
  text: string;
  activeIndicator: string;
  setActiveIndicator: React.Dispatch<React.SetStateAction<string>>;
}

const Check = ({ text, activeIndicator, setActiveIndicator }: IProps) => {
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    if (text == activeIndicator) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [activeIndicator]);

  return (
    <CheckBox
      isChecked={active}
      onClick={() => setActiveIndicator(text)}
      rightText={text}
      rightTextStyle={{ textTransform: "uppercase" }}
    />
  );
};

const Modal = () => {
  const [activeIndicator, setActiveIndicator] = useState<string>("");

  return (
    <View
      style={[
        styles.modal,
        {
          width: modalWidth,
          height: modalHeight,
        },
      ]}
    >
      <View style={styles.header}>
        <TouchableOpacity
          style={{ flexDirection: "row", alignContent: "center" }}
        >
          <FontAwesomeIcon icon={faArrowUpWideShort} />
          <Header
            color="#1C2121"
            size={3}
            text="Categories"
            weight="400"
            align="left"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faXmark} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: modalHeight - modalHeight / 4,
          justifyContent: "center",
          rowGap: 10,
        }}
      >
        {categories.map((category) => (
          <Check
            text={category}
            activeIndicator={activeIndicator}
            setActiveIndicator={setActiveIndicator}
          />
        ))}
      </View>
    </View>
  );
};

export default Modal;
