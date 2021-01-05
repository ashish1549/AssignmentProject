import React from "react";
import { Platform, StyleSheet, ViewProps } from "react-native";

import Text from "@atom/Text/Text";
import View from "@atom/View/View";

export type HeaderProps = ViewProps & {
  title?: string;
  hide?: boolean;
  transparent?: boolean;
  leftElement?: React.ReactElement;
  rightElement?: React.ReactElement;
};

//TODO: should be dynamic depended on device
const STATUS_BAR_HEIGHT = 20;

export const Header: React.FC<HeaderProps> = ({ title, hide, leftElement, rightElement, ...rest }) => {
  if (hide) {
    return null;
  }

  return (
    <View {...rest}>
      <View style={[styles.headerView]}>
        {leftElement && leftElement}
        <Text style={styles.title}>{title}</Text>
        {rightElement && rightElement}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headerView: {
    flexDirection: "row",
    height:
      Platform.select({
        android: 60,
        default: 48,
      }) + STATUS_BAR_HEIGHT,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#05A9C8",
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 12,
    paddingTop: 12 + STATUS_BAR_HEIGHT,
  },
  title: {
    fontSize: 18,
    flex: 1,
    color: "white",
    alignItems: "center",
  },
});
