import React from "react";
import { View, SafeAreaView, Text, Dimensions, StyleSheet, TextInput } from "react-native";
import { Icon } from "react-native-elements";

const { width, height } = Dimensions.get("screen");

const SearchBar = () => {
  return (
    <SafeAreaView style={styles.parentContainer}>
      <View style={styles.searchBarContainer}>
        <View style={styles.iconContainer}>
          <Icon type="ionicon" name="search-outline" color={"#000"} size={height * 0.03} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder="Try something like London" />
        </View>
        <View style={styles.iconContainer}>
          <Icon type="ionicon" name="filter-outline" color={"#000"} size={height * 0.03} />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default SearchBar;

const styles = StyleSheet.create({
  parentContainer: {
    position: "absolute",
    top: height * 0.1,
    width: "100%",
    height: height * 0.07,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBarContainer: {
    backgroundColor: "white",
    width: "90%",
    paddingVertical: height * 0,
    paddingHorizontal: height * 0.02,
    borderRadius: height * 0.01,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "black",
    shadowOpacity: 0.2,
  },
  iconContainer: {
    flex: 1,
  },
  inputContainer: {
    flex: 10,
    fontSize: height * 0.02,
  },
  textInput: {
    textAlign: "center",
  },
});
