import React from "react";
import Row from "../Row";
import { FontAwesome } from "@expo/vector-icons";
import { default as theme } from "@/theme.json";
import { CONTAINER_MARGIN } from "@/constants/Property";
import { Text } from "@ui-kitten/components";
import { StyleSheet, TouchableOpacity } from "react-native";

const HeaderLogistics = () => {
  return (
    <Row style={[styles.container]}>
      <Row style={[styles.row]}>
        <FontAwesome
          name="map-marker"
          size={20}
          color={theme["color-primary-500"]}
        />
        <Text style={[styles.defaultMarginLeft]}>12 Available</Text>
        <TouchableOpacity onPress={() => console.log("save")}>
          <Text category="c1" style={[styles.text]}>
            Save
          </Text>
        </TouchableOpacity>
      </Row>
      <Row style={[styles.container]}>
        <TouchableOpacity onPress={() => console.log("sort")}>
          <Row style={[styles.defaultMarginRight, styles.row]}>
            <FontAwesome
              name="sort"
              size={18}
              color={theme["color-primary-500"]}
            />
            <Text category="c1" style={[styles.text]}>
              Sort
            </Text>
          </Row>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("Map")}>
          <Row style={[styles.row]}>
            <FontAwesome
              name="map"
              size={18}
              color={theme["color-primary-500"]}
            />
            <Text category="c1" style={[styles.text]}>
              Sort
            </Text>
          </Row>
        </TouchableOpacity>
      </Row>
    </Row>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: CONTAINER_MARGIN,
  },
  row: {
    alignItems: "center",
  },
  defaultMarginLeft: {
    marginLeft: 6,
  },
  defaultMarginRight: {
    marginRight: 6,
  },
  text: {
    color: theme["color-primary-300"],
    fontWeight: "bold",
    marginLeft: 6,
  },
});

export default HeaderLogistics;
