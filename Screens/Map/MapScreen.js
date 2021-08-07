import * as Location from "expo-location";
import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";

import MapView from "./Components/MapView";
import SearchBar from "./Components/SearchBar";
import MapControlButton from "./Components/MapControlButton";

const { width, height } = Dimensions.get("screen");

const MapScreen = () => {
  const [currentLocation, setCurrentLocation] = React.useState(null);
  const [locationPermission, setLocationPermission] = React.useState(null);
  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        setLocationPermission(false);
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation(location);
      setLocationPermission(true);
    })();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <MapView currentLocation={currentLocation} />
      <SearchBar />
      <View style={styles.mapControlButtonContainer}>
        <MapControlButton
          iconName="locate-outline"
          locationGranted={locationPermission}
          onPress={async () => {
            try {
              var location = await Location.getCurrentPositionAsync({});
              setCurrentLocation(location);
            } catch (e) {
              alert(
                "You need to allow HomelessHunter to access your location. You can do this in your device's settings! \n \n Settings > HomelessHunter > Location"
              );
            }
          }}
        />
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
