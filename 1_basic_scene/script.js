// initialize a new scene
const scene = new THREE.Scene()

// generating a cube
// first step is to create the basic geometry which defines 
// the shape of the object. the three parameters of the 
// function determines the dimensions of the geometry.
const geometry = new THREE.BoxGeometry(1, 1, 1)

// next step is to create the material which defines the appearance 
// of the object. The parameter of the function determines 
// the color of the object.
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })

// the final step is to create the object which is called a Mesh 
// and it is created using the geometry and the material.
const mesh = new THREE.Mesh(geometry, material)

// finally we add the mesh to the scene
scene.add(mesh)

// add a camera to the scene which will be used to render a view
// of the scene. There are different types of cameras. The first parameter
// in this fnction is the FOV (field of view) which is the angle of the
// camera's view. The second parameter is the aspect ratio which is the
// ratio of the width to the height of the view.
const camera = new THREE.PerspectiveCamera(75, 800 / 600)
camera.position.z = 3
scene.add(camera)

// we obtain access to the canvas element from our html file
// which will be used to render our scene.
const canvas = document.querySelector('.threejs-scene')
// finally we add a renderer to the scene. The renderer is responsible
// for drawing the scene.
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

// setting the size of the renderer and indirectly the size of the canvas
renderer.setSize(800, 600)

// adding the scene and the camera to the renderer and rendering the scene
renderer.render(scene, camera)