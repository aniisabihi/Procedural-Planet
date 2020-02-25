var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var ratio = window.innerWidth/window.innerHeight;
var camera = new THREE.PerspectiveCamera(45, ratio, 1, 1000);
camera.position.z = 5;
camera.position.y = 2;
camera.lookAt(new THREE.Vector3(0, 0, 0));

var scene = new THREE.Scene();
 
var material = new THREE.MeshPhongMaterial({color: 0x00AA00})
var cube = new THREE.Mesh(new THREE.CubeGeometry(1, 1, 1), material);
cube.overdraw = true;
scene.add(cube);
 
var directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1);
directionalLight.position.set(0, 1, 0.5);
scene.add(directionalLight);
 function animate() {
 cube.rotation.y += 0.01;
 renderer.render(scene, camera);
 requestAnimationFrame(animate);
}
 
animate();