import styles from "../components/Header/Header.style";

export const getFontSize = (size: number) => {
  switch (size) {
    case 1:
      return styles.heading1;
    case 2:
      return styles.heading2;
    case 3:
      return styles.heading3;
  }
};
