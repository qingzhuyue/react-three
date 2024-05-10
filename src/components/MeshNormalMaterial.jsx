/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-05-10 16:23:01
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-05-10 16:30:20
 * @FilePath: /react-three/src/components/MeshNormalMaterial.jsx
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import React, { useRef, useEffect } from "react";
import * as THREE from 'three';

function MeshNormalMaterial() {
  const mount = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene(); // 场景
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);  // 照相机
    const renderer = new THREE.WebGLRenderer();// 渲染器

    renderer.setSize(window.innerWidth, window.innerHeight);

    mount.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(3,3,3); // 物体
    const material = new THREE.MeshNormalMaterial();
    const cube = new THREE.Mesh(geometry, material);
    cube.rotation.x = 2;
    cube.rotation.y = 9;
    cube.rotation.z = 5;
    scene.add(cube);
    camera.position.set(6,0,10);
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

export default MeshNormalMaterial