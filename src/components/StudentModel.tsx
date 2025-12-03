import React, { useEffect, useRef } from 'react'
import { Group } from 'three'
import { useGLTF, useAnimations } from '@react-three/drei'
import gsap from 'gsap'
import { TextureLoader } from 'three'
import { useLoader } from '@react-three/fiber'
import icon1 from "../assets/laptop_icon.png"
import icon2 from "../assets/smartphone_icon.png"
import icon3 from "../assets/time_icon.png"



type StudentModelProps = React.ComponentPropsWithoutRef<'group'>

export function StudentModel(props: StudentModelProps) {
  const group = useRef<Group>(null)

  const iconTex1 = useLoader(TextureLoader, icon1)
const iconTex2 = useLoader(TextureLoader, icon2)
const iconTex3 = useLoader(TextureLoader, icon3)

  const { nodes, materials, animations } = useGLTF('/models/student_2.glb') as any
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
  const handleMouseMove = (event: MouseEvent) => {
    const x = (event.clientX / window.innerWidth) * 2 - 1
    const y = (event.clientY / window.innerHeight) * 2 - 1

    if (!group.current) return

    gsap.to(group.current.rotation, {
      x: -y * 0.1,   
      y: x * 0.1,   
      duration: 0.6,
      ease: "power2.out"
    })
  }

  window.addEventListener("mousemove", handleMouseMove)

  return () => window.removeEventListener("mousemove", handleMouseMove)
}, [])


  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene"> 
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 2.5]}
          scale={2.698}
        >
          <group name="root">
            <group
              name="GLTF_SceneRootNode"
              rotation={[Math.PI / 1.7, -0.8, 0]}
            >
              <group
                name="Armature_103"
                position={[0.45, 0.2, 0.001]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.9}
              >
                <sprite scale={[0.05, 0.05, 0.05]} position={[0, 0, 0]}>
                  <spriteMaterial map={iconTex1} />
                </sprite>
                <sprite scale={[0.05, 0.05, 0.05]} position={[0, 0, -0.08]}>
                  <spriteMaterial map={iconTex2} />
                </sprite>
                <sprite scale={[0.05, 0.05, 0.05]} position={[0, 0.4, 0.04]}>
                  <spriteMaterial map={iconTex3} />
                </sprite>
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials['Material.007']}
                    skeleton={nodes.Object_7.skeleton}
                    
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials['Material_60.004']}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <skinnedMesh
                    name="Object_11"
                    geometry={nodes.Object_11.geometry}
                    material={materials['Material.012']}
                    skeleton={nodes.Object_11.skeleton}
                  />
                  <skinnedMesh
                    name="Object_13"
                    geometry={nodes.Object_13.geometry}
                    material={materials['Material.004']}
                    skeleton={nodes.Object_13.skeleton}
                  />
                  <skinnedMesh
                    name="Object_15"
                    geometry={nodes.Object_15.geometry}
                    material={materials['Material_64.004']}
                    skeleton={nodes.Object_15.skeleton}
                    
                  />
                  <skinnedMesh
                    name="Object_17"
                    geometry={nodes.Object_17.geometry}
                    material={materials['Material.007']}
                    skeleton={nodes.Object_17.skeleton}
                  />
                  <skinnedMesh
                    name="Object_19"
                    geometry={nodes.Object_19.geometry}
                    material={materials['Material.002']}
                    skeleton={nodes.Object_19.skeleton}
                  />
                  <skinnedMesh
                    name="Object_21"
                    geometry={nodes.Object_21.geometry}
                    material={materials['Material.001']}
                    skeleton={nodes.Object_21.skeleton}
                  />
                  <skinnedMesh
                    name="Object_23"
                    geometry={nodes.Object_23.geometry}
                    material={materials['Material.003']}
                    skeleton={nodes.Object_23.skeleton}
                  />
                  <skinnedMesh
                    name="Object_25"
                    geometry={nodes.Object_25.geometry}
                    material={materials['25_part3-Model-0-Mesh-0-0_1_0_0']}
                    skeleton={nodes.Object_25.skeleton}
                    
                  />

                  <group name="node_id40_93" />
                  <group name="node_id44_94" />
                  <group name="node_id52_95" />
                  <group name="node_id56_96" />
                  <group name="node_id60_97" />
                  <group name="node_id64_98" />
                  <group name="node_id68_99" />
                  <group name="node_id72_100" />
                  <group name="node_id76_101" />
                  <group name="node_id80_102" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/student_2.glb')
