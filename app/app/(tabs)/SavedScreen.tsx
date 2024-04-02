import EditScreenInfo from "@/components/EditScreenInfo";
import ScreenWrapper from "@/components/ScreenWrapper";
import { Text } from "react-native"

const SavedScreen = () => {
  return (
    <ScreenWrapper>
        <Text>Saved</Text>
        <EditScreenInfo path="app/(tabs)/SavedScreen.tsx" />
    </ScreenWrapper>
  )
}

export default SavedScreen;