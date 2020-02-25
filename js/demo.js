var width = window.innerWidth;
var height = window.innerHeight;
var viewAngle = 45;
var nearClipping = 0.1;
var farClipping = 9999;
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( viewAngle, width / height, nearClipping, farClipping );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( width, height );
document.body.appendChild( renderer.domElement );

//Create objects
var cubeGeometry = new THREE.BoxGeometry( 1, 1, 1 );
var cubeMaterial = new THREE.MeshLambertMaterial( { color: 0xff0000 } );
var cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
var coneGeometry = new THREE.ConeGeometry( 0.5, 1, 4 );
var coneMaterial = new THREE.MeshLambertMaterial( {color: 0x00ff00} );
var cone = new THREE.Mesh( coneGeometry, coneMaterial );
var sphereGeometry = new THREE.SphereGeometry( 0.5, 8, 8 );
var sphereMaterial = new THREE.MeshLambertMaterial( { color: 0x0000ff } );
var sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );

//Give objects positions (default is origin) and add to scene
cube.position.x = -2
cube.position.z = -5;
cone.position.z = -5;
sphere.position.z = -5;
sphere.position.x = 2;
cube.position.z = -5;
scene.add(cube);
scene.add(cone);
scene.add(sphere);

function animate() {
  requestAnimationFrame( animate );
  renderer.render( scene, camera );
}
animate();