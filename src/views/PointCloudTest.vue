<template>
    <div>
        <div id="container"></div>
    </div>
</template>

<script>
    import * as THREE from 'three';
    import * as Stats from 'stats-js';
    import * as $ from 'jquery'
    import * as _ from 'lodash'
    import * as TrackballControls from 'three-trackballcontrols'

    let container, stats;
    let camera, scene, renderer;
    let particles;
    let loadedData;
    let controls;
    let geometry;

    export default {
        name: "PointCloudTest",
        data() {
            return {
                debug: false
            }
        },
        methods: {
            init: function() {

                container = $("#container");

                // Camera

                this.createCamera();

                // Cloud

                this.createGeometry();

                // World

                this.createWorld();
                scene.add( particles );

                // Renderer

                this.createRenderer();

                // Controls

                this.createControls();

                camera.lookAt(geometry.center());

                this.addingStats(this.debug)

            },
            animate: function() {
                requestAnimationFrame( this.animate );
                this.render();
                controls.update();
                stats.update();
            },
            onWindowResize: function () {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize( window.innerWidth, window.innerHeight );
                controls.handleResize();
                this.render();
            },
            render: function () {
                renderer.render( scene, camera );
            },
            createCamera: function () {
                camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 10000 );
                camera.position.z = 50;
            },
            createWorld: function () {
                scene = new THREE.Scene();
                scene.background = new THREE.Color( 0x777777 );
            },
            createGeometry: function () {
                let positions = new Float32Array( loadedData.length * 3 );
                let colors = new Float32Array( loadedData.length * 3 );
                let scales = new Float32Array( loadedData.length );
                _.forEach(loadedData, function (datum, idx) {
                    datum = datum.split(' ')
                    positions[ 3*idx ] = parseFloat(datum[0]);
                    positions[ 3*idx + 1 ] = parseFloat(datum[1]);
                    positions[ 3*idx + 2 ] = parseFloat(datum[2]);
                    colors[ 3*idx ] = parseFloat(datum[3])/255;
                    colors[ 3*idx + 1 ] = parseFloat(datum[4])/255;
                    colors[ 3*idx + 2 ] = parseFloat(datum[5])/255;
                    scales[ idx ] = 1
                })
                geometry = new THREE.BufferGeometry();
                geometry.addAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );
                geometry.addAttribute( 'color', new THREE.BufferAttribute( colors, 3));
                geometry.addAttribute( 'scale', new THREE.BufferAttribute( scales, 1 ) );
                geometry.rotateX(90)
                let material = new THREE.PointsMaterial({
                    vertexColors: THREE.VertexColors,
                    size: .3
                });
                particles = new THREE.Points( geometry, material );
            },
            createRenderer: function () {
                renderer = new THREE.WebGLRenderer( { antialias: false } );
                renderer.setPixelRatio( window.devicePixelRatio );
                renderer.setSize( window.innerWidth, window.innerHeight );
                container.append( renderer.domElement );
            },
            createControls: function () {
                controls = new TrackballControls( camera, renderer.domElement );
                controls.rotateSpeed = 5.0;
                controls.zoomSpeed = 2;
                controls.panSpeed = 1;
                controls.noZoom = false;
                controls.noPan = true;
                controls.staticMoving = true;
                controls.dynamicDampingFactor = 0.3;
                controls.keys = [ 65, 83, 68 ];
                controls.addEventListener( 'change', this.render );
            },
            addingStats: function (debug = true) {
                stats = new Stats();
                if (debug) {
                    container.append( stats.dom );
                }
                window.addEventListener( 'resize', this.onWindowResize, false );
            },
            loadResult: function (file) {
                $.ajax({
                    type: "GET",
                    url: file,
                    success: function (data) {
                        data = data.split('\n');
                        loadedData = _.slice(data, 14, data.length-2);
                        this.init();
                        this.animate();
                    }.bind(this),
                });
            },
        },
        mounted() {
            let file = 'result_files/s6c.ply';
            this.loadResult(file)
        }
    }
</script>

<style scoped>
    #container {
        width: 100%;
        height: 800px;
    }
</style>