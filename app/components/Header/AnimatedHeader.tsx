import { HEADER_HEIGHT } from "@/constants/Header";
import { CONTAINER_MARGIN } from "@/constants/Property";
import { FontAwesome } from "@expo/vector-icons";
import React, { Dispatch, SetStateAction } from "react";
import {
  Animated,
  FlatList,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { default as theme } from "@/theme.json";
import { Button, Divider, Text } from "@ui-kitten/components";
import Row from "../Row";
import HeaderInput from "./HeaderInput";
import HeaderFilterButtons from "./HeaderFilterButtons";
import HeaderLogistics from "./HeaderLogistics";

const AnimatedHeader = ({
  scrollY,
  setMapOpened,
  mapOpened,
}: {
  scrollY: Animated.Value;
  setMapOpened: Dispatch<SetStateAction<boolean>>;
  mapOpened: boolean;
}) => {
  const diffClamp = Animated.diffClamp(scrollY, 0, HEADER_HEIGHT);
  const translateY = diffClamp.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT],
  });

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{ translateY: translateY }],
        },
      ]}
    >
      <View style={[styles.defaultMarginHorizontal]}>
        <HeaderInput />
        <HeaderFilterButtons />
      </View>
      <Divider style={[styles.divider]} />
      <HeaderLogistics setMapOpened={setMapOpened} mapOpened={mapOpened} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: HEADER_HEIGHT,
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    zIndex: 500,
    gap: 10,
  },
  divider: {
    backgroundColor: theme["color-primary-100"],
  },
  defaultMarginHorizontal: {
    marginHorizontal: CONTAINER_MARGIN,
  },
});

export default AnimatedHeader;
