import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Voice from '@react-native-voice/voice'
import CustomButton from './CustomButton'

const VoiceRecorder = () => {

    const [recognizedText, setRecognizedText] = useState('')
    const [error, setError] = useState('')
    const [isRecording, setIsRecording] = useState(false)

    Voice.onSpeechStart = () => setIsRecording(true);
    Voice.onSpeechEnd = () => setIsRecording(false);
    Voice.onSpeechError = err => console.log(err);

    Voice.onSpeechResults = event => {
        console.log('12', event)
        const { value } = event
        if (value) {
            setRecognizedText(value[0]);
            stopRecording()
        }
    }

    const startRecording = async () => {
        try{
            await Voice.start('en-US');
            setIsRecording(true)
            setRecognizedText('')
        } catch (error) {
            console.log(error);
        }
    }

    const stopRecording = async () => {
        try {
            await Voice.stop();
            setIsRecording(false)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <View>
        <Text className='text-md text-white'>{recognizedText}</Text>
        <Text className='text-md text-white'>{error}</Text>
        <CustomButton 
            title={isRecording? 'Stop' : 'Start'} 
            onPress={()=>{
                isRecording ? stopRecording : startRecording
            }} 
        />
    </View>
  )
}

export default VoiceRecorder