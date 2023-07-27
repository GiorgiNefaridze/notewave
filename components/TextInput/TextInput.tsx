import { useState } from "react";
import { TextInput } from "react-native";

import { IProps } from "./Types";

import styles from "./TextInput.style";

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
      style={styles.input}
    />
  );
};

export default Input;
