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
          <View style={[styles.startArea, styles.green]}>
            <View style={[styles.subStartArea, styles.white]}>
              <View style={[styles.subStartArea_View, styles.green]} />
              <View style={[styles.subStartArea_View, styles.green]} />
              <View style={[styles.subStartArea_View, styles.green]} />
              <View style={[styles.subStartArea_View, styles.green]} />
            </View>
          </View>
          <View style={styles.verticalPath}>
            {/* 1st line */}
            <View style={styles.subVerticalPath}></View>
            <View style={styles.subVerticalPath}></View>
            <View style={styles.subVerticalPath}></View>
            {/* 2nd line */}
            <View style={styles.subVerticalPath}></View>
            <View style={[styles.subVerticalPath, styles.yellow]}></View>
            <View style={[styles.subVerticalPath, styles.yellow]}></View>
            {/* 3rd line */}
            <View style={styles.subVerticalPath}></View>
            <View style={[styles.subVerticalPath, styles.yellow]}></View>
            <View style={styles.subVerticalPath}></View>
            {/* 4th line */}
            <View style={styles.subVerticalPath}></View>
            <View style={[styles.subVerticalPath, styles.yellow]}></View>
            <View style={styles.subVerticalPath}></View>
            {/* 5th line */}
            <View style={styles.subVerticalPath}></View>
            <View style={[styles.subVerticalPath, styles.yellow]}></View>
            <View style={styles.subVerticalPath}></View>
            {/* 6th line */}
            <View style={styles.subVerticalPath}></View>
            <View style={[styles.subVerticalPath, styles.yellow]}></View>
            <View style={styles.subVerticalPath}></View>
          </View>
          <View style={[styles.startArea, styles.yellow]}>
            <View style={[styles.subStartArea, styles.white]}>
              <View style={[styles.subStartArea_View, styles.yellow]}></View>
              <View style={[styles.subStartArea_View, styles.yellow]}></View>
              <View style={[styles.subStartArea_View, styles.yellow]}></View>
              <View style={[styles.subStartArea_View, styles.yellow]}></View>
            </View>
          </View>
        </View>
        {/* Container2 */}
        <View style={styles.homeContainer}>
          <View style={styles.horizontalPath}>
            {/* 1st line */}
            <View style={styles.subHorizontalPath}></View>
            <View style={[styles.subHorizontalPath, styles.green]}></View>
            <View style={styles.subHorizontalPath}></View>
            <View style={styles.subHorizontalPath}></View>
            <View style={styles.subHorizontalPath}></View>
            <View style={styles.subHorizontalPath}></View>
            {/* 2nd line */}
            <View style={styles.subHorizontalPath}></View>
            <View style={[styles.subHorizontalPath, styles.green]}></View>
            <View style={[styles.subHorizontalPath, styles.green]}></View>
            <View style={[styles.subHorizontalPath, styles.green]}></View>
            <View style={[styles.subHorizontalPath, styles.green]}></View>
            <View style={[styles.subHorizontalPath, styles.green]}></View>
            {/* 3rd line */}
            <View style={styles.subHorizontalPath}></View>
            <View style={styles.subHorizontalPath}></View>
            <View style={styles.subHorizontalPath}></View>
            <View style={styles.subHorizontalPath}></View>
            <View style={styles.subHorizontalPath}></View>
            <View style={styles.subHorizontalPath}></View>
          </View>
          <View style={styles.homePath}>
            <View style={styles.triangleContainer}>
              {/* <View style={styles.triangleRight}></View> */}
            </View>
          </View>
          <View style={styles.horizontalPath}>
            {/* 1st line */}
            <View style={styles.subHorizontalPath}></View>
            <View style={styles.subHorizontalPath}></View>
            <View style={styles.subHorizontalPath}></View>
            <View style={styles.subHorizontalPath}></View>
            <View style={styles.subHorizontalPath}></View>
            <View style={styles.subHorizontalPath}></View>
            {/* 2nd line */}
            <View style={[styles.subHorizontalPath, styles.blue]}></View>
            <View style={[styles.subHorizontalPath, styles.blue]}></View>
            <View style={[styles.subHorizontalPath, styles.blue]}></View>
            <View style={[styles.subHorizontalPath, styles.blue]}></View>
            <View style={[styles.subHorizontalPath, styles.blue]}></View>
            <View style={styles.subHorizontalPath}></View>
            {/* 3rd line */}
            <View style={styles.subHorizontalPath}></View>
            <View style={styles.subHorizontalPath}></View>
            <View style={styles.subHorizontalPath}></View>
            <View style={styles.subHorizontalPath}></View>
            <View style={[styles.subHorizontalPath, styles.blue]}></View>
            <View style={styles.subHorizontalPath}></View>
          </View>
        </View>
        {/* Container3 */}
        <View style={styles.playContainer}>
          <View style={[styles.startArea, styles.red]}>
            <View style={[styles.subStartArea, styles.white]}>
              <View style={[styles.subStartArea_View, styles.red]}></View>
              <View style={[styles.subStartArea_View, styles.red]}></View>
              <View style={[styles.subStartArea_View, styles.red]}></View>
              <View style={[styles.subStartArea_View, styles.red]}></View>
            </View>
          </View>
          <View style={styles.verticalPath}>
            {/* 1st line */}
            <View style={styles.subVerticalPath}></View>
            <View style={[styles.subVerticalPath, styles.red]}></View>
            <View style={styles.subVerticalPath}></View>
            {/* 2nd line */}
            <View style={styles.subVerticalPath}></View>
            <View style={[styles.subVerticalPath, styles.red]}></View>
            <View style={styles.subVerticalPath}></View>
            {/* 3rd line */}
            <View style={styles.subVerticalPath}></View>
            <View style={[styles.subVerticalPath, styles.red]}></View>
            <View style={styles.subVerticalPath}></View>
            {/* 4th line */}
            <View style={styles.subVerticalPath}></View>
            <View style={[styles.subVerticalPath, styles.red]}></View>
            <View style={styles.subVerticalPath}></View>
            {/* 5th line */}
            <View style={styles.subVerticalPath}></View>
            <View style={[styles.subVerticalPath, styles.red]}></View>
            <View style={styles.subVerticalPath}></View>
            {/* 6th line */}
            <View style={styles.subVerticalPath}></View>
            <View style={styles.subVerticalPath}></View>
            <View style={styles.subVerticalPath}></View>
          </View>
          <View style={[styles.startArea, styles.blue]}>
            <View style={[styles.subStartArea, styles.white]}>
              <View style={[styles.subStartArea_View, styles.blue]}></View>
              <View style={[styles.subStartArea_View, styles.blue]}></View>
              <View style={[styles.subStartArea_View, styles.blue]}></View>
              <View style={[styles.subStartArea_View, styles.blue]}></View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
