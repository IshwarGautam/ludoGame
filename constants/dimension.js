import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const containerWidth = width - 0.04 * width;
const bwidth = 0.1 * containerWidth - 3;

var cellWidth = (0.2 * containerWidth) / 3;
cellWidth = cellWidth - 0.1 * cellWidth;

const appDimensions = {
  containerWidth,
  bwidth,
  cellWidth,
};

export default appDimensions;
