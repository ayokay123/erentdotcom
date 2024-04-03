import { Platform, StatusBar } from "react-native";

export const BASE_HEIGHT = 160;
const iosNotch = 40;
const iosHeight = BASE_HEIGHT + iosNotch;
let androidHeight = BASE_HEIGHT;
let androidNotch = 0;
if (StatusBar.currentHeight) androidNotch = StatusBar.currentHeight;
androidHeight += androidNotch;

export const HEADER_HEIGHT = Platform.OS === "ios" ? iosHeight : androidHeight;
