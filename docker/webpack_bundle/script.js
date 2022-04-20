window.$ = window.jquery = require('jquery')
let { func1, func2 } = require('./script2')
let THREE = require('three')


$(document).ready(function () {
    $('canvas').css($(window).width() - 200)


    var camera, scene, renderer;
    var geometry, material, mesh;


    init();
    animate();

    function init() {

        camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
        camera.position.z = 1;

        scene = new THREE.Scene();

        geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
        material = new THREE.MeshNormalMaterial();

        mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        renderer = new THREE.WebGLRenderer({ antialias: false });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

    }

    function animate() {

        requestAnimationFrame(animate);

        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.02;

        renderer.render(scene, camera);

    }



    console.log(func1('texto passado por função importada no require e webpack'))
    console.log(func2(5))
    $('h2').css('margin', '0');
    $('p').css({ margin: '0', color: 'blue' });
    $('.div1').css({ 'margin-bottom': '20px', background: '#ccc' });
    //filhas
    $('.div1 span').hide(5000)
        .delay('5000')
        .fadeIn(1000)
        .css({ 'color': 'green', 'font-size': '15px' });
    $('.div1 h2').hide()
        .css({ 'font-size': '50px', 'color': 'red' })
        .fadeIn(8000);
    $('.div1 > span').css({ color: 'red' });
    //primeiro elemento
    $('.p1 + p').css({ 'font-size': '25px' });
    $('.p1 ~ p').css({ 'font-size': '25px', 'color': 'black' });
    $('h2').click(function () {
        $('.div1 h2').hide()
            .delay('500')
            .fadeIn(800);
    });
});