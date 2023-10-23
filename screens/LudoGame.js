import React from "react";
import { View, Text } from "react-native";

import { styles } from "./MyStyles";

export default function LudoGame() {
  return (
    <View style={styles.wrapper}>
      <Text>Ludo</Text>
      <View style={styles.container}>
        {/* Container1 */}
        <View style={styles.playContainer}>
          <View style={[styles.startArea, styles.green]}></View>
          <View style={styles.verticalPath}></View>
          <View style={[styles.startArea, styles.yellow]}></View>
        </View>
        {/* Container2 */}
        <View style={styles.homeContainer}>
          <View style={styles.horizontalPath}></View>
          <View style={styles.homePath}></View>
          <View style={styles.horizontalPath}></View>
        </View>
        {/* Container3 */}
        <View style={styles.playContainer}>
          <View style={[styles.startArea, styles.red]}></View>
          <View style={styles.verticalPath}></View>
          <View style={[styles.startArea, styles.blue]}></View>
        </View>
      </View>
    </View>
  );
}
