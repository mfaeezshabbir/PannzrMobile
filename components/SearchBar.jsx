import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const SearchBar = ({ placeholder, onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
  },
  input: {
    borderRadius: 50,
    fontSize: 16,
    padding: 10,
    backgroundColor: "#ffffff",
    color: "#000000",
  },
});

export default SearchBar;
