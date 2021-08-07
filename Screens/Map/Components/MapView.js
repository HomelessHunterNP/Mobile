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
        tintColor="#00d5a4"
        //Default location: London
        region={{
          latitude: currentLocation
            ? currentLocation.coords.latitude
            : 51.507351,
          longitude: currentLocation
            ? currentLocation.coords.longitude
            : -0.127758,
          latitudeDelta: currentLocation ? 0.001 : 1,
          longitudeDelta: currentLocation ? 0.001 : 1,
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
