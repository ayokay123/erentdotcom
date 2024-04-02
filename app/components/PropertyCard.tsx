import React, { useRef, useState } from "react";
import { default as theme } from "@/theme.json";
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import { Button, Text } from "@ui-kitten/components";
import { FontAwesome } from "@expo/vector-icons";

const CONTAINER_PADDING = 10;
const CONTAINER_MARGIN = 10;
const WIDTH = Dimensions.get("screen").width - 2 * CONTAINER_MARGIN;

const PropertyCard = () => {
  const property = {
    images: [
      "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXg7SdlFvW5MxkKhBrr4gXiS2aVnD_E2LA6vlP_pHiGpAByzZZmXsG0rM_St_yzNPpnkQ&usqp=CAU",
    ],
    rentLow: 3750,
    rentHigh: 31054,
    bedroomLow: 1,
    bedroomHigh: 5,
    name: "The Hamilton",
    street: "768 Massachusetts Ave",
    city: "Cambridge",
    state: "MA",
    zip: "02139",
    tags: ["Pet Friendly", "Parking", "Pool", "Gym"],
  };
  const viewConfig = { viewAreaCoveragePercentThreshold: 95 };

  const flatListRef = useRef<FlatList | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const onViewRef = useRef(({ changed }: { changed: any }) => {
    if (changed[0].isViewable) {
      setActiveIndex(changed[0].index);
    }
  });

  const handlePressLeft = () => {
    if (activeIndex === 0) {
      return flatListRef.current?.scrollToIndex({
        index: property.images.length - 1,
        animated: true,
      });
    }

    flatListRef.current?.scrollToIndex({
      index: activeIndex - 1,
      animated: true,
    });
  };

  const handlePressRight = () => {
    if (activeIndex === property.images.length - 1) {
      return flatListRef.current?.scrollToIndex({
        index: 0,
        animated: true,
      });
    }

    flatListRef.current?.scrollToIndex({
      index: activeIndex + 1,
      animated: true,
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={(ref) => (flatListRef.current = ref)}
        data={property.images}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        pagingEnabled
        keyExtractor={(item) => item}
        viewabilityConfig={viewConfig}
        onViewableItemsChanged={onViewRef.current}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.image} />
        )}
      />
      <Pressable
        style={{ position: "absolute", top: 95, left: 5, opacity: 0.5 }}
        onPress={handlePressLeft}
      >
        <FontAwesome
          name="chevron-left"
          size={32}
          color={theme["color-primary-100"]}
        />
      </Pressable>
      <Pressable
        style={{ position: "absolute", top: 95, right: 5, opacity: 0.5 }}
        onPress={handlePressRight}
      >
        <FontAwesome
          name="chevron-right"
          size={32}
          color={theme["color-primary-100"]}
        />
      </Pressable>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text category="s1">
            ${property.rentLow.toLocaleString()} - $
            {property.rentHigh.toLocaleString()}
          </Text>
          <FontAwesome
            name="heart-o"
            color={theme["color-primary-500"]}
            size={24}
          />
        </View>
        <Text category="c1">
          {property.bedroomLow} -{property.bedroomHigh} Beds
        </Text>
        <Text category="c1">{property.name}</Text>
        <Text category="c1">{property.street}</Text>
        <Text category="c1">
          {property.city},{property.state} {property.zip}
        </Text>
        <Text category="c1">{property.tags.join(", ")}</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Button
            onPress={() => console.log("email the property manager")}
            appearance="ghost"
            size="small"
            style={{ borderColor: theme["color-primary-500"], width: "48%" }}
          >
            Email
          </Button>
          <Button
            size="small"
            style={{ width: "48%" }}
            onPress={() => console.log("call the property manager")}
            appearance="filled"
          >
            call
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: CONTAINER_MARGIN,
    borderColor: theme["color-primary-500"],
    borderWidth: 1,
    borderRadius: 5,
  },
  image: {
    borderRadius: 5,
    height: 200,
    width: WIDTH,
  },
  content: {
    gap: 5,
    padding: CONTAINER_PADDING,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
});

export default PropertyCard;
