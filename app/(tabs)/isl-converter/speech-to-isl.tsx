import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import VoiceRecorder from '../../../components/VoiceRecorder'

const SpeechToISL = () => {
  return (
    <View>
        <SafeAreaView className='w-full flex  items-center h-full px-4 bg-black'>
            <Text 
            className='text-white font-bold text-center text-xl'>
                Speech To ISL</Text>

            <VoiceRecorder />
            
        </SafeAreaView>
    </View>
  )
}

export default SpeechToISL