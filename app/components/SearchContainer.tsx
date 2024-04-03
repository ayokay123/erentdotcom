import { Animated, FlatList, ScrollView, StyleSheet, View } from "react-native";
import PropertyCard from "./PropertyCard";
import { BASE_HEIGHT, HEADER_HEIGHT } from "@/constants/Header";
import AnimatedHeader from "./Header/AnimatedHeader";
import MapView from "react-native-maps";
import { useState } from "react";

export default function SearchContainer() {
  const properties = [
    {
      id: 1,
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
    },
    {
      id: 2,
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
    },
    {
      id: 3,
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
    },
    {
      id: 4,
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
    },
  ];
  const [mapOpened, setMapOpened] = useState(false);

  const scrollY = new Animated.Value(0);

  return (
    <>
      <AnimatedHeader
        scrollY={scrollY}
        setMapOpened={setMapOpened}
        mapOpened={mapOpened}
      />
      {mapOpened ? (
        <View style={{ flex: 1, overflow: "hidden" }}>
          <MapView style={{ height: "100%", width: "100%" }} />
        </View>
      ) : (
        <ScrollView
          style={{
            flex: 1,
          }}
          onScroll={(e) => {
            scrollY.setValue(e.nativeEvent.contentOffset.y);
          }}
          scrollEventThrottle={16}
          bounces={false}
          contentContainerStyle={{ paddingTop: BASE_HEIGHT }}
        >
          <FlatList
            style={styles.FlatList}
            data={properties}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <PropertyCard key={item.id} {...item} />}
          />
        </ScrollView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  FlatList: {
    gap: 20,
  },
});
