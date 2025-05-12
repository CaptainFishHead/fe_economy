<template>
  <div class="three-scene" ref="container"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import type { Scene, PerspectiveCamera, WebGLRenderer, Group } from 'three'
import type { OrbitControls as OrbitControlsType } from 'three/examples/jsm/controls/OrbitControls.js'

const container = ref<HTMLElement | null>(null)
let scene: Scene
let camera: PerspectiveCamera
let renderer: WebGLRenderer
let controls: OrbitControlsType
let model: Group

const initScene = () => {
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(
    75,
    container.value!.clientWidth / container.value!.clientHeight,
    0.1,
    1000
  )

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(container.value!.clientWidth, container.value!.clientHeight)
  container.value!.appendChild(renderer.domElement)

  // 添加环境光和平行光
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
  scene.add(ambientLight)

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
  directionalLight.position.set(5, 5, 5)
  scene.add(directionalLight)

  camera.position.z = 5

  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true

  // 加载3D模型
  const loader = new GLTFLoader()
  loader.load('/models/campus.glb', (gltf) => {
    model = gltf.scene
    scene.add(model)
  })

  animate()
}

const animate = () => {
  requestAnimationFrame(animate)
  controls.update()
  renderer.render(scene, camera)
}

onMounted(() => {
  if (container.value) {
    initScene()
  }
})

onUnmounted(() => {
  if (scene) {
    scene.clear()
  }
  if (renderer) {
    renderer.dispose()
  }
})
</script>

<style scoped lang="scss">
.three-scene {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}
</style>