import React, { Dispatch, SetStateAction } from "react";
import Row from "../Row";
import { FontAwesome } from "@expo/vector-icons";
import { default as theme } from "@/theme.json";
import { CONTAINER_MARGIN } from "@/constants/Property";
import { Text } from "@ui-kitten/components";
import { StyleSheet, TouchableOpacity } from "react-native";

const LogisticButton = ({
  onPress,
  name,
  size,
  color,
  title,
}: {
  onPress: () => void;
  name: string;
  size: number;
  color: string;
  title: string;
}) => (
  <TouchableOpacity onPress={onPress}>
    <Row style={[styles.defaultMarginRight, styles.row]}>
      <FontAwesome name={name as any} size={size} color={color} />
      <Text category="c1" style={[styles.text]}>
        {title}
      </Text>
    </Row>
  </TouchableOpacity>
);

const HeaderLogistics = ({
  setMapOpened,
  mapOpened,
}: {
  setMapOpened: Dispatch<SetStateAction<boolean>>;
  mapOpened: boolean;
}) => {
  const handleMapPress = () => {
    setMapOpened(!mapOpened);
  };

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
        <LogisticButton
          onPress={() => console.log("sort")}
          name="sort"
          size={18}
          color={theme["color-primary-500"]}
          title="Sort"
        />

        {mapOpened ? (
          <LogisticButton
            name="list"
            size={18}
            color={theme["color-primary-500"]}
            title="List"
            onPress={handleMapPress}
          />
        ) : (
          <LogisticButton
            name="map"
            size={18}
            color={theme["color-primary-500"]}
            title="Map"
            onPress={handleMapPress}
          />
        )}
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
