import { useState } from "react";
import {
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { ProgressBar } from "react-native-paper";

import { calculateProgress } from "../../utils/calculateProgress";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";

import styles from "./Introduction.style";

const screenWidth = Dimensions.get("window").width;
const page = 3;

const Introduction = () => {
  const [pageIndex, setPageIndex] = useState(1);

  const handlePress = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          padding: 30,
          paddingBottom: 0,
          justifyContent: "space-between",
        }}
      >
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              ///
            }}
          >
            <Header color="#007AFF" size={3} text={"Skip"} weight="400" />
          </TouchableOpacity>
        </View>
        <Image
          source={require("../../assets/manage-notes.png")}
          style={{ width: 280, height: 280 }}
        />
      </View>
      <View style={styles.progressBlock}>
        <ProgressBar
          progress={calculateProgress(pageIndex, page)}
          color={"#3A85F7"}
          style={{ height: 5, width: screenWidth - 60, borderRadius: 10 }}
        />
        <Header
          color={"#1C2121"}
          size={1}
          text={"Manage your notes easily"}
          weight="700"
        />
        <Header
          color={"#1C2121"}
          size={3}
          text={"A completely easy way to manage and customize your notes."}
          weight="400"
        />
        <Button
          bgcolor="#007AFF"
          height={50}
          radius={15}
          text="Next"
          width={300}
          handlePress={() => {
            ////
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Introduction;
