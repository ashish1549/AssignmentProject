import React, { useCallback, useState } from "react";
import { StyleSheet } from "react-native";

import Image from "@atom/Image/Image";
import Text from "@atom/Text/Text";
import View from "@atom/View/View";
import PhoneIcon from "@images/svg/PhoneIcon";
import { CircleButton } from "@molecules/CircleButton";
import { Screen } from "@molecules/Screen";
import { TextInput } from "@molecules/TextInput";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AppStackParamList } from "@src/AppNavigator";
import { ScrollView } from "react-native-gesture-handler";

type LoginScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<AppStackParamList, "login">,
  StackNavigationProp<AppStackParamList>
>;

type LoginScreenProps = {
  route: RouteProp<AppStackParamList, "login">;
  navigation: LoginScreenNavigationProp;
};

export const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [error, setError] = useState("");
  const [mobile, setMobile] = useState("");
  const onMobileNumberChange = useCallback((val) => {
    setMobile(val);
    setError("");
  }, []);

  const getOtp = useCallback(() => {
    setError("");
    if (mobile.length !== 10) {
      setError("Please enter valid mobile number");
    } else {
      navigation.navigate("otp", {
        phoneNo: mobile,
      });
    }
  }, [mobile, navigation]);

  return (
    <Screen>
      <ScrollView keyboardShouldPersistTaps="always">
        <View style={styles.outerContainer}>
          <View style={styles.container}>
            <Image style={styles.logo} resizeMode="contain" source={require("@images/logo.png")} />

            <TextInput
              value={mobile}
              autoFocus
              numberOfLines={1}
              keyboardType="number-pad"
              placeholder="Enter mobile number"
              onChangeText={onMobileNumberChange}
              leftItem={<PhoneIcon fill={error ? "red" : "gray"} />}
              rightItem={<CircleButton onPress={getOtp} disabled={error !== ""} />}
              error={error}
            />
            <Text style={styles.otpMsg}>OTP will be sent on your mobile number</Text>
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
    alignItems: "center",
  },
  logo: {
    width: 180,
    height: 100,
    marginTop: 80,
    marginBottom: 50,
  },
  otpMsg: {
    alignSelf: "flex-start",
    padding: 16,
  },
});
