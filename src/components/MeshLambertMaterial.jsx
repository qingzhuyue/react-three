/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-05-10 15:54:17
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-05-10 16:51:28
 * @FilePath: /react-three/src/components/MeshLambertMaterial.jsx
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import React, { useRef, useEffect } from "react";
import * as THREE from 'three';

function MeshLambertMaterial() {
  const mount = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene(); // 场景
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);  // 照相机
    const renderer = new THREE.WebGLRenderer();// 渲染器

    renderer.setSize(window.innerWidth, window.innerHeight);

    mount.current.appendChild(renderer.domElement);
    const texture = new THREE.TextureLoader().load('../assets/222.png', {}, function () {
      renderer.render(scene, camera)
    })
    const geometry = new THREE.BoxGeometry(3, 3, 3); // 物体
    const material = new THREE.MeshLambertMaterial({ map: texture });
    const cube = new THREE.Mesh(geometry, material);
    cube.rotation.x = 20;
    cube.rotation.y = 20;
    cube.rotation.z = 20;
    scene.add(cube);
    camera.position.z = 10;
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.02;
      cube.rotation.y += 0.02;

      renderer.render(scene, camera)
    };
    animate();

    return () => {
      mount.current.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mount} />
}

export default MeshLambertMaterial