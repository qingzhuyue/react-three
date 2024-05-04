/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-05-04 22:48:24
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-05-04 23:50:07
 * @FilePath: /react-three/src/components/OrthographicCamera.jsx
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import React,{useRef,useEffect} from "react";
import * as THREE from 'three';

function OrthographicCamera(){
  const mount =  useRef(null);

  useEffect(()=>{
    const scene = new THREE.Scene(); // 场景
   
    const camera = new THREE.OrthographicCamera(-1,1,1.5,-1.5,1,10)
    const renderer = new THREE.WebGLRenderer();// 渲染器
camera.lookAt(new THREE.Vector3(0,0,0))
    renderer.setSize(window.innerWidth,window.innerHeight);

    mount.current.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry(); // 物体
    const material = new THREE.MeshBasicMaterial({color:0x00ff00});
    const vertices = new Float32Array( [
      -1.0, -1.0,  1.0, // v0
       1.0, -1.0,  1.0, // v1
       1.0,  1.0,  1.0, // v2
    
       1.0,  1.0,  1.0, // v3
      -1.0,  1.0,  1.0, // v4
      -1.0, -1.0,  1.0  // v5
    ] );
    geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );

    const mesh = new THREE.Mesh(geometry,material);

    scene.add(mesh);
    camera.position.set(0.1,0.1,1.5);
    scene.add(camera);
    renderer.render(scene,camera)
    // const animate = () => {
    //   requestAnimationFrame(animate);

    //   renderer.render(scene,camera)
    // };
    // animate();

    return ()=>{
      mount.current.removeChild(renderer.domElement)
    }
  },[])

  return <div ref={mount} />
}

export default OrthographicCamera