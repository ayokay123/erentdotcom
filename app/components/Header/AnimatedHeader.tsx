import { HEADER_HEIGHT } from "@/constants/Header";
import { CONTAINER_MARGIN } from "@/constants/Property";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
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

const AnimatedHeader = ({ scrollY }: { scrollY: Animated.Value }) => {
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
      <HeaderLogistics />
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
    zIndex: 1000,
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
