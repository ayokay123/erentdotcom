import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Marker } from "react-native-maps";

const MapMarker = ({
  lat,
  lng,
  onPress,
  color,
}: {
  lat: number;
  lng: number;
  onPress: () => void;
  color: string;
}) => {
  return (
    <Marker coordinate={{ latitude: lat, longitude: lng }} onPress={onPress}>
      <FontAwesome name="map-marker" size={32} color={color} />
    </Marker>
  );
};

export default MapMarker;
