import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";

import MapView from "./Components/MapView";
import SearchBar from "./Components/SearchBar";
import MapControlButton from "./Components/MapControlButton";

const { width, height } = Dimensions.get("screen");

const MapScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <MapView />
      <SearchBar />
      <View style={styles.mapControlButtonContainer}>
        <MapControlButton iconName="locate-outline" />
        <MapControlButton iconName="grid-outline" />
      </View>
    </View>
  );
};
export default MapScreen;

const styles = StyleSheet.create({
  mapControlButtonContainer: {
    position: "absolute",
    bottom: 0,
    right: height * 0.01,
    height: height * 0.5,
    justifyContent: "flex-end",
  },
});
