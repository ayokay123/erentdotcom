import { HEADER_HEIGHT } from "@/constants/Header";
import React from "react";
import { Animated, StyleSheet } from "react-native";

const AnimatedHeader = ({ scrollY }: { scrollY: Animated.Value }) => {
  const diffClamp = Animated.diffClamp(scrollY, 0, HEADER_HEIGHT);
  const translateY = diffClamp.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT],
  });

  return (
    <Animated.View
      style={[
        styles.header,
        {
          transform: [{ translateY: translateY }],
        },
      ]}
    ></Animated.View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    height: HEADER_HEIGHT,
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    zIndex: 1000,
  },
});

export default AnimatedHeader;
