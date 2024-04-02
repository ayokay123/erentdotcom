import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ViewStyle,
} from "react-native";

const ScreenWrapper = ({
  children,
  style,
}: {
  children: any;
  style?: ViewStyle;
}) => {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default ScreenWrapper;
