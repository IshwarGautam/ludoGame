import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const minScreenDimension = Math.min(width, height);

const containerWidth = minScreenDimension - 0.04 * minScreenDimension;
const bwidth = 0.1 * containerWidth - 3;

const fullCellWidth = (0.2 * containerWidth) / 3;
const cellWidth = fullCellWidth - 0.1 * fullCellWidth;

const appDimensions = {
  containerWidth,
  bwidth,
  cellWidth,
  minScreenDimension,
};

export default appDimensions;
