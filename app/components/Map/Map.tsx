import { Property } from "@/types/property";
import { Platform, StyleSheet, TouchableOpacity, View } from "react-native";
import MapView from "react-native-maps";
import MapMarker from "./MapMarker";
import { default as theme } from "@/theme.json";
import { useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import PropertyCard from "../PropertyCard";
import { FontAwesome } from "@expo/vector-icons";

const MapProperty = ({
  property,
  handleMapPress,
}: {
  property: Property;
  handleMapPress: () => void;
}) => {
  return (
    <>
      <TouchableOpacity
        style={[styles.propertyContainer]}
        onPress={handleMapPress}
      >
        <FontAwesome
          name="close"
          color={theme["color-primary-500"]}
          size={20}
        />
      </TouchableOpacity>
      <PropertyCard property={property} style={styles.propertyCard} />
    </>
  );
};

const Map = ({ properties }: { properties: Property[] }) => {
  const [selectedProperty, setSelectedProperty] = useState(-1);
  const navigation = useNavigation();
  const mapRef = useRef<MapView | null>(null);

  const handleMapPress = () => {
    setSelectedProperty(-1);
    navigation.setOptions({ tabBarStyle: { display: "flex" } });
  };

  const handleMarkerPress = (index: number) => {
    if (Platform.OS === "ios") {
      setTimeout(() => {
        mapRef.current?.animateCamera({
          center: {
            latitude: properties[index].lat,
            longitude: properties[index].lng,
          },
        });
      }, 100);
    }

    setSelectedProperty(index);
    navigation.setOptions({ tabBarStyle: { display: "none" } });
  };

  return (
    <View style={[styles.container]}>
      <MapView
        style={[styles.map]}
        userInterfaceStyle="light"
        ref={mapRef}
        initialRegion={{
          latitude: properties[0].lat,
          longitude: properties[0].lng,
          latitudeDelta: 1,
          longitudeDelta: 1,
        }}
      >
        {properties.map((property, index) => (
          <MapMarker
            key={property.id}
            lat={property.lat}
            lng={property.lng}
            color={
              selectedProperty === index
                ? theme["color-info-400"]
                : theme["color-primary-400"]
            }
            onPress={() => handleMarkerPress(index)}
          />
        ))}
      </MapView>
      {selectedProperty !== -1 && (
        <MapProperty
          property={properties[selectedProperty]}
          handleMapPress={handleMapPress}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
  },
  map: {
    height: "100%",
    width: "100%",
  },
  propertyContainer: {
    backgroundColor: "white",
    position: "absolute",
    top: 170,
    left: 15,
    borderRadius: 30,
    padding: 10,
  },
  propertyCard: {
    position: "absolute",
    bottom: 10,
    height: 360,
    backgroundColor: "white",
  },
});

export default Map;
