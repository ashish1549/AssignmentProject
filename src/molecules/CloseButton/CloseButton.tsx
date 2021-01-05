import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import CloseIcon from "@images/svg/CloseIcon";

export type CloseButtonProps = {
  onPress?: () => void;
  disabled?: boolean;
};

export const CloseButton: React.FC<CloseButtonProps> = ({ onPress, disabled = false }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.8}
      style={[styles.touch, disabled ? styles.disable : styles.enable]}
      onPress={onPress}>
      <CloseIcon />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touch: {
    width: 30,
    height: 30,
    paddingTop: 8,
  },
  disable: {
    backgroundColor: "#b7F2F7",
  },
  enable: {
    backgroundColor: "#05A9C8",
  },
});
