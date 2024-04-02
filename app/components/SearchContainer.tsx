import { FlatList, StyleSheet, View } from "react-native";
import PropertyCard from "./PropertyCard";

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
  return (
    <View>
      <FlatList
        style={styles.FlatList}
        data={properties}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <PropertyCard key={item.id} {...item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  FlatList: {
    gap: 20,
  },
});
