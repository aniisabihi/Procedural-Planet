var scene = new THREE.Scene();
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var ratio = window.innerWidth/window.innerHeight;
var camera = new THREE.PerspectiveCamera(45, ratio, 1, 1000);
camera.position.z = 5;
camera.position.y = 2;
camera.lookAt(new THREE.Vector3(0, 0, 0));
//var controls = new THREE.OrbitControls( camera ); //Give user control of camera

//Adding cube to scene
var geometry = new THREE.SphereGeometry(1,32,32);
var material = new THREE.MeshPhongMaterial( { color: 0x8F5706 } );
var cube = new THREE.Mesh( geometry, material );
cube.overdraw = true;
scene.add( cube );

//Adding directional light to scene
var light = new THREE.DirectionalLight(0xFFFFFF, 1);
var lightAngle = 0;
light.position.set(0, 1, 0.5);
scene.add(light);


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
	renderer.render( scene, camera );
}
animate();