import React from "react";
import { StyleSheet } from "react-native";

import Image from "@atom/Image/Image";
import View from "@atom/View/View";

export const SplashScreen: React.FC = () => {
  return (
    <View style={styles.outerContainer}>
      <Image style={styles.logo} resizeMode="contain" source={require("@images/logo.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  logo: {
    width: 180,
    height: 100,
    marginTop: 80,
    marginBottom: 50,
  },
});
