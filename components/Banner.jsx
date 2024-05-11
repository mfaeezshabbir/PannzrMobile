import React, { useRef } from "react";
import { View, Image, ScrollView, Dimensions, StyleSheet } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const Banner = () => {
  const scrollViewRef = useRef(null);

  return (
    <ScrollView
      ref={scrollViewRef}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
    >
      <View style={styles.banner}>
        <Image
          source={require("../assets/Banners/banner-4-2.webp")}
          style={styles.image}
        />
        <Image
          source={require("../assets/Banners/banner-5.webp")}
          style={styles.image}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  banner: {
    flexDirection: "row",
    height: 230,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    width: SCREEN_WIDTH,
    resizeMode: "cover",
    height: "100%",
  },
});
export default Banner;
