import React from "react";
import { Platform, StyleSheet, TouchableOpacity } from "react-native";
import { default as theme } from "@/theme.json";
import Row from "../Row";
import { FontAwesome } from "@expo/vector-icons";
import { Text } from "@ui-kitten/components";

const HeaderInput = () => {
  return (
    <TouchableOpacity
      style={[styles.container]}
      onPress={() => console.log("navigate to input screen")}
    >
      <Row style={[styles.row]}>
        <FontAwesome
          name="search"
          size={20}
          color={theme["color-primary-500"]}
        />
        <Text style={[styles.text]}>Find a Location</Text>
      </Row>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "ios" ? 60 : 30,
    borderWidth: 1,
    borderColor: theme["color-primary-200"],
    padding: 10,
    borderRadius: 30,
  },
  row: {
    alignItems: "center",
  },
  text: {
    marginLeft: 6,
  },
});

export default HeaderInput;
