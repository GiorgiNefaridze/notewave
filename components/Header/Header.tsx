import { Text } from "react-native";

import { IProps } from "./Types";
import { getFontSize } from "../../utils/getFontSize";

const Header = ({ color, size, weight, text }: IProps) => {
  const styles = {
    color,
    fontWeight: weight,
  };

  return <Text style={[styles, getFontSize(size)]}>{text}</Text>;
};

export default Header;
