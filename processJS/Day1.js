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
//var controls = new THREE.OrbitControls( camera, renderer.domElement ); //Give user control of camera

//Adding cube to scene
var geometry = new THREE.SphereGeometry(1,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0x8F5706 } );
var cube = new THREE.Mesh( geometry, material );
cube.overdraw = true;
scene.add( cube );

//Adding cube to scene
var geometry2 = new THREE.SphereGeometry(1,32,32);
var material2 = new THREE.MeshPhongMaterial( { color: 0x581845 } );
var cube2 = new THREE.Mesh( geometry2, material2 );
cube2.overdraw = true;
scene.add( cube2 );
cube2.position.x = 5;
cube2.position.y = -2;
cube2.position.z = -4;

//Adding cube to scene
var geometry3 = new THREE.SphereGeometry(1,32,32);
var material3 = new THREE.MeshPhongMaterial( { color: 0x237164 } );
var cube3 = new THREE.Mesh( geometry3, material3 );
cube3.overdraw = true;
scene.add( cube3 );
cube3.position.x = -5;
cube3.position.z = -6;

//Adding directional light to scene
var light = new THREE.DirectionalLight(0xFFFFFF, 1);
var lightAngle = 0;
light.position.set(0, 1, 0.5);
scene.add(light);

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
	//Light moves in circular motion above cube
	lightAngle += 0.5;
		if (lightAngle > 360) { lightAngle = 0;};
	  light.position.x = 0.5 * Math.cos(lightAngle * Math.PI / 180);
	  light.position.z = 0.5 * Math.sin(lightAngle * Math.PI / 180);

	requestAnimationFrame( animate );
	cube.rotation.x += 0.001;
	cube.rotation.y += 0.001;
  cube2.rotation.x += 0.001;
  cube2.rotation.y += 0.001;
  cube3.rotation.x += 0.001;
  cube3.rotation.y += 0.001;
	particleSystem.rotation.y += 0.001;
	renderer.render( scene, camera );
}
animate();