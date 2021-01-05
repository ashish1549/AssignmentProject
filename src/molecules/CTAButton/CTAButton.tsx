import React from "react";
import { StyleSheet, TouchableOpacity, TouchableOpacityProps, View } from "react-native";

export type CTAButtonProps = TouchableOpacityProps & {
  onPress?: () => void;
  disabled?: boolean;
};

export const CTAButton: React.FC<CTAButtonProps> = ({ onPress, children, disabled = false, ...rest }) => {
  return (
    <TouchableOpacity disabled={disabled} activeOpacity={disabled ? 0 : 0.8} {...rest} onPress={onPress}>
      <View style={[styles.btn, disabled ? styles.disable : styles.enable]}>{children}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    alignSelf: "flex-start",
    minWidth: 80,
    padding: 16,
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  disable: {
    backgroundColor: "#FFA500",
    opacity: 0.5,
  },
  enable: {
    backgroundColor: "#FFA500",
    opacity: 1,
  },
});
