module.exports = function (THREE) {
    return {
        cena: new THREE.Scene(),
        camera: new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000),
        renderer: new THREE.WebGLRenderer({ antialias: true }),
        cubo: new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshNormalMaterial({ colorWrite: true })
        )
    }
}
