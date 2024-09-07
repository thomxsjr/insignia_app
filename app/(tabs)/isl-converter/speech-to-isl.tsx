import { View, Text } from 'react-native'
import React, { Suspense } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import VoiceRecorder from '../../../components/VoiceRecorder'
import Lily from '@/components/Lily.tsx'
import { Canvas } from '@react-three/fiber/native'
import { OrbitControls } from '@react-three/drei/native'
// import { OrbitControls } from '@react-three/drei/native'

const SpeechToISL = () => {
  return (
    <View>
        <SafeAreaView className='w-full flex  items-center h-full px-4 bg-black'>
            <Text 
            className='text-white font-bold text-center text-xl'>
                Speech To ISL</Text>

            <VoiceRecorder />
            <View className='border border-white w-screen h-screen'>
            <Canvas onCreated={(state) => {
        const _gl = state.gl.getContext()
    
        const pixelStorei = _gl.pixelStorei.bind(_gl)
        _gl.pixelStorei = function(...args) {
          const [parameter] = args
    
          switch(parameter) {
            // expo-gl only supports the flipY param
            case _gl.UNPACK_FLIP_Y_WEBGL:
              return pixelStorei(...args)
          }
        }
      }} shadows camera={{ fov: 50 }}>
    <OrbitControls />
      <ambientLight />
      <directionalLight position={[-5, 5, 5]} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
      <group position={[0, -1, 0]}>
        <Suspense fallback={null}>
          <Lily pose={2} position={[0, 0, 0]} />
        </Suspense>
      </group>
      <mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <planeGeometry args={[10, 10, 1, 1]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </Canvas>
            </View>
            
        </SafeAreaView>
    </View>
  )
}
export default SpeechToISL