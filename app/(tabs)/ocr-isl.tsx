import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const OCRISL = () => {
  return (
    <View>
        <SafeAreaView className='w-full flex  items-center h-full px-4 bg-black'>
            <Text 
              className='text-white font-bold text-center text-xl'>
              OCR ISL
            </Text>
            <Text className='text-white pt-[450px] text-center font-semibold text-4xl'>Coming Soon!</Text>
        </SafeAreaView>
    </View>
  )
}

export default OCRISL