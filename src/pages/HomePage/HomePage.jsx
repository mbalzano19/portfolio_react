import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";
import Stats from "three/examples/jsm/libs/stats.module.js";
import { FirstPersonControls } from "three/examples/jsm/controls/FirstPersonControls.js";
import "./HomePage.css";

export default function HomePage(props) {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  useEffect(() => {
    let camera, controls, scene, renderer, stats;
    let mesh, geometry, material, clock;

    function init() {
      camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        1,
        20000
      );
      camera.position.y = 200;

      clock = new THREE.Clock();

      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x3195C5);
      scene.fog = new THREE.FogExp2(0x3195C5, 0.0007);

      geometry = new THREE.PlaneGeometry(20000, 20000, 128, 128);
      geometry.rotateX(-Math.PI / 2);

      const position = geometry.attributes.position;
      position.usage = THREE.DynamicDrawUsage;

      for (let i = 0; i < position.count; i++) {
        const y = 35 * Math.sin(i / 2);
        position.setY(i, y);
      }

      const texture = new THREE.TextureLoader().load(
        "textures/water.jpg"
      );
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(5, 5);
      texture.encoding = THREE.sRGBEncoding;

      material = new THREE.MeshBasicMaterial({ color: 0x0044ff, map: texture });

      mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current.appendChild(renderer.domElement);

      controls = new FirstPersonControls(camera, renderer.domElement);

      controls.movementSpeed = 500;
      controls.lookSpeed = 0.1;

      // stats = new Stats();
      // document.body.appendChild(stats.dom);

      window.addEventListener("resize", onWindowResize);
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      controls.handleResize();
    }

    function animate() {
      requestAnimationFrame(animate);
      render();
      // stats.update();
    }

    function render() {
      const delta = clock.getDelta();
      const time = clock.getElapsedTime() * 10;

      const position = geometry.attributes.position;

      for (let i = 0; i < position.count; i++) {
        const y = 35 * Math.sin(i / 5 + (time + i) / 7);
        position.setY(i, y);
      }

      position.needsUpdate = true;

      controls.update(delta);
      renderer.render(scene, camera);
    }

    init();
    animate();

    const isUserSignedIn = props.user !== null;

    if (isUserSignedIn) {
      navigate("/");
    }
  }, [props.user, navigate]);

  const handleSignIn = (evt) => {
    evt.preventDefault();
    const defaultUsername = "Guest";
    props.setUser(defaultUsername);
    navigate("/bio");
  };

  return (
    <div className="full-screen-container">
      <div className="login-container">
        <h3 className="login-title">Welcome!</h3>
        <button onClick={handleSignIn} className="login-button hover:scale-105">
          Enter
        </button>
      </div>
      <div ref={containerRef} className="threejs-container" />
    </div>
  );
}
