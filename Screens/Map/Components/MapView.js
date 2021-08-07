import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";

import _MapView from "react-native-maps";

const { width, height } = Dimensions.get("screen");

export default MapView = () => {
  return (
    <View style={styles.container}>
      <_MapView style={styles.map} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
