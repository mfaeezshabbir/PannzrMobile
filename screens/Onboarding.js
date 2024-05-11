import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Animated,
  Image,
} from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

const SCREEN_WIDTH = Dimensions.get("window").width;

const OnboardingScreen = ({ navigation }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef(null);

  const handleScroll = (event) => {
    const { contentOffset } = event.nativeEvent;
    const page = Math.round(contentOffset.x / SCREEN_WIDTH);
    setCurrentPage(page);
  };

  const handleNext = () => {
    if (currentPage < 2) {
      setCurrentPage(currentPage + 1);
      scrollToPage(currentPage + 1);
    }
  };

  // const handlePrevious = () => {
  //   if (currentPage > 0) {
  //     setCurrentPage(currentPage - 1);
  //     scrollToPage(currentPage - 1);
  //   }
  // };

  const handleSignIn = () => {
    navigation.navigate("SignIn");
  };

  const scrollToPage = (index) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: index * SCREEN_WIDTH });
      setCurrentPage(index);
    }
  };

  const handleSkip = () => {
    // Navigate to the main app screen or desired destination
    navigation.navigate("Home");
  };

  const slides = [
    {
      id: 0,
      title: "Your Own Style",
      description:
        "Smart, gorgeous & fashionable collection makes you fell cool",
      img: require("../assets/onboarding/ob1.png"),
    },
    {
      id: 1,
      title: "Discover Trends",
      description: "We are here to provide you variety of the best fashion",
      img: require("../assets/onboarding/ob2.png"),
    },
    {
      id: 2,
      title: "Latest Designs",
      description: "Express yourself through the art of the fashionism",
      img: require("../assets/onboarding/ob3.png"),
    },
  ];

  // condition for last screen to give option to sign in or not
  const isLastScreen = currentPage === slides.length - 1;

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          {/* title and description related to shopping app */}
          {slides.map((slide) => (
            <View key={slide.id} style={[styles.onboardingStep, styles.step]}>
              <Image source={slide.img} style={styles.img} />
              {/* <Text style={styles.title}>{slide.title}</Text> */}
              <Text style={styles.title}>
                {slide.title.split(" ").map((word, index, arr) =>
                  index === arr.length - 1 ? (
                    <Text
                      style={{
                        color: "brown",
                      }}
                    >
                      {word}
                    </Text>
                  ) : (
                    `${word} `
                  )
                )}
              </Text>
              <Text style={styles.description}>{slide.description}</Text>
            </View>
          ))}
        </ScrollView>
        <View style={styles.dotContainer}>
          {slides.map((slide) => (
            <View
              key={slide.id}
              style={[
                styles.dot,
                {
                  backgroundColor:
                    currentPage === slide.id ? "brown" : "#cccccc",
                },
              ]}
            />
          ))}
        </View>
      </View>

      {/* Skip Button */}
      <TouchableOpacity style={styles.buttonSkip} onPress={handleSkip}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      {/* Navigation Buttons */}
      <TouchableOpacity style={styles.navigationButtons}>
        {isLastScreen ? (
          <TouchableOpacity
            style={[styles.button, { flexDirection: "row" }]}
            onPress={handleSkip}
          >
            <Text style={styles.exploreText}>SignIn {"  "}</Text>
            <FontAwesome
              name="sign-in"
              style={styles.exploreText}
              onPress={handleNext}
              accessibilityLabel="Next"
              size={20}
            />
          </TouchableOpacity>
        ) : (
          <>
            <TouchableOpacity
              style={[styles.button, { flexDirection: "row" }]}
              onPress={handleNext}
            >
              <Text style={styles.exploreText}>Next {"  "}</Text>

              <AntDesign
                style={styles.exploreText}
                onPress={handleNext}
                accessibilityLabel="Next"
                name="rightcircle"
                size={20}
              />
            </TouchableOpacity>
          </>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  onboardingStep: {
    width: SCREEN_WIDTH,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  img: {
    resizeMode: "contain",
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    width: "80%",
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    position: "absolute",
    bottom: 20,
    zIndex: 1,
    alignItems: "center",
    width: SCREEN_WIDTH,
  },
  dot: {
    width: 30,
    height: 5,
    borderRadius: 50,
    marginHorizontal: 2,
  },
  dotActive: {
    backgroundColor: "brown",
  },
  navigationButtons: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    backgroundColor: "brown",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  exploreText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#ffffff",
  },
  buttonSkip: {
    position: "absolute",
    top: 20,
    right: 30,
  },
  skipText: {
    color: "brown",
    fontSize: 18,
  },
});

export default OnboardingScreen;
