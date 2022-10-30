import * as THREE from "three";

// Basic Scene
const canvasEl = document.querySelector(".canvas");
const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red" });
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

const camera = new THREE.PerspectiveCamera(75, 800 / 600);
camera.position.z = 3;
scene.add(camera);

const renderer = new THREE.WebGLRenderer({ canvas: canvasEl });
renderer.setSize(800, 600);

// Animations
// let time = Date.now();
const clock = new THREE.Clock();

const tick = () => {
	// Adapting to Uniform FPS

	// Process 1 - Using Delta
	// let currentTime = Date.now();
	// let deltaTime = currentTime - time;
	// time = currentTime;

	// Process 2 - Using Clock
	const elapsedTime = clock.getElapsedTime();

	// Update Objects
	// Process 1 - Using Delta
	// mesh.rotation.x += 0.001 * deltaTime;
	// mesh.rotation.y += 0.001 * deltaTime;
	// mesh.rotation.z += 0.001 * deltaTime;

	// Process 2 - Using Clock
	mesh.position.y = Math.sin(elapsedTime);
	mesh.position.x = Math.cos(elapsedTime);

	mesh.rotation.x = elapsedTime * Math.PI;
	mesh.rotation.y = elapsedTime * Math.PI * 2;
	mesh.rotation.z = elapsedTime * Math.PI;

	// Render Frame
	renderer.render(scene, camera);

	// Call Function to Update Frame
	window.requestAnimationFrame(tick);
};

tick();
