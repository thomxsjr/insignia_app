import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import CustomButton from '../components/CustomButton'
import { useRouter } from 'expo-router'

const Home = () => {

    const router = useRouter();

  return (
    <View className='w-full justify-center flex items-center h-full px-4 bg-black'>
        <SafeAreaView className='flex-1 justify-between px-1'>
                <Text
                className='text-white pt-[350px] text-center font-bold text-8xl'> 
                    Insignia
                </Text>
                <CustomButton containerStyles={'mb-20'} title='Get Started' onPress={() => router.push('/isl-converter/speech-to-isl')} />
            <StatusBar style='light' />
        </SafeAreaView>
    </View>
  )
}

export default Home