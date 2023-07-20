import { Pressable, Text } from "react-native";

import { IProps } from "./Types";

const Button = ({
  text,
  bgcolor: backgroundColor,
  height,
  width,
  radius,
  handlePress,
}: IProps) => {
  const styles = {
    backgroundColor,
    width,
    height,
    borderRadius: radius,
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Pressable style={styles} onPress={handlePress}>
      <Text style={{ color: "white" }}>{text}</Text>
    </Pressable>
  );
};

export default Button;
