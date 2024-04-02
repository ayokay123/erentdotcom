import { WIDTH } from "@/constants/Property";
import { FontAwesome } from "@expo/vector-icons";
import { useRef, useState } from "react";
import { FlatList, Image, Pressable, StyleSheet } from "react-native";
import { default as theme } from "@/theme.json";

const ImageCarousel = ({ images }: { images: string[] }) => {
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
        index: images.length - 1,
        animated: true,
      });
    }

    flatListRef.current?.scrollToIndex({
      index: activeIndex - 1,
      animated: true,
    });
  };

  const handlePressRight = () => {
    if (activeIndex === images.length - 1) {
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
    <>
      <FlatList
        ref={(ref) => (flatListRef.current = ref)}
        data={images}
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
        style={[styles.chevron, { left: 5 }]}
        onPress={handlePressLeft}
      >
        <FontAwesome
          name="chevron-left"
          size={32}
          color={theme["color-primary-100"]}
        />
      </Pressable>
      <Pressable
        style={[styles.chevron, { right: 5 }]}
        onPress={handlePressRight}
      >
        <FontAwesome
          name="chevron-right"
          size={32}
          color={theme["color-primary-100"]}
        />
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 5,
    height: 200,
    width: WIDTH,
  },
  chevron: {
    position: "absolute",
    top: 95,
    opacity: 0.5,
  },
});

export default ImageCarousel;
