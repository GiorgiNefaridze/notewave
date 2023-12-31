import { Text } from "react-native";

import { IProps } from "./Types";
import { getFontSize } from "../../utils/getFontSize";

const Header = ({
  color,
  size,
  weight,
  text,
  align,
  fontStyle = "normal",
}: IProps) => {
  const styles = {
    color,
    fontWeight: weight,
  };

  return (
    <Text
      style={[
        styles,
        getFontSize(size),
        { textAlign: align ?? "center", fontStyle },
      ]}
    >
      {text}
    </Text>
  );
};

export default Header;
