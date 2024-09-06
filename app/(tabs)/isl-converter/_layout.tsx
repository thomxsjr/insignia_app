import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';

const ISLConverterLayout = () => {
    return (
        <Stack>
            <Stack.Screen
                name="isl-to-speech"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="speech-to-isl"
                options={{
                    headerShown: false,
                }}
            />
        </Stack>
    );
}

export default ISLConverterLayout