import { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { ProgressBar } from "react-native-paper";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import { calculateProgress } from "../../utils/calculateProgress";
import {
  dynamicDescriptionText,
  dynamicHeaderText,
} from "../../utils/dynamicText";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";

import styles from "./Introduction.style";

const screenWidth = Dimensions.get("window").width;
const page = 3;

const Introduction = () => {
  const [pageIndex, setPageIndex] = useState<number>(1);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    setProgress(calculateProgress(pageIndex, page));
  }, [pageIndex, page]);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          padding: 30,
          paddingHorizontal: 20,
          paddingBottom: 0,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={[
            styles.header,
            {
              width: screenWidth,
              justifyContent: pageIndex === 1 ? "flex-end" : "space-between",
            },
          ]}
        >
          {(pageIndex === 2 || pageIndex === 3) && (
            <TouchableOpacity onPress={() => setPageIndex((prev) => prev - 1)}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <FontAwesomeIcon icon={faAngleLeft} color="#007AFF" />
                <Header color="#007AFF" size={3} text={"Back"} weight="400" />
              </View>
            </TouchableOpacity>
          )}
          {(pageIndex === 1 || pageIndex === 2) && (
            <TouchableOpacity onPress={() => setPageIndex((prev) => prev + 1)}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Header color="#007AFF" size={3} text={"Next"} weight="400" />
              </View>
            </TouchableOpacity>
          )}
        </View>
        {pageIndex === 1 && (
          <Image
            source={require("../../assets/manage-notes.png")}
            style={{ width: 280, height: 280 }}
          />
        )}
        {pageIndex === 2 && (
          <Image
            source={require("../../assets/organize-thougts.png")}
            style={{ width: 280, height: 280, alignItems: "center" }}
          />
        )}
        {pageIndex === 3 && (
          <Image
            source={require("../../assets/create-cards.png")}
            style={{ width: 280, height: 280 }}
          />
        )}
      </View>
      <View style={styles.progressBlock}>
        <ProgressBar
          progress={progress}
          color={"#3A85F7"}
          style={{ height: 5, width: screenWidth - 65, borderRadius: 10 }}
        />
        <Header
          color={"#1C2121"}
          size={1}
          text={dynamicHeaderText(pageIndex)}
          weight="700"
        />
        <Header
          color={"#1C2121"}
          size={3}
          text={dynamicDescriptionText(pageIndex)}
          weight="400"
        />
        <Button
          bgcolor="#007AFF"
          height={50}
          radius={15}
          text={pageIndex === 3 ? "Get Started" : "Next"}
          width={300}
          handlePress={() => {
            if (pageIndex < 3) {
              setPageIndex(pageIndex + 1);
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Introduction;
