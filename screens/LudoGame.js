import React from "react";
import { styles } from "./MyStyles";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import appDimensions from "../constants/dimension";
const { cellWidth } = appDimensions;

export default function LudoGame() {
  return (
    <View style={styles.wrapper}>
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
            <View
              style={[styles.subVerticalPath, styles.yellow, styles.centered]}
            >
              <Icon name="circle" size={cellWidth} color="#fff" />
            </View>
            {/* 3rd line */}
            <View style={[styles.subVerticalPath, styles.centered]}>
              <Icon name="star" size={cellWidth} color="#f6c700" />
            </View>
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
            <View
              style={[styles.subHorizontalPath, styles.green, styles.centered]}
            >
              <Icon name="circle" size={cellWidth} color="#fff" />
            </View>
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
            <View style={[styles.subHorizontalPath, styles.centered]}>
              <Icon name="star" size={cellWidth} color="#84c21f" />
            </View>
            <View style={styles.subHorizontalPath}></View>
            <View style={styles.subHorizontalPath}></View>
            <View style={styles.subHorizontalPath}></View>
          </View>
          <View style={styles.homePath}>
            <View style={styles.triangleContainer}>
              <View style={styles.triangleRight}></View>
              <View style={styles.triangleUp}></View>
              <View style={styles.triangleLeft}></View>
              <View style={styles.triangleDown}></View>
              <View style={styles.circle}>
                <View style={styles.text}>
                  <Text style={styles.textStyle}>Home</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.horizontalPath}>
            {/* 1st line */}
            <View style={styles.subHorizontalPath}></View>
            <View style={styles.subHorizontalPath}></View>
            <View style={styles.subHorizontalPath}></View>
            <View style={[styles.subHorizontalPath, styles.centered]}>
              <Icon name="star" size={cellWidth} color="#0092dc" />
            </View>
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
            <View
              style={[styles.subHorizontalPath, styles.blue, styles.centered]}
            >
              <Icon name="circle" size={cellWidth} color="#fff" />
            </View>
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
            <View style={[styles.subVerticalPath, styles.centered]}>
              <Icon name="star" size={cellWidth} color="#dc2418" />
            </View>
            {/* 5th line */}
            <View style={[styles.subVerticalPath, styles.red, styles.centered]}>
              <Icon name="circle" size={cellWidth} color="#fff" />
            </View>
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
