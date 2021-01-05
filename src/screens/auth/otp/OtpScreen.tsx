import React, { useCallback, useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";

import Text from "@atom/Text/Text";
import View from "@atom/View/View";
import { CloseButton } from "@molecules/CloseButton";
import { CTAButton } from "@molecules/CTAButton";
import { OTPInputView } from "@molecules/OTPInputView";
import { Screen } from "@molecules/Screen";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { AppStackParamList } from "@src/AppNavigator";

type OTPScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<AppStackParamList, "otp">,
  StackNavigationProp<AppStackParamList>
>;

type OtpScreenProps = {
  navigation: OTPScreenNavigationProp;
  route: RouteProp<AppStackParamList, "otp">;
};

export const OtpScreen: React.FC<OtpScreenProps> = ({
  route: {
    params: { phoneNo },
  },
  navigation,
}) => {
  const [error, setError] = useState("");
  const [disable, setDisable] = useState(true);

  phoneNo = phoneNo.replace(/\d(?=\d{2})/g, "*");

  const verifyOtp = useCallback((otp) => {
    setError("");
    setDisable(false);
    if (otp !== "1234") {
      setError("Invalid OTP, Please try again.");
    }
  }, []);

  const closeAction = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const verifyAction = useCallback(() => {}, []);

  return (
    <Screen
      headerProps={{
        title: "Verify phone number",
        rightElement: <CloseButton onPress={closeAction} />,
      }}>
      <ScrollView keyboardShouldPersistTaps="always">
        <View style={styles.outerContainer}>
          <View style={styles.container}>
            <Text style={styles.otpBig}>Enter OTP Code</Text>
            <Text style={styles.otpMsg}>Please verify your number with 4 digit OTP code sent to {phoneNo}</Text>
            <OTPInputView
              error={error}
              onOtpSubmitted={(otp: string) => {
                verifyOtp(otp);
              }}
            />
            <View style={styles.row}>
              <Text style={styles.otpNotReceived}>Didn't receive code? </Text>
              <TouchableOpacity style={styles.touch}>
                <Text style={styles.resend}>Resend</Text>
              </TouchableOpacity>
            </View>
            <CTAButton onPress={verifyAction} disabled={disable}>
              <Text style={styles.verifyTxt}>Verify OTP</Text>
            </CTAButton>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    flexDirection: "column",
  },
  container: {
    padding: 20,
  },
  logo: {
    width: 180,
    height: 100,
    marginTop: 80,
    marginBottom: 50,
  },
  otpMsg: {
    marginTop: 8,
    color: "black",
  },
  otpNotReceived: {
    color: "black",
  },
  resend: {
    fontWeight: "bold",
    color: "#8a7b1d",
  },
  verifyTxt: {
    fontWeight: "bold",
    color: "#fff",
  },
  otpBig: {
    marginTop: 8,
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    marginBottom: 30,
  },
  touch: {
    alignItems: "center",
  },
});
