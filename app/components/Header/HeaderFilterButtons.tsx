import { FontAwesome } from "@expo/vector-icons";
import { Button } from "@ui-kitten/components";
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { default as theme } from "@/theme.json";

const HeaderFilterButtons = () => {
  const filterButtons = [
    {
      iconName: "filter",
      onPress: () => console.log("filter"),
    },
    {
      label: "Price",
      onPress: () => console.log("price"),
    },
    {
      label: "Move-In Date",
      onPress: () => console.log("move-in date"),
    },
    {
      label: "Pets",
      onPress: () => console.log("Pets"),
    },
  ];

  return (
    <FlatList
      style={[styles.container]}
      data={filterButtons}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => {
        if (item.iconName) {
          return (
            <Button
              appearance="ghost"
              style={[styles.button, { width: 48, height: 10 }]}
              onPress={item.onPress}
              accessoryLeft={
                <FontAwesome
                  name={item.iconName as any}
                  size={20}
                  color={theme["color-primary-500"]}
                />
              }
            ></Button>
          );
        } else {
          return (
            <Button
              appearance="ghost"
              style={[styles.button, { width: "auto" }]}
              onPress={item.onPress}
            >
              {item.label}
            </Button>
          );
        }
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  button: {
    borderRadius: 30,
    borderColor: theme["color-primary-200"],
    marginRight: 10,
  },
});

export default HeaderFilterButtons;
