import React from "react";

import { View, Text, StyleSheet, Dimensions } from "react-native";

import { Icon } from "react-native-elements";

const { width, height } = Dimensions.get("screen");
const MapControlButton = (props) => {
  const { iconName, onPress } = props;
  return (
    <View style={styles.mapControlButtonContainer}>
      <Icon type="ionicon" name={iconName} color={"#000"} size={height * 0.03} />
    </View>
  );
};
export default MapControlButton;

const styles = StyleSheet.create({
  mapControlButtonContainer: {
    width: height * 0.06,
    height: height * 0.06,
    backgroundColor: "white",
    marginVertical: height * 0.02,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: height * 0.01,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "black",
    shadowOpacity: 0.2,
  },
});
