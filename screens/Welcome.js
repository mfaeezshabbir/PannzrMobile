import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  const [accepted, setAccepted] = useState(false);

  // Function to navigate to the next screen (onboarding or main app screen)
  const navigateToNextScreen = () => {
    // Navigate to the next screen (replace 'Onboarding' with the actual screen name)
    navigation.navigate("Onboarding");
  };

  const openTermsLink = () => {
    Linking.openURL("https://mfaeezshabbir.vercel.app");
  };

  const acceptTerms = async () => {
    try {
      await AsyncStorage.setItem("appOpenedBefore", "true");
      await AsyncStorage.setItem("termsAccepted", "true");
      setAccepted(true);
      navigation.replace("Onboarding");
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/welcome/welcome1.png")}
        style={styles.image}
      />
      <Text style={styles.heading}>
        Pure
        <Text style={{ fontWeight: "bold", color: "brown" }}>
          {" "}
          Leather Jackets{" "}
        </Text>
        That Makes Your Looks Best
      </Text>
      <Text style={styles.subtext}>
        Before proceeding, please review and agree to our{" "}
        <TouchableOpacity onPress={() => openTermsLink()}>
          <Text style={styles.linkText}>Terms and Conditions</Text>
        </TouchableOpacity>
        .
      </Text>

      <TouchableOpacity
        onPress={() => acceptTerms()}
        style={styles.acceptButton}
      >
        <Text style={styles.buttonText}>Accept</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 20,
  },
  image: {
    resizeMode: "contain",
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  exploreButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: "#0080ff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  subtext: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  linkText: {
    color: "#007bff",
    textDecorationLine: "underline",
  },

  acceptButton: {
    backgroundColor: "brown",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default WelcomeScreen;
