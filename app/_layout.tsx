import React, { useEffect } from 'react'
import { SplashScreen, Stack } from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {

    const [fontsLoaded, error] = useFonts({
        "Space-Mono": require("../assets/fonts/SpaceMono-Regular.ttf"),
        "Helmet": require('../assets/fonts/Helmet-Regular.ttf')
    });

    useEffect(() => {
        if (error) throw error;
        if (fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error]);

    if (!fontsLoaded) {
        return null;
    }

    if (!fontsLoaded && !error) {
        return null;
    }

    
  return (
    <SafeAreaProvider>
        <Stack>
            <Stack.Screen 
            name='index' 
            options={{headerShown: false}}
        />
        <Stack.Screen 
            name='(tabs)' 
            options={{headerShown: false}}
        />
        </Stack>
    </SafeAreaProvider>
  )
}

export default RootLayout