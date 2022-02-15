import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./Navigation/AppNavigator";
import Details from "./Screens/Details";

export default function App() {
  return (
    <>
      <View style={styles.statusbar}></View>
      <StatusBar style="light" />
      <AppNavigator />
    </>
  );
}

const styles = StyleSheet.create({
  statusbar: {
    height: 30,
    width: "100%",
    backgroundColor: "#2d2d2d",
  },
});
