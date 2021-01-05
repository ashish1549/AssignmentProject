import React, { forwardRef, useState } from "react";
import { StyleSheet, TextInput as BaseTextInput, TextInputProps } from "react-native";

export type LibProps = TextInputProps & {
  placeholder?: string;
  error?: string;
  key: number;
};

export const OtpField = forwardRef<BaseTextInput, LibProps>(({ error = "", ...rest }, ref) => {
  const [focusStyle, setFocusStyle] = useState(error !== "" ? styles.errorBg : styles.regularBg);

  const onFocus = () => {
    setFocusStyle(styles.focusBg);
  };

  const onBlur = () => {
    setFocusStyle(styles.regularBg);
  };

  return (
    <BaseTextInput
      onFocus={onFocus}
      onBlur={onBlur}
      ref={ref}
      {...rest}
      style={[styles.inputBox, error !== "" ? styles.errorBg : focusStyle]}
    />
  );
});
const styles = StyleSheet.create({
  errorBg: { borderColor: "red" },
  regularBg: { borderColor: "#a6a6a6" },
  focusBg: { borderColor: "#05A9C8" },
  inputBox: {
    fontSize: 20,
    paddingLeft: 8,
    paddingRight: 8,
    padding: 16,
    marginVertical: 8,
    width: 50,
    borderWidth: 1,
    alignItems: "center",
    borderColor: "#05A9C8",
    textAlign: "center",
    marginRight: 12,
  },
});
