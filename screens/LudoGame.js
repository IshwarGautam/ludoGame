import React from "react";
import { View } from "react-native";

import { styles } from "./MyStyles";

export default function LudoGame() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.playContainer}></View>
        <View style={styles.homeContainer}></View>
        <View style={styles.playContainer}></View>
      </View>
    </View>
  );
}
