import * as THREE from "three";

// Check if THREE.js classes are accessible
// console.log(THREE);

// Step 1 - Create a Scene
const scene = new THREE.Scene();

// Step 2 - Create a Geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Step 3 - Create a Material
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

// Step 4 - Create a Mesh using the Geometry and Material
const mesh = new THREE.Mesh(geometry, material);

// Step 5 - Add the Mesh to the Scene
scene.add(mesh);

// Sizes
const sizes = {
	width: 800,
	height: 600,
};

// Step 6 - Create a Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);

// Step 7 - Setup Camera positon in 3D space and add it to the Scene
camera.position.z = 3;
camera.position.x = 1;
scene.add(camera);

// Step 8 - Fetch the HTML Canvas element where the Scene is to be rendered
const canvas = document.querySelector(".canvas");

// Step 9 - Add a Renderer to Render the Scene
const renderer = new THREE.WebGLRenderer({
	canvas: canvas,
});

// Step 10 - Set the size of the Renderer (it also resizes the canvas element)
renderer.setSize(sizes.width, sizes.height);

// Step 11 - Render the Scene
renderer.render(scene, camera);
