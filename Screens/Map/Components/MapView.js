import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";

import _MapView from "react-native-maps";

const { width, height } = Dimensions.get("screen");

export default MapView = (props) => {
  const { currentLocation } = props;
  return (
    <View style={styles.container}>
      <_MapView
        style={styles.map}
        showsUserLocation
        showsCompass={false}
        // Default location: London
        initialRegion={{
          latitude: currentLocation.latitude ? currentLocation.latitude : 51.507351,
          longitude: currentLocation.longitude ? currentLocation.latitude : -0.127758,
        }}
      />
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
