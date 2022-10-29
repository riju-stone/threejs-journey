# What is WebGL ?

WebGL is a JavaScript API that renders triangles in a canvas at a remarkable speed. It's compatible with most modern browsers, and it's fast because it uses the Graphic Processing Unit (GPU) of the visitor.

WebGL can draw more than triangles and can also be used to create 2D experiences, but we will focus on 3D experiences using triangles for the course's sake.

The GPU can do thousands of parallel calculations. Imagine that you want to render a 3D model and this model is constituted of 1000 triangles—which, come to think about it, is not that many. Each triangle includes 3 points. When we want to render our model, the GPU will have to calculate the position of these 3000 points. Because the GPU can do parallel calculations, it will handle all the triangles points in one raw.

Once the model's points are well placed, the GPU needs to draw each visible pixel of those triangles. Yet again, the GPU will handle the thousands and thousands of pixels calculations in one go.

The instructions to place the points and draw the pixels are written in what we call shaders. And let me tell you, shaders are hard to master. We also need to provide data to these shaders. For example: how to place the points according to the model transformations and the camera's properties. These are called matrices. We also need to provide data to help colorize the pixels. If there is a light and the triangle is facing that light, it should be brighter than if the triangle isn't.

And this is why native WebGL is so hard. Drawing a single triangle on the canvas would take at least 100 lines of code. Good luck if you want to add perspective, lights, models, and animate everything in that case.

But native WebGL benefits from existing at a low level, very close to the GPU. This enables excellent optimizations and more control.

# What is Three.js

Three.js is a JavaScript library under MIT license that works right above WebGL. The library's goal is to drastically simplify the process of handling all of what we just stated. You'll have an animated 3D scene in just a few code lines, and you won't have to provide shaders and matrices.

Because Three.js is right above WebGL, we can still interact with it in some ways. At some point, we will get to writing shaders and create matrices.
