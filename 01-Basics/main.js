import * as THREE from "three";

// Check if THREE.js classes are accessible
// console.log(THREE);

// Create a Scene
const scene = new THREE.Scene();

// Create Geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Create Materials
const materialRed = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const materialGreen = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const materialBlue = new THREE.MeshBasicMaterial({ color: 0x0000ff });

/** Create Meshes using the Geometry and Materials
 * Optional - If a scene has more than one meshe, a Group can be created
 * And the meshes can be added to one Group.
 * This makes transformation of the whole group a lot easier
 */

const group = new THREE.Group();

const mesh1 = new THREE.Mesh(geometry, materialRed);
const mesh2 = new THREE.Mesh(geometry, materialGreen);
const mesh3 = new THREE.Mesh(geometry, materialBlue);

mesh1.position.x = -2;
mesh2.position.x = 0;
mesh3.position.x = 2;

group.scale.y = 2;

group.add(mesh1);
group.add(mesh2);
group.add(mesh3);

// Optional - Change position, scale and Rotation of the Mesh
// mesh.position.x = 1;

// mesh.scale.x = 1;
// mesh.scale.y = 2;

// mesh.rotation.reorder("YXZ");
// mesh.rotation.x = Math.PI * 0.6;

// Add the Mesh to the Scene
scene.add(group);

// Sizes
const sizes = {
	width: 800,
	height: 600,
};

// Create a Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);

// Setup Camera positon in 3D space
camera.position.z = 3;

// Optional - Make the Camera look at the subject
// camera.lookAt(mesh.position);

// Add Camera to the Scene
scene.add(camera);

// Axes Helper
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

// Fetch the HTML Canvas element where the Scene is to be rendered
const canvas = document.querySelector(".canvas");

// Add a Renderer to Render the Scene
const renderer = new THREE.WebGLRenderer({
	canvas: canvas,
});

// Set the size of the Renderer (it also resizes the canvas element)
renderer.setSize(sizes.width, sizes.height);

// Render the Scene
renderer.render(scene, camera);
