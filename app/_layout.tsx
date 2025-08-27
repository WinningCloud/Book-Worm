import React, { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack, Slot, useRouter, useSegments, SplashScreen } from "expo-router";
import { useAuthStore } from "../store/authStore";
import SafeScreen from "../components/SafeScreen";
import { useFonts } from "expo-font";

export default function RootLayout() {
  const router = useRouter();
  const segments = useSegments();
  const { checkAuth, user, token } = useAuthStore();

  const [fontsLoaded] = useFonts({
    "JetBrainsMono-Medium": require("../assets/fonts/JetBrainsMono-Medium.ttf"),
  });

  const [authChecked, setAuthChecked] = useState(false);

  // Prevent splash screen auto-hide
  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  // Hide splash after fonts load
  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  // Check authentication once
  useEffect(() => {
    (async () => {
      await checkAuth();
      setAuthChecked(true);
    })();
  }, []);

  // Handle redirects after auth check
  useEffect(() => {
    if (!authChecked) return; // wait for auth check
    const inAuth = segments[0] === "(auth)";
    const isSignedIn = user && token;

    if (!isSignedIn && !inAuth) {
      // Not signed in & trying to access protected page
      router.replace("/(auth)");
    } else if (isSignedIn && inAuth) {
      // Signed in & on auth page
      router.replace("/(tabs)");
    }
  }, [authChecked, user, token, segments]);

  return (
    <SafeAreaProvider>
      <SafeScreen>
        <Stack screenOptions={{ headerShown: false }}>
          <Slot /> {/* Must render Slot for navigation to work */}
        </Stack>
      </SafeScreen>
    </SafeAreaProvider>
  );
}
