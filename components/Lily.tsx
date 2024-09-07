import React, { useEffect, useState, useMemo } from "react"
import { useGLTF, useTexture, useAnimations } from "@react-three/drei/native"
import { useGraph } from "@react-three/fiber/native"
import { a, useSpring } from "@react-spring/three"
import { SkeletonUtils } from "three-stdlib"


export default function Lily({ pose, ...props }) {
  const { scene, animations } = useGLTF(require("@/assets/model3d/stacy.glb"))
  const texture = useTexture(require("@/assets/model3d/stacy.jpg"))

  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])

  const { nodes } = useGraph(clone)

  const { ref, actions, names } = useAnimations(animations)

  const [hovered, setHovered] = useState(false)
  const [index, setIndex] = useState(pose)

  const { color, scale } = useSpring({ scale: hovered ? [1.15, 1.15, 1] : [1, 1, 1], color: hovered ? "hotpink" : "aquamarine" })


  useEffect(() => {
    actions[names[index]].reset().fadeIn(0.5).play()

    return () => actions[names[index]].fadeOut(0.5)
  }, [index, actions, names])

  return (
    <group ref={ref} {...props} dispose={null}>
      <group
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => setIndex((index + 1) % names.length)}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}>
        <primitive object={nodes.mixamorigHips} />
        <skinnedMesh
          castShadow
          receiveShadow
          geometry={nodes.stacy.geometry}
          skeleton={nodes.stacy.skeleton}
        //   rotation={[-Math.PI / 2, 0, 0]}
          scale={[100, 100, 100]}>
          <meshStandardMaterial map={texture} map-flipY={false} skinning />
        </skinnedMesh>
      </group>
      <a.mesh receiveShadow position={[0, 1, -1]} scale={scale}>
        <circleGeometry args={[0.6, 64]} />
        <a.meshStandardMaterial color={color} />
      </a.mesh>
    </group>
  )
}
