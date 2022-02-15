import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Colors = {
  primary: "#6E01C0",
  mPurple: "#4D0484",
  dPurple: "#2C0847",
  bg: "#0B0B0B",
  white: "#ffffff",
  black: "#000000",
  red: "#FF2626",
  yellow: "#FFC947",
  lightBg: "#0f0f0f",
  grey: "#5d5d5d",
};

const Sizes = {
  height: height,
  width: width,
  padding: 10,
  margin: 15,
};

export { Colors, Sizes };
