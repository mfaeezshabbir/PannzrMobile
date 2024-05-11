import React, { useState } from "react";
import { View, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import Banner from "../components/Banner";

const App = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (text) => {
    setSearchText(text);
    // Perform search logic here
  };

  return (
    <View>
      {/* <Text>Search Text: {searchText}</Text> */}
      <SearchBar placeholder="Search..." onChangeText={handleSearch} />

      {/* Banner */}
      <Banner />
    </View>
  );
};

export default App;
