import AnimatedHeader from "@/components/Header/AnimatedHeader";
import Map from "@/components/Map/Map";
import PropertyCard from "@/components/PropertyCard";
import ScreenWrapper from "@/components/ScreenWrapper";
import { BASE_HEIGHT } from "@/constants/Header";
import { PROPERTIES } from "@/data/properties";
import React, { useState } from "react";
import { Animated, FlatList, View } from "react-native";

const SearchScreen = () => {
  const [mapOpened, setMapOpened] = useState(false);

  const scrollY = new Animated.Value(0);

  return (
    <ScreenWrapper>
      <AnimatedHeader
        scrollY={scrollY}
        setMapOpened={setMapOpened}
        mapOpened={mapOpened}
      />
      {mapOpened ? (
        <Map properties={PROPERTIES} />
      ) : (
        <FlatList
          data={PROPERTIES}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <PropertyCard key={item.id} property={item} />
          )}
          onScroll={(e) => {
            const yOffset = e.nativeEvent.contentOffset.y;
            scrollY.setValue(yOffset);
          }}
          scrollEventThrottle={16}
          ListHeaderComponent={<View style={{ paddingTop: BASE_HEIGHT }} />}
          bounces={false}
        />
      )}
    </ScreenWrapper>
  );
};

export default SearchScreen;
