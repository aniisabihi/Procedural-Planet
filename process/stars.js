//Setting up scene
var scene = new THREE.Scene();
var renderer = new THREE.WebGLRenderer();
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
renderer.setSize(WIDTH, HEIGHT);
document.body.appendChild( renderer.domElement );

//Adding camera to scene
var ratio = WIDTH/HEIGHT;
var camera = new THREE.PerspectiveCamera(45, ratio, 1, 1000);
camera.position.z = 5;
camera.position.y = 2;
camera.lookAt(new THREE.Vector3(0, 0, 0));
//var controls = new THREE.OrbitControls( camera ); //Give user control of camera

//Create particles
var particleCount = 1000,
    particles = new THREE.Geometry(),
    ptexture = new THREE.TextureLoader().load("https://s22.postimg.cc/w7b1iilr5/particle_A.png"),
    pMaterial = new THREE.PointsMaterial({
      color: 0xFFFFFF,
      map: ptexture,
      transparent: true, 
      blending: THREE.AdditiveBlending,
      depthTest: true, 
      size: 3
});

//Create the individual particles
for (var p = 0; p < particleCount; p++) {
  //Create a particle with random x position (-120, 120)
  var pX = Math.random() * 240 - 120,
      pY = Math.random() * 240 - 120,
      pZ = Math.random() * 240 - 120,
      particle = new THREE.Vector3(pX, pY, pZ);

  particles.vertices.push(particle);
}

//Create the particle system
var particleSystem = new THREE.Points(particles, pMaterial);
particleSystem.sortParticles = true;
scene.add(particleSystem);

//Rendering 
function animate() {
	requestAnimationFrame( animate );
	particleSystem.rotation.y += 0.001;
	renderer.render( scene, camera );
}
animate();