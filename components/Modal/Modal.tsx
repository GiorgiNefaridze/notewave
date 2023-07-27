import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { View, Dimensions, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowUpWideShort, faXmark } from "@fortawesome/free-solid-svg-icons";
import CheckBox from "react-native-check-box";

import { NOTE_STATUS } from "../../NotesStatus";
import Header from "../Header/Header";
import Button from "../Button/Button";

import styles from "./Modal.style";

const modalWidth: number = Dimensions.get("screen").width,
  modalHeight: number = Dimensions.get("screen").height / 2.5;

const categories = [
  NOTE_STATUS.allNotes,
  NOTE_STATUS.Favourites,
  NOTE_STATUS.Hidden,
  NOTE_STATUS.Trash,
];

interface ICheck {
  text: string;
  activeIndicator: string;
  setActiveIndicator: Dispatch<SetStateAction<string>>;
  setNoteStatus: Dispatch<SetStateAction<string>>;
}

interface IModal {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setNoteStatus: Dispatch<SetStateAction<string>>;
  noteStatus: string;
}

const Check = ({
  text,
  activeIndicator,
  setActiveIndicator,
  setNoteStatus,
}: ICheck) => {
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
      onClick={() => {
        setActiveIndicator(text);
        setNoteStatus(text);
      }}
      rightText={text}
      rightTextStyle={{ textTransform: "uppercase" }}
    />
  );
};

const Modal = ({ setShowModal, setNoteStatus, noteStatus }: IModal) => {
  const [activeIndicator, setActiveIndicator] = useState<string>("");

  useEffect(() => {
    setNoteStatus("");
  }, []);

  const handleClose = () => {
    setNoteStatus("");
    setShowModal(false);
  };

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
        <TouchableOpacity onPress={handleClose}>
          <FontAwesomeIcon icon={faXmark} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: modalHeight - modalHeight / 0.5,
          justifyContent: "center",
          rowGap: 15,
        }}
      >
        {categories.map((category, index) => (
          <Check
            key={index}
            text={category}
            activeIndicator={activeIndicator}
            setActiveIndicator={setActiveIndicator}
            setNoteStatus={setNoteStatus}
          />
        ))}
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button
          bgcolor="#007AFF"
          text="Save"
          radius={5}
          width={150}
          height={40}
          handlePress={() => {
            if (noteStatus?.length > 1) {
              setShowModal(false);
            }
          }}
        />
        <Button
          bgcolor="#007AFF"
          text="Cancel"
          radius={5}
          width={150}
          height={40}
          handlePress={handleClose}
        />
      </View>
    </View>
  );
};

export default Modal;
