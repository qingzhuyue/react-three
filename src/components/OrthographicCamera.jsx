/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-05-04 22:48:24
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-05-07 23:57:06
 * @FilePath: /react-three/src/components/OrthographicCamera.jsx
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import React, { useRef, useEffect } from "react";
import * as THREE from 'three';

function OrthographicCamera() {
  const mount = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene(); // 场景
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);  // 照相机
    const renderer = new THREE.WebGLRenderer();// 渲染器

    renderer.setSize(window.innerWidth, window.innerHeight);

    mount.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(3,3,3); // 物体
    const material = new THREE.MeshBasicMaterial({
      color: 0xffff00,
      opacity: 0.2
    });;
    const cube = new THREE.Mesh(geometry, material);

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

export default OrthographicCamera