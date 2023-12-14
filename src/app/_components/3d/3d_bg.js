"use client";

import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as dat from "dat.gui";

import { FlakesTexture } from "three/examples/jsm/textures/FlakesTexture";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";

function threebg(container) {
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
  });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setClearColor(0x000000, 0.0);
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    50,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
  const orbit = new OrbitControls(camera, renderer.domElement);
  camera.lookAt(0, 0, 0);
  camera.position.set(30, 26, 40);
  orbit.update();

  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.24;

  //helpers
  /* const axesHelper = new THREE.AxesHelper(100);
  const gridHelper = new THREE.GridHelper(100, 100);
  scene.add(axesHelper, gridHelper); */

  //light
  const directLight = new THREE.DirectionalLight(0xffffff, 0.7);
  const helper = new THREE.DirectionalLightHelper(directLight, 5);
  scene.add(directLight /*  helper */);

  function generateCube(r, x, y, z, color) {
    const cubeGeo = new THREE.SphereGeometry(r, 40, 20);
    const cubeMat = new THREE.MeshLambertMaterial({ color });
    const cube = new THREE.Mesh(cubeGeo, cubeMat);
    cube.position.set(x, y, z);
    scene.add(cube);
    return cube;
  }

  const js = generateCube(6.2, 0, 16, 0, 0xffff00);
  const next = generateCube(6.3, 6, 6, 4, 0x4c4c4c);
  const ex = generateCube(5, -3, -9, 3, 0xf5f5f5);
  const aws = generateCube(4, -4, -16, 1, 0xff9900);
  const react = generateCube(7, -6, 0, -5, 0x00ffff);
  const node = generateCube(4, 10, -7, -2, 0x7ad353);
  const mongo = generateCube(4, 4, -13, 5, 0x82b95b);
  const git = generateCube(3, 2, -4, 8, 0xe94e31);
  const github = generateCube(5, 4, -7, -4, 0x3f3f3f);

  function animate() {
    requestAnimationFrame(animate);
    scene.rotation.y += 0.005;
    renderer.render(scene, camera);
  }

  if (WebGL.isWebGLAvailable()) {
    animate();
  } else {
    const warning = WebGL.getWebGLErrorMessage();
    document.getElementById("container").appendChild(warning);
  }
}

export default threebg;
