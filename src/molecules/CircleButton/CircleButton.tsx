import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import SendIcon from "@images/svg/SendIcon";

export type CircleButtonProps = {
  onPress?: () => void;
  disabled?: boolean;
};

export const CircleButton: React.FC<CircleButtonProps> = ({ onPress, disabled = false }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.8}
      style={[styles.circleBtn, disabled ? styles.disable : styles.enable]}
      onPress={onPress}>
      <SendIcon />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  circleBtn: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  disable: {
    backgroundColor: "#b7F2F7",
  },
  enable: {
    backgroundColor: "#05A9C8",
  },
});
