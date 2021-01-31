

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/core/useGLTF'
import {useSpring, a} from 'react-spring/three'


export default function Model(props) {
  const {rotate, setRotate} = props;
  const group = useRef()
  const { nodes, materials } = useGLTF('../../../scene.gltf')

  const handleRotate= () => {
   setRotate(!rotate)
    console.log(rotate)
  }
  const rotateHer = useSpring({
    rotation: rotate ? [0,0,0] : [0,6,0],

  })

  return (
    <group ref={group} {...props} dispose={null} onClick={handleRotate}>
    <group rotation={[-Math.PI / 2, 0, 0]}>
    <group rotation={[Math.PI / 2, 0, 0]}>
    <group rotation={[0, 0, 0]}>
    <group rotation={[0, 0, 0]}>
    <a.primitive object={nodes._rootJoint}  rotation={rotateHer.rotation}/>
    <skinnedMesh
    castShadow
    material={materials.Avatar_Loli_Catalyst_Yaoyao_Mat_Face}
    geometry={nodes.Face_Avatar_Loli_Catalyst_Yaoyao_Mat_Face_0.geometry}
    skeleton={nodes.Face_Avatar_Loli_Catalyst_Yaoyao_Mat_Face_0.skeleton}
    />
    <skinnedMesh
    castShadow
    material={materials.Avatar_Loli_Catalyst_Yaoyao_Mat_Face}
    geometry={nodes.Brow_Avatar_Loli_Catalyst_Yaoyao_Mat_Face_0.geometry}
    skeleton={nodes.Brow_Avatar_Loli_Catalyst_Yaoyao_Mat_Face_0.skeleton}
    />
    <skinnedMesh
    castShadow
    material={materials.Avatar_Loli_Catalyst_Yaoyao_Mat_Hair}
    geometry={nodes.Body_Avatar_Loli_Catalyst_Yaoyao_Mat_Hair_0.geometry}
    skeleton={nodes.Body_Avatar_Loli_Catalyst_Yaoyao_Mat_Hair_0.skeleton}
    />
    <skinnedMesh
    castShadow
    material={materials.Avatar_Loli_Catalyst_Yaoyao_Mat_Body}
    geometry={nodes.Body_Avatar_Loli_Catalyst_Yaoyao_Mat_Body_0.geometry}
    skeleton={nodes.Body_Avatar_Loli_Catalyst_Yaoyao_Mat_Body_0.skeleton}
    />
    <skinnedMesh
    castShadow
    material={materials.Avatar_Loli_Catalyst_Yaoyao_Mat_Face}
    geometry={nodes.Face_Eye_Avatar_Loli_Catalyst_Yaoyao_Mat_Face_0.geometry}
    skeleton={nodes.Face_Eye_Avatar_Loli_Catalyst_Yaoyao_Mat_Face_0.skeleton}
    />
    <skinnedMesh
    material={materials.Avatar_Loli_Catalyst_Yaoyao_Mat_Face}
    geometry={nodes.EyeStar_Avatar_Loli_Catalyst_Yaoyao_Mat_Face_0.geometry}
    skeleton={nodes.EyeStar_Avatar_Loli_Catalyst_Yaoyao_Mat_Face_0.skeleton}
    />
    </group>
    </group>
    </group>
    </group>
    </group>
    )
  }
  
  useGLTF.preload('../../../scene.gltf')
  