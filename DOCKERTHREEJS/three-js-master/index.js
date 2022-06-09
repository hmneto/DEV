// let THREE = require('three')
window.$ = window.jquery = require('jquery')

THREE.MTLLoader = require('./MTLLoader')
THREE.OBJLoader = require('./OBJLoader')





let cena, camera, render, malha, chao, clock

let keyboard = {}

let loadingScreen = {
	scene: new THREE.Scene(),
	camera: new THREE.PerspectiveCamera(1000, window.innerWidth / window.innerHeight, 0.1, 100),
	box: new THREE.Mesh(
		new THREE.BoxGeometry(1, 1, 1),
		new THREE.MeshBasicMaterial({ color: 0x4444ff })
	)
}



let player = {
	height: 1.8,
	speed: 0.1,
	turnSpeed: Math.PI * 0.01
}

$(function () {
	init()
})

var RESOURCES_LOADED = false

let models = {
	tent: {
		obj: 'Models/Tent_Poles_01.obj',
		mtl: 'Models/Tent_Poles_01.mtl',
		mesh: null
	},
	campfire: {
		obj: 'Models/Campfire_01.obj',
		mtl: 'Models/Campfire_01.mtl',
		mesh: null
	},
	pirateship: {
		obj: 'Models/Pirateship.obj',
		mtl: 'Models/Pirateship.mtl',
		mesh: null
	},
	uzi: {
		obj: 'Models/uziGold.obj',
		mtl: 'Models/uziGold.mtl',
		mesh: null,
		castShadow: false
	}
}
let loadingManager = new THREE.LoadingManager()
for (var _key in models) {
	(function (key) {


		var mtLoader = new THREE.MTLLoader(loadingManager)
		mtLoader.load(models[key].mtl, function (materials) {
			materials.preload()

			var objLoader = new THREE.OBJLoader(loadingManager)
			objLoader.setMaterials(materials)
			objLoader.load(models[key].obj, function (aaa) {
				aaa.traverse(function (node) {
					if (node instanceof THREE.Mesh) {
						if ('castShadow' in models[key])
							node.castShadow = models[key].castShadow
						else
							node.castShadow = true

						if ('receiveShadow' in models[key])
							node.receiveShadow = models[key].receiveShadow
						else
							node.receiveShadow = true
					}
				})

				models[key].mesh = aaa
			})
		})
	})(_key)
}




function init() {
	var USE_WIREFRAME = false
	cena = new THREE.Scene()
	camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000)

	clock = new THREE.Clock()
	loadingScreen.box.position.set(0, 0, 5)
	loadingScreen.camera.lookAt(loadingScreen.box.position)
	loadingScreen.scene.add(loadingScreen.box)


	loadingManager.onProgress = function (item, load, total) {
		// console.log(item, load, total)
	}

	loadingManager.onLoad = function () {
		// console.log('loaded all resources ')
		RESOURCES_LOADED = true
		onResourcesLoaded()
	}


	malha = new THREE.Mesh(
		new THREE.BoxGeometry(1, 1, 1),
		new THREE.MeshPhongMaterial({ color: 0xff9999, wireframe: USE_WIREFRAME })
	)

	malha.receiveShadow = true
	malha.castShadow = true

	malha.position.y += 1
	cena.add(malha)




	crate = new THREE.Mesh(
		new THREE.BoxGeometry(3, 3, 3),
		new THREE.MeshPhongMaterial({
			color: 0xffffff,
			map: new THREE.TextureLoader(loadingManager).load('crate0/crate0_diffuse.png'),
			bumpMap: new THREE.TextureLoader(loadingManager).load('crate0/crate0_bump.png'),
			normalMap: new THREE.TextureLoader(loadingManager).load('crate0/crate0_normal.png')
		})
	)
	crate.receiveShadow = true
	crate.castShadow = true
	cena.add(crate)

	crate.position.set(2.5, 3 / 2, 2.5)
	// var textureLoader = 
	// let crateTexture = new


	/*
var mtLoader = new THREE.MTLLoader(loadingManager)
mtLoader.load('Models/Tent_Poles_01.mtl', function (materials) {
	materials.preload()

	var objLoader = new THREE.OBJLoader(loadingManager)
	objLoader.setMaterials(materials)
	objLoader.load('Models/Tent_Poles_01.obj', function (meshh) {
		meshh.traverse(function (node) {
			if (node instanceof THREE.Mesh) {
				node.castShadow = true	
				node.receiveShadow = true
			}
		})
		cena.add(meshh)
		meshh.position.set(-6, 0, 4)
		meshh.rotation.y = -Math.PI / 4
	})
})
*/




	// MeshBasicMaterial
	chao = new THREE.Mesh(
		new THREE.PlaneGeometry(20, 20, 10, 10),
		new THREE.MeshLambertMaterial({ color: 0xffffff, wireframe: USE_WIREFRAME })
	)
	chao.rotation.x -= Math.PI / 2
	chao.receiveShadow = true

	cena.add(chao)

	luzAmbiente = new THREE.AmbientLight(0xffffff, 0.2)
	cena.add(luzAmbiente)

	luz = new THREE.PointLight(0xffffff, 0.8, 18)
	luz.position.set(-3, 6, -3)
	luz.castShadow = true
	luz.shadow.camera.near = 0.1
	luz.shadow.camera.far = 25
	cena.add(luz)



	camera.position.set(0, player.height, -3)
	camera.lookAt(new THREE.Vector3(0, player.height, 0))

	render = new THREE.WebGLRenderer({ antialias: true })
	render.shadowMap.enabled = true
	render.shadowMap.type = THREE.BasicShadowMap
	render.setSize(window.innerWidth - 100, window.innerHeight - 100)


	// $('body').append(render.domElement)
	document.body.appendChild(render.domElement)
	animate()
}

