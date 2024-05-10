/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-05-10 17:47:21
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-05-10 18:09:18
 * @FilePath: /react-three/src/components/AmbientLight.jsx
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import React, { useRef, useEffect } from "react";
import * as THREE from 'three';

function AmbientLight() {
  const mount = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene(); // 场景
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);  // 照相机
    const renderer = new THREE.WebGLRenderer();// 渲染器

    renderer.setSize(window.innerWidth, window.innerHeight);

    mount.current.appendChild(renderer.domElement);
    
   
    const cube = new THREE.Mesh( new THREE.BoxGeometry(3, 3, 3), new THREE.MeshLambertMaterial({ emissive:0x00ff00 }));
    cube.rotation.x = 20;
    cube.rotation.y = 20;
    cube.rotation.z = 20;
    scene.add(cube);

    const light = new THREE.AmbientLight(0xccc);
    scene.add(light);

    camera.position.z = 10;

    renderer.render(scene, camera)
    // const animate = () => {
    //   requestAnimationFrame(animate);
    //   cube.rotation.x += 0.02;
    //   cube.rotation.y += 0.02;

    //   renderer.render(scene, camera)
    // };
    // animate();

    return () => {
      mount.current.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mount} />
}

export default AmbientLight