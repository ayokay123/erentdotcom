import EditScreenInfo from "@/components/EditScreenInfo";
import ScreenWrapper from "@/components/ScreenWrapper";
import React from "react";
import { Text } from "react-native";

const AccountScreen = () => {
  return (
    <ScreenWrapper>
      <Text>Account</Text>
      <EditScreenInfo path="app/(tabs)/AccountScreen.tsx" />
    </ScreenWrapper>
  );
};

export default AccountScreen;