var meshes = {}


function onResourcesLoaded() {
	meshes['tent1'] = models['tent'].mesh.clone()
	meshes['tent2'] = models.tent.mesh.clone()
	meshes['campfire1'] = models.campfire.mesh.clone()
	meshes['campfire2'] = models.campfire.mesh.clone()
	meshes['pirateship'] = models.pirateship.mesh.clone()

	meshes['tent1'].position.set(-6, 0, 4)
	meshes['tent2'].position.set(-2, 0, 4)


	meshes['tent2'].rotation.y = Math.PI / 4
	meshes['tent1'].rotation.y = Math.PI / 4

	cena.add(meshes['tent1'])
	cena.add(meshes['tent2'])

	meshes['campfire1'].position.set(-7.7, 0, 2.5)
	meshes['campfire2'].position.set(-3.7, 0, 2.5)
	cena.add(meshes['campfire1'])
	cena.add(meshes['campfire2'])


	meshes['pirateship'].position.set(-10, 0, 0)
	meshes.pirateship.rotation.set(0, Math.PI, 0)
	cena.add(meshes['pirateship'])

	meshes['gun'] = models.uzi.mesh.clone()
	meshes['gun'].position.set(0, 1, 0)
	meshes['gun'].scale.set(10, 10, 10)

	cena.add(meshes['gun'])

}


function animate() {


	if (RESOURCES_LOADED == false) {
		requestAnimationFrame(animate)

		loadingScreen.box.position.x -= 0.05
		if (loadingScreen.box.position.x < -10) loadingScreen.box.position.x = 10
		loadingScreen.box.position.y = Math.sin(loadingScreen.box.position.x)
		// console.log(loadingScreen.box.position.y)


		render.render(loadingScreen.scene, loadingScreen.camera)
		return
	}

	var time = Date.now() * 0.0005
	var delta = clock.getDelta()


	requestAnimationFrame(animate)
	malha.rotation.x += 0.01
	malha.rotation.y += 0.01
	// meshes['pirateship'].rotation.z += 0.01

	if (keyboard[83]) { // w

		camera.position.x += Math.sin(camera.rotation.y) * player.speed
		camera.position.z += -Math.cos(camera.rotation.y) * player.speed
		// console.log('camera eixo x ' + camera.position.x)
		// console.log('camera eixo z ' + camera.position.z)
		// console.log('camera eixo y ' + camera.position.y)
	}

	if (keyboard[87]) { // s
		camera.position.x -= Math.sin(camera.rotation.y) * player.speed
		camera.position.z -= -Math.cos(camera.rotation.y) * player.speed
		// console.log('camera eixo x ' + camera.position.x)
		// console.log('camera eixo z ' + camera.position.z)
		// console.log('camera eixo y ' + camera.position.y)
	}



	if (keyboard[65]) { // a
		camera.position.x += Math.sin(camera.rotation.y + Math.PI / 2) * player.speed
		camera.position.z += -Math.cos(camera.rotation.y + Math.PI / 2) * player.speed
		// console.log('camera eixo x ' + camera.position.x)
		// console.log('camera eixo z ' + camera.position.z)
		// console.log('camera eixo y ' + camera.position.y)
	}

	if (keyboard[68]) { // d
		camera.position.x += Math.sin(camera.rotation.y - Math.PI / 2) * player.speed
		camera.position.z += -Math.cos(camera.rotation.y - Math.PI / 2) * player.speed
		// console.log('camera eixo x ' + camera.position.x)
		// console.log('camera eixo z ' + camera.position.z)
		// console.log('camera eixo y ' + camera.position.y)
	}


	if (keyboard[37]) { // left
		camera.rotation.y -= player.turnSpeed
	}

	if (keyboard[39]) { // right
		camera.rotation.y += player.turnSpeed
	}


	meshes['gun'].position.set(
		camera.position.x - Math.sin(camera.rotation.y + Math.PI / 6) * 0.75,
		camera.position.y - 0.5 + Math.sin(time*4+camera.position.x+camera.position.z) * 0.01,
		camera.position.z + Math.cos(camera.rotation.y + Math.PI / 6) * 0.75
	)


	meshes['gun'].rotation.set(
		camera.rotation.x,
		camera.rotation.y - Math.PI,
		camera.rotation.z
	)


	render.render(cena, camera)
}

function keyDown(evt) {
	keyboard[evt.keyCode] = true
}

function keyUp(evt) {
	keyboard[evt.keyCode] = false
}

window.addEventListener('keydown', keyDown)
window.addEventListener('keyup', keyUp)