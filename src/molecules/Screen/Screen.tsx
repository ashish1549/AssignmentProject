import React from "react";
import { StyleSheet, ViewProps } from "react-native";

import View from "@atom/View/View";
import { Header } from "@molecules/Header";

import { HeaderProps } from "../Header";

export type ScreenProps = ViewProps & {
  headerProps?: HeaderProps;
};

export const Screen: React.FC<ScreenProps> = ({ headerProps, children, ...rest }) => {
  return (
    <View style={styles.screen} {...rest}>
      {headerProps ? <Header {...headerProps} /> : null}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "nowrap",
    alignItems: "stretch",
  },
});
