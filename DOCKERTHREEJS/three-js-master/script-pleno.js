const init = () => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const render = new THREE.WebGLRenderer()
    render.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(render.domElement)
    const box = new THREE.BoxGeometry(1,1,1)
    const material = new THREE.MeshBasicMaterial({color:0xffff00})
    const cube = new THREE.Mesh(box, material)
    scene.add(cube)
    camera.position.z = 5
    const animate = ()=>{
        requestAnimationFrame(animate)
        render.render(scene, camera)
        cube.rotation.x += 0.01
        cube.rotation.y += 0.01
    }
    animate()
}
window.onload = init