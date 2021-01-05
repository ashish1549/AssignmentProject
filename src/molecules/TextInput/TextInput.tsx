import React from "react";
import { StyleSheet, TextInput as BaseTextInput, TextInputProps, View } from "react-native";

import Text from "@atom/Text/Text";

export type LibProps = TextInputProps & {
  leftItem?: any;
  rightItem?: any;
  placeholder?: string;
  error?: string;
};

export const TextInput: React.FC<LibProps> = ({ leftItem, rightItem, error, ...rest }) => {
  return (
    <View>
      <View style={[styles.inputView, error !== "" ? styles.errorBg : styles.regularBg]}>
        {leftItem}
        <BaseTextInput {...rest} style={styles.inputBox} />
        {rightItem}
      </View>
      {error !== "" && <Text style={styles.errorTxt}>{error}</Text>}
    </View>
  );
};
const styles = StyleSheet.create({
  inputView: {
    flexDirection: "row",
    padding: 16,
    width: "80%",
    borderWidth: 1,
    alignItems: "center",
    borderColor: "#05A9C8",
    borderRadius: 8,
  },
  errorBg: { borderColor: "red" },
  regularBg: { borderColor: "#05A9C8" },

  inputBox: {
    fontSize: 20,
    paddingLeft: 8,
    paddingRight: 8,
    width: "100%",
  },
  errorTxt: {
    fontSize: 12,
    color: "red",
    marginTop: 4,
  },
});
