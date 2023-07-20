import { View, Text, SafeAreaView } from "react-native";

import Header from "../../components/Header/Header";

import styles from "./Introduction.style";

const Introduction = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        color="black"
        text="Manage your notes easily"
        size={1}
        weight={"700"}
      />
    </SafeAreaView>
  );
};

export default Introduction;
