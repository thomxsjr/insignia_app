import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router';
import Colors from '../../constants/Colors';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Colors.primary,
                tabBarStyle: {
                    height: 70,
                    backgroundColor: Colors.dark,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: "bold",
                    marginBottom: 10,
                },
            }}
        >
            <Tabs.Screen
                name="isl-converter"
                options={{
                    tabBarLabel: "ISL Converter",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="account-convert"
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="ocr-isl"
                options={{
                    tabBarLabel: "OCR To ISL",
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="scan1" size={24} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
};

export default TabsLayout