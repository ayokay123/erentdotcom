import React from "react";
import { default as theme } from "@/theme.json";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Button, Text } from "@ui-kitten/components";
import { FontAwesome } from "@expo/vector-icons";
import ImageCarousel from "./ImageCarousel";
import { CONTAINER_MARGIN, CONTAINER_PADDING } from "@/constants/Property";
import Row from "./Row";

interface PropertyCardProps {
  images: string[];
  rentLow: number;
  rentHigh: number;
  bedroomLow: number;
  bedroomHigh: number;
  name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  tags: string[];
}

const PropertyCard = ({
  property,
  style,
}: {
  property: PropertyCardProps;
  style?: ViewStyle;
}) => {
  return (
    <View style={[styles.container, style]}>
      <ImageCarousel images={property.images} />
      <View style={styles.content}>
        <Row style={[styles.header]}>
          <Text category="s1">
            ${property.rentLow.toLocaleString()} - $
            {property.rentHigh.toLocaleString()}
          </Text>
          <FontAwesome
            name="heart-o"
            color={theme["color-primary-500"]}
            size={24}
          />
        </Row>
        <Text category="c1">
          {property.bedroomLow} -{property.bedroomHigh} Beds
        </Text>
        <Text category="c1">{property.name}</Text>
        <Text category="c1">{property.street}</Text>
        <Text category="c1">
          {property.city},{property.state} {property.zip}
        </Text>
        <Text category="c1">{property.tags.join(", ")}</Text>
        <Row style={[styles.row]}>
          <Button
            onPress={() => console.log("email the property manager")}
            appearance="ghost"
            size="small"
            style={[styles.button, { borderColor: theme["color-primary-500"] }]}
          >
            Email
          </Button>
          <Button
            size="small"
            style={styles.button}
            onPress={() => console.log("call the property manager")}
            appearance="filled"
          >
            call
          </Button>
        </Row>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: CONTAINER_MARGIN,
    borderColor: theme["color-primary-500"],
    borderWidth: 1,
    borderRadius: 5,
  },
  content: {
    gap: 5,
    padding: CONTAINER_PADDING,
  },
  header: {
    justifyContent: "space-between",
    marginTop: 5,
  },
  button: {
    width: "48%",
  },
  row: {
    justifyContent: "space-between",
  },
});

export default PropertyCard;
