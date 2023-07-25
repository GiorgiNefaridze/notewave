import { useState } from "react";
import { TextInput } from "react-native";

import styles from "./TextInput.style";

interface IProps {
  placeholder: string;
  handleChange?: (value: string) => void;
}

const Input = ({ placeholder, handleChange }: IProps) => {
  const [value, setValue] = useState<string>("");

  return (
    <TextInput
      value={value}
      onChangeText={(e) => {
        setValue(e);
        handleChange(e);
      }}
      placeholder={placeholder}
      placeholderTextColor={"#1C2121"}
      style={styles.inp}
    />
  );
};

export default Input;
