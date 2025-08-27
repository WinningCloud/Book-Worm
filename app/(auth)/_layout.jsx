import { StyleSheet, Text, View } from 'react-native'
import {Stack} from "expo-router"
import React from 'react'
import SafeScreen from '../../components/SafeScreen';
import {SafeAreaProvider} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar"

const AuthLayout = () => {
  return (

    <SafeAreaProvider>
    <SafeScreen>
    <Stack screenOptions={{
        headerShown:false
    }}>

     <Stack.Screen name="index" />
     <Stack.Screen name="(auth)" />
     </Stack>
    </SafeScreen>
    <StatusBar style='dark'/>
    </SafeAreaProvider>
    
  )
}

export default AuthLayout

const styles = StyleSheet.create({})