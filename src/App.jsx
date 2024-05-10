/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-05-03 22:23:28
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-05-10 16:34:00
 * @FilePath: /react-three/src/App.jsx
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import MeshBasicMaterial from './components/MeshBasicMaterial'
import MeshLambertMaterial from './components/MeshLambertMaterial'
import MeshPhongMaterial from './components/MeshPhongMaterial'
import MeshNormalMaterial from "./components/MeshNormalMaterial"

function App() {

  return (
    <>
      <div>
       <MeshLambertMaterial />
      </div>
    </>
  )
}

export default App
