import * as THREE from 'three';
import { Camera, CubeReflectionMapping, Vector3 } from 'three';

// scéne 
const SCENE = new THREE.Scene();
console.log(SCENE);

// Caméra
const CAMERA = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
CAMERA.position.set(0,2,10);
CAMERA.rotation.set(0,0,0)
// const helper = new THREE.CameraHelper(CAMERA);
// SCENE.add(helper);

// light
// const light = new THREE.DirectionalLight( 0xDFFDFF );
// const Lhelper = new THREE.DirectionalLightHelper( light, 10 );
// light.position.set(0,0,100)
// SCENE.add( Lhelper );

const canvas = document.getElementById("canvas")

// Rendu
const renderer = new THREE.WebGLRenderer();
// on lui donne la taille de l'écran
renderer.setSize(window.innerWidth, window.innerHeight);
canvas.appendChild(renderer.domElement);
console.log(canvas.appendChild(renderer.domElement))

// les planétes pour la navigation
const ABOUT_GEO = new THREE.SphereGeometry(3, 32, 24);
const ABOUT_MAT = new THREE.MeshBasicMaterial( { color: 0xF7231 } );
const ABOUT = new THREE.Mesh(ABOUT_GEO, ABOUT_MAT);
ABOUT.position.y = 5;
SCENE.add(ABOUT);
console.log(ABOUT);

// click pour acceder à cette page
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh(geometry, material);
SCENE.add( cube );

console.log(SCENE.children);

function animate(){
	requestAnimationFrame(animate);
	renderer.render(SCENE,CAMERA);
}

animate();