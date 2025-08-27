import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import COLORS from "../constants/colors.js"
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const SafeScreen = ({children}) => {
    const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, {
        paddingTop: insets.top,
        paddingBottom: insets.bottom
    }]}>
      {children}
    </View>
  )
}

export default SafeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.background
    }
})