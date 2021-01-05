import React, { useCallback, useMemo } from "react";
import { StyleSheet, TextInputProps, View } from "react-native";

import { OtpField } from "./atom";

export type LibProps = TextInputProps & {
  otpSize?: number;
  error?: string;
  onOtpSubmitted: (otp: string) => void;
};

export const OTPInputView: React.FC<LibProps> = ({ otpSize = 4, error, onOtpSubmitted, ...rest }) => {
  const array = Array<string>(otpSize).fill("");
  const inputText: Array<string> = useMemo(() => Array(otpSize).fill(""), [otpSize]);
  const inputRefs: Array<any> = useMemo(
    () =>
      Array(otpSize)
        .fill(0)
        .map((_) => React.createRef()),
    [otpSize],
  );

  const handleKeyPress = useCallback(
    (index, keyValue) => {
      if (keyValue === "Backspace" && inputRefs[index - 1]) {
        inputRefs[index - 1].current.focus();
      } else if (index !== 0 && inputText[index] && inputText[index] !== "") {
        if (inputRefs[index + 1]) {
          inputRefs[index + 1].current.focus();
        }
      }
    },
    [inputRefs, inputText],
  );

  const onChangeText = (index: number, value: string) => {
    if (value.trim() !== "") {
      if (inputRefs[index + 1]) {
        inputRefs[index + 1].current.focus();
      }
    }
    inputText[index] = value;
    canSubmitOtp();
  };
  const canSubmitOtp = useCallback(() => {
    let canSubmit = true;
    let otp = "";
    inputText.map((item) => {
      if (!item || item === "") {
        canSubmit = false;
      } else {
        otp = otp + item;
      }
    });
    if (canSubmit) {
      onOtpSubmitted(otp);
    }
  }, [inputText, onOtpSubmitted]);

  return (
    <View style={styles.container}>
      {array.map((_, index) => {
        return (
          <OtpField
            autoFocus={index === 0 ? true : false}
            onKeyPress={({ nativeEvent: { key: keyValue } }) => {
              handleKeyPress(index, keyValue);
            }}
            onChangeText={(value) => {
              onChangeText(index, value);
            }}
            key={index}
            ref={inputRefs[index]}
            keyboardType="numeric"
            error={error}
            {...rest}
            style={styles.inputBox}
            maxLength={1}
          />
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  inputView: {
    flexDirection: "row",
    padding: 16,
    width: 50,
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
    marginHorizontal: 8,
  },
  errorTxt: {
    fontSize: 12,
    color: "red",
    marginTop: 4,
  },
});
