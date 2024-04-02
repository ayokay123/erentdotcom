import EditScreenInfo from '@/components/EditScreenInfo'
import ScreenWrapper from '@/components/ScreenWrapper'
import React from 'react'
import { Text } from 'react-native'

const SearchScreen = () => {
  return (
    <ScreenWrapper>
      <Text>Search</Text>
      <EditScreenInfo path="app/(tabs)/SearchScreen.tsx" />
    </ScreenWrapper>
  )
}

export default SearchScreen