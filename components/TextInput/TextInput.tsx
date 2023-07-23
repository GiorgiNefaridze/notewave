import { useState } from "react";
import { TextInput } from "react-native";

import styles from "./TextInput.style";

const input = ({ placeholder }: { placeholder: string }) => {
  const [value, setValue] = useState<string>("");

  return (
    <TextInput
      value={value}
      onChangeText={setValue}
      placeholder={placeholder}
      placeholderTextColor={"#1C2121"}
      style={styles.inp}
    />
  );
};

export default input;
