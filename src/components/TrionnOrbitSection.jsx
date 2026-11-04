import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

export default function TrionnOrbitSection() {
  const spacerRef = useRef(null);
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const titleBoxRef = useRef(null);
  const slatsRef = useRef([]);
  const [pinDistance, setPinDistance] = useState(5500);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const canvas = canvasRef.current;
    const section = sectionRef.current;
    const spacer = spacerRef.current;
    const titleBox = titleBoxRef.current;
    if (!canvas || !section || !spacer) return;

    const isMobile = () => window.innerWidth < 768;
    const isTablet = () => window.innerWidth >= 768 && window.innerWidth < 1200;
    const getColumns = () => (isMobile() ? 2 : 3);
    const getCamDist = () => (isMobile() ? 28 : isTablet() ? 24 : 22);
    const getFov = () => (isMobile() ? 58 : isTablet() ? 54 : 52);
    const cardAspect = 568 / 812;

    // Authentic Trionn Mathematical Flight Constants
    const getEw = () => (isMobile() ? 3.0 : 5.0);
    const getEv = () => getEw() + 1.5; // 6.5 desktop, 4.5 mobile
    const getEx = () => getEw() / getEv(); // 5 / 6.5 = 0.76923 desktop

    // Balanced scroll runway for full bottom-to-top flight
    const calcPinDist = () => {
      const h = window.innerHeight;
      const dist = Math.round(h * getEv());
      setPinDistance(dist);
      return dist;
    };

    let currentPinDist = calcPinDist();

    const imagePaths = [
      '/images/orbit/orbit-09.jpg',
      '/images/orbit/orbit-08.jpg',
      '/images/orbit/orbit-07.jpg',
      '/images/orbit/orbit-06.jpg',
      '/images/orbit/orbit-05.jpg',
      '/images/orbit/orbit-04.jpg',
      '/images/orbit/orbit-03.jpg',
      '/images/orbit/orbit-02.jpg',
      '/images/orbit/orbit-01.jpg'
    ];

    const vLength = (imagePaths.length - 1) * 6.2 + 5.8;
    const bCurve = 28 / (2 * Math.PI * 2);
    const xCurve = Math.sqrt(144 + bCurve * bCurve);
    const yCurve = 2 * Math.PI * 2 * xCurve;

    // Renderer setup
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      });
    } catch (e) {
      console.warn('WebGL init failed:', e);
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();

    function calcCardWidth() {
      const e = Math.tan((getFov() * Math.PI) / 180 / 2) * getCamDist();
      const t = e * (window.innerWidth / window.innerHeight);
      const cols = getColumns();
      const rows = isMobile() ? 3 : 2;
      const isLarge = window.innerWidth >= 1440;
      const s = isMobile() ? 0.18 : isTablet() ? 0.28 : isLarge ? 0.5 : 0.38;
      const c = isMobile() ? 0.22 : isTablet() ? 0.36 : isLarge ? 0.7 : 0.55;
      return Math.min(
        (2 * t * (isMobile() ? 0.88 : isTablet() ? 0.84 : isLarge ? 0.78 : 0.8) - (cols - 1) * s) / cols,
        (2 * e * (isMobile() || isTablet() ? 0.82 : isLarge ? 0.78 : 0.8) - (rows - 1) * c) / rows / cardAspect,
        isMobile() ? 99 : isTablet() ? 8.5 : 9.2
      );
    }

    const camera = new THREE.PerspectiveCamera(getFov(), window.innerWidth / window.innerHeight, 0.1, 500);
    camera.position.set(0, 0, getCamDist());
    camera.lookAt(0, 0, 0);

    const textureLoader = new THREE.TextureLoader();
    const totalToLoad = imagePaths.length + 6;
    let loadedCount = 0;
    let initialCompileDone = false;

    const onTextureLoad = () => {
      loadedCount++;
      if (loadedCount === totalToLoad && !initialCompileDone) {
        precompileScene();
      }
    };

    const loadTex = (url) => {
      const tex = textureLoader.load(url, onTextureLoad);
      tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
      tex.generateMipmaps = false;
      return tex;
    };

    const orbitTextures = imagePaths.map(loadTex);
    const gridTextures = [
      loadTex('/images/orbit/orbit-01.jpg'),
      loadTex('/images/orbit/orbit-02.jpg'),
      loadTex('/images/orbit/orbit-05.jpg'),
      loadTex('/images/orbit/orbit-03.jpg'),
      loadTex('/images/orbit/orbit-08.jpg'),
      loadTex('/images/orbit/orbit-07.jpg')
    ];

    let gridMeshes = [];

    function rebuildGridMeshes() {
      gridMeshes.forEach((m) => scene.remove(m));
      gridMeshes = [];

      const cardW = calcCardWidth();
      const cardH = cardW * cardAspect;
      const fovRad = (getFov() * Math.PI) / 180;
      const nScale = window.innerHeight / (2 * Math.tan(fovRad / 2) * getCamDist());
      const uW = cardW * nScale;
      const uH = cardH * nScale;

      const fragShader = `
        uniform sampler2D map;
        uniform vec2 uSize;
        uniform float uRadius;
        varying vec2 vUv;
        void main(){
          vec2 pxPos = (vUv - 0.5) * uSize;
          vec2 halfSize = uSize * 0.5;
          vec2 q = abs(pxPos) - halfSize + uRadius;
          float dist = min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - uRadius;
          float alpha = 1.0 - smoothstep(-0.5, 0.5, dist);
          if (alpha <= 0.0) discard;
          vec4 col = texture2D(map, vUv);
          gl_FragColor = vec4(col.rgb, col.a * alpha);
        }
      `;

      gridTextures.forEach((tex) => {
        const geom = new THREE.PlaneGeometry(cardW, cardH, 20, 12);
        const mat = new THREE.ShaderMaterial({
          uniforms: {
            map: { value: tex },
            uSize: { value: new THREE.Vector2(uW, uH) },
            uRadius: { value: 8 }
          },
          vertexShader: `
            varying vec2 vUv;
            void main(){
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,
          fragmentShader: fragShader,
          side: THREE.DoubleSide,
          transparent: true
        });

        const mesh = new THREE.Mesh(geom, mat);
        mesh.visible = false;
        mesh.renderOrder = 3;
        mesh.frustumCulled = false;

        const posArr = geom.attributes.position.array;
        const count = posArr.length / 3;
        const rx = new Float32Array(count);
        const ry = new Float32Array(count);
        for (let i = 0; i < count; i++) {
          rx[i] = posArr[3 * i];
          ry[i] = posArr[3 * i + 1];
        }

        mesh.userData = {
          restX: rx,
          restY: ry,
          wave: 1,
          waveT: 0,
          hoverScale: 1
        };

        scene.add(mesh);
        gridMeshes.push(mesh);
      });
    }

    function applyWaveDeform(mesh, waveWeight, waveTime, index) {
      const pos = mesh.geometry.attributes.position;
      const { restX, restY } = mesh.userData;
      const sW = curCardW;
      const sH = curCardH;
      const cols = curCols;
      const colIdx = index % cols;
      const rowIdx = Math.floor(index / cols);
      const isMiddle = colIdx > 0 && colIdx < cols - 1;

      for (let i = 0; i < pos.count; i++) {
        let n;
        const cX = restX[i];
        const hY = restY[i];
        if (isMiddle) {
          n = 1 - (hY / sH + 0.5);
        } else {
          const e = cX / sW + 0.5;
          const t = 1 - (hY / sH + 0.5);
          n = colIdx === 0 ? (rowIdx === 0 ? e + t : e + 1 - t) * 0.5 : (rowIdx === 0 ? 1 - e + t : 1 - e + 1 - t) * 0.5;
        }
        pos.setXYZ(i, cX, hY, waveWeight * n * Math.sin(n * Math.PI * 0.9 - 2 * waveTime) * sW * 0.12);
      }
      pos.needsUpdate = true;
    }

    let curCardW = 0;
    let curCardH = 0;
    let curCols = 3;

    const updateGeometryParams = () => {
      curCardW = calcCardWidth();
      curCardH = curCardW * cardAspect;
      curCols = getColumns();
    };

    updateGeometryParams();

    const spiralO = 5.8 * cardAspect;
    const spiralV = 2 * Math.PI;

    const curvePoint = (theta) => {
      const t = (theta - spiralV) / 2;
      return new THREE.Vector3(
        12 * Math.cos(theta),
        -16 + theta * bCurve - 2.5 * Math.exp(-t * t),
        12 * Math.sin(theta)
      );
    };

    const curveTangent = (theta) => {
      const t = (theta - spiralV) / 2;
      const r = (-2 * t / 2) * 2.5 * Math.exp(-t * t);
      return new THREE.Vector3(
        -12 * Math.sin(theta),
        bCurve - r,
        12 * Math.cos(theta)
      ).normalize();
    };

    // Ribbon guide lines
    const linePointsLeft = [];
    const linePointsRight = [];
    {
      const fovRad = (getFov() * Math.PI) / 180;
      const tOffset = 0.5 * spiralO + (4 / window.innerHeight) * 2 * Math.tan(fovRad / 2) * getCamDist() + 0.12 * spiralO;
      for (let i = 0; i <= 600; i++) {
        const theta = (i / 600) * 2 * Math.PI * 2;
        const pt = curvePoint(theta);
        const norm = new THREE.Vector3().crossVectors(curveTangent(theta), new THREE.Vector3(Math.cos(theta), 0, Math.sin(theta))).normalize();
        norm.y += 0.6;
        norm.normalize();
        linePointsLeft.push(new THREE.Vector3(pt.x + norm.x * tOffset, pt.y + norm.y * tOffset, pt.z + norm.z * tOffset));
        linePointsRight.push(new THREE.Vector3(pt.x - norm.x * tOffset, pt.y - norm.y * tOffset, pt.z - norm.z * tOffset));
      }
    }

    const railLeftRev = [...linePointsLeft].reverse();
    const railRightRev = [...linePointsRight].reverse();

    {
      const fovRad = (getFov() * Math.PI) / 180;
      const eHeight = Math.tan(fovRad / 2) * getCamDist();
      const p0 = railRightRev[0];
      const p1 = railRightRev[1];
      const dx = p0.x - p1.x;
      const dy = p0.y - p1.y;
      const dz = p0.z - p1.z;
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz) || 1;
      const sx = dx / dist;
      const sy = dy / dist;
      const sz = dz / dist;
      const leadDist = (eHeight - p0.y) / (sy || 1);
      const leadPts = [];
      for (let i = 20; i >= 1; i--) {
        const step = (i / 20) * leadDist;
        leadPts.push(new THREE.Vector3(p0.x + sx * step, p0.y + sy * step, p0.z + sz * step));
      }
      railRightRev.unshift(...leadPts);
    }

    const railK = Math.floor(86.8);
    const railLineWidth = isMobile() ? 1 : 2;
    const railMat1 = new THREE.LineBasicMaterial({ color: '#9E9E9E', linewidth: railLineWidth });
    const railMat2 = new THREE.LineBasicMaterial({ color: '#9E9E9E', linewidth: railLineWidth });

    const railGeom1 = new THREE.BufferGeometry().setFromPoints(railLeftRev);
    const railGeom2 = new THREE.BufferGeometry().setFromPoints(railRightRev);
    railGeom1.setDrawRange(0, 0);
    railGeom2.setDrawRange(0, 0);

    const railLine1 = new THREE.Line(railGeom1, railMat1);
    const railLine2 = new THREE.Line(railGeom2, railMat2);
    railLine1.renderOrder = 5;
    railLine1.frustumCulled = false;
    railLine2.renderOrder = 5;
    railLine2.frustumCulled = false;
    scene.add(railLine1);
    scene.add(railLine2);

    function genHorizontalLinePts(yPos, reverse = false) {
      const fovRad = (getFov() * Math.PI) / 180;
      const halfW = Math.tan(fovRad / 2) * getCamDist() * (window.innerWidth / window.innerHeight);
      const margin = isMobile() ? 0 : halfW * (80 / window.innerWidth);
      const left = -halfW + margin;
      const right = halfW - margin;
      const pts = [];
      for (let i = 0; i <= 600; i++) {
        const n = i / 600;
        pts.push(new THREE.Vector3(reverse ? right - n * (right - left) : left + n * (right - left), yPos, 0));
      }
      return pts;
    }

    const horizGeom1 = new THREE.BufferGeometry().setFromPoints(genHorizontalLinePts(0));
    const horizGeom2 = new THREE.BufferGeometry().setFromPoints(genHorizontalLinePts(0));
    horizGeom1.setDrawRange(0, 0);
    horizGeom2.setDrawRange(0, 0);

    const horizMat1 = new THREE.LineBasicMaterial({ color: '#9E9E9E', transparent: true, opacity: 1 });
    const horizMat2 = new THREE.LineBasicMaterial({ color: '#9E9E9E', transparent: true, opacity: 1 });
    const horizLine1 = new THREE.Line(horizGeom1, horizMat1);
    const horizLine2 = new THREE.Line(horizGeom2, horizMat2);
    horizLine1.renderOrder = 5;
    horizLine1.frustumCulled = false;
    horizLine2.renderOrder = 5;
    horizLine2.frustumCulled = false;
    scene.add(horizLine1);
    scene.add(horizLine2);

    let horizDrawn = false;

    // 9 Deformable Spiral Card Meshes
    const spiralMeshes = orbitTextures.map((tex) => {
      const geom = new THREE.PlaneGeometry(1, 1, 116, 1);
      const mat = new THREE.ShaderMaterial({
        uniforms: { map: { value: tex } },
        vertexShader: `
          varying vec2 vUv;
          void main(){
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform sampler2D map;
          varying vec2 vUv;
          void main(){
            vec2 uv = vUv;
            if (gl_FrontFacing) uv.x = 1.0 - uv.x;
            gl_FragColor = texture2D(map, uv);
          }
        `,
        side: THREE.DoubleSide
      });

      const mesh = new THREE.Mesh(geom, mat);
      mesh.visible = false;
      mesh.renderOrder = 1;
      mesh.frustumCulled = false;
      mesh.geometry.boundingBox = new THREE.Box3(new THREE.Vector3(-1000, -1000, -1000), new THREE.Vector3(1000, 1000, 1000));
      mesh.geometry.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 0, 0), 1000);
      scene.add(mesh);
      return mesh;
    });

    rebuildGridMeshes();

    const precompileScene = () => {
      const spVis = spiralMeshes.map((m) => m.visible);
      const grVis = gridMeshes.map((m) => m.visible);
      spiralMeshes.forEach((m) => (m.visible = true));
      gridMeshes.forEach((m) => (m.visible = true));
      renderer.compile(scene, camera);
      renderer.render(scene, camera);
      spiralMeshes.forEach((m, idx) => (m.visible = spVis[idx]));
      gridMeshes.forEach((m, idx) => (m.visible = grVis[idx]));
      renderer.clear();
      initialCompileDone = true;
    };

    precompileScene();

    const numCards = imagePaths.length;
    const cardsSpan = (numCards - 1) * 6.2 + 5.8;
    const eg = ((0.5 * yCurve + cardsSpan + 10) / (yCurve + cardsSpan)) * (400 / 600); // ~0.4537

    // Raycaster for mouse interaction
    const raycaster = new THREE.Raycaster();
    const mouseNorm = new THREE.Vector2();
    let hasPointer = false;

    const onPointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseNorm.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseNorm.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      hasPointer = true;
    };

    const onPointerLeave = () => {
      hasPointer = false;
    };

    section.addEventListener('pointermove', onPointerMove);
    section.addEventListener('pointerleave', onPointerLeave);

    let railDrawn1 = 0;
    let railDrawn2 = 0;
    let smoothProgress = 0;

    function deformSpiralCard(mesh, tCoord, scaleFactor = 1) {
      const pos = mesh.geometry.attributes.position;
      const uv = mesh.geometry.attributes.uv;
      const cardSpan = 5.8 * scaleFactor;
      const cardStart = tCoord + 2.9 - 0.5 * cardSpan;
      const cardH = spiralO * scaleFactor;
      const needsUv = !mesh.userData.uvWritten;

      for (let e = 0; e < 117; e++) {
        const uStep = e / 116;
        const angle = (cardStart + uStep * cardSpan) / xCurve;
        const cosA = Math.cos(angle);
        const sinA = Math.sin(angle);
        const distCenter = (angle - spiralV) / 2;
        const gauss = 2.5 * Math.exp(-distCenter * distCenter);

        const ptX = 12 * cosA;
        const ptY = -16 + angle * bCurve - gauss;
        const ptZ = 12 * sinA;

        let tanX = -12 * sinA;
        let tanY = bCurve - ((-2 * distCenter) / 2) * gauss;
        let tanZ = 12 * cosA;
        const tanLen = Math.sqrt(tanX * tanX + tanY * tanY + tanZ * tanZ) || 1;
        tanX /= tanLen;
        tanY /= tanLen;
        tanZ /= tanLen;

        let normX = tanY * sinA;
        let normY = tanZ * cosA - tanX * sinA;
        let normZ = -tanY * cosA;
        let normLen = Math.sqrt(normX * normX + normY * normY + normZ * normZ) || 1;
        normX /= normLen;
        normY /= normLen;
        normZ /= normLen;

        normY += 0.6;
        normLen = Math.sqrt(normX * normX + normY * normY + normZ * normZ) || 1;
        normX /= normLen;
        normY /= normLen;
        normZ /= normLen;

        for (let r = 0; r < 2; r++) {
          const sideOffset = (r === 0 ? -0.5 : 0.5) * cardH;
          const vIdx = 117 * r + e;
          pos.setXYZ(vIdx, ptX + normX * sideOffset, ptY + normY * sideOffset, ptZ + normZ * sideOffset);
          if (needsUv) uv.setXY(vIdx, uStep, r);
        }
      }

      pos.needsUpdate = true;
      if (needsUv) {
        uv.needsUpdate = true;
        mesh.userData.uvWritten = true;
      }
      mesh.position.set(0, 0, 0);
      mesh.rotation.set(0, 0, 0);
      mesh.scale.set(1, 1, 1);
    }

    const topWordEl = section.querySelector('.top-word');
    const bottomWordEl = section.querySelector('.bottom-word');
    const subtitleEl = titleBox ? titleBox.querySelector('.title') : null;

    // Rock-solid Ticker Animation Loop
    const onTick = () => {
      const spacerRect = spacer.getBoundingClientRect();
      const currentDist = currentPinDist || 5500;

      // 1. Rock-solid ScrollSmoother Pinning
      if (spacerRect.top <= 0 && spacerRect.bottom >= window.innerHeight) {
        const clampedY = Math.min(-spacerRect.top, currentDist);
        section.style.transform = `translate3d(0, ${clampedY}px, 0)`;
      } else if (spacerRect.top > 0) {
        section.style.transform = 'translate3d(0, 0, 0)';
      } else {
        section.style.transform = `translate3d(0, ${currentDist}px, 0)`;
      }

      // Visibility clipping optimization
      if (spacerRect.bottom < -window.innerHeight || spacerRect.top > window.innerHeight * 2) {
        return;
      }

      const rawProgress = Math.max(0, Math.min(1, -spacerRect.top / currentDist));
      smoothProgress += (rawProgress - smoothProgress) * 0.16;
      const progress = smoothProgress;

      const curEx = getEx();
      const g = Math.min(progress / curEx, 1);
      const w = Math.max(0, Math.min(1, (progress - curEx) / (1 - curEx)));

      // =========================================================================
      // [STAGE 1]: Headings Visible in Center, then Slide & Exit to Left & Right
      // Driven smoothly across g in [0, eg]. Fully cleared at g >= eg so they NEVER overlap 6 cards!
      // =========================================================================
      const headingProg = Math.min(1, g / eg);
      if (titleBox && topWordEl && bottomWordEl) {
        if (headingProg < 1) {
          titleBox.style.display = 'block';
          titleBox.style.visibility = 'visible';
          titleBox.style.opacity = '1';

          // Starts at 0vw (centered), sweeps smoothly outwards as user scrolls
          const topX = headingProg * 115;
          const bottomX = -headingProg * 115;

          topWordEl.style.transform = `translate3d(${topX}vw, 0, 0)`;
          bottomWordEl.style.transform = `translate3d(${bottomX}vw, 0, 0)`;

          // Center subtitle fades out smoothly by headingProg = 0.65
          if (subtitleEl) {
            const subFade = Math.max(0, 1 - headingProg / 0.65);
            subtitleEl.style.opacity = String(subFade);
          }

          // Headings fade out gracefully near the very edges
          const headingFade = headingProg > 0.72 ? Math.max(0, 1 - (headingProg - 0.72) / 0.28) : 1;
          topWordEl.style.opacity = String(headingFade);
          bottomWordEl.style.opacity = String(headingFade);
        } else {
          // Headings have completely cleared the viewport
          titleBox.style.display = 'none';
          titleBox.style.visibility = 'hidden';
          titleBox.style.opacity = '0';
          topWordEl.style.transform = 'translate3d(125vw, 0, 0)';
          bottomWordEl.style.transform = 'translate3d(-125vw, 0, 0)';
          topWordEl.style.opacity = '0';
          bottomWordEl.style.opacity = '0';
          if (subtitleEl) subtitleEl.style.opacity = '0';
        }
      }

      // Dynamic theme sync for guide lines
      const isDark = document.body.classList.contains('dark-theme');
      const guideColor = isDark ? '#444444' : '#9E9E9E';
      railMat1.color.set(guideColor);
      railMat2.color.set(guideColor);
      horizMat1.color.set(guideColor);
      horizMat2.color.set(guideColor);

      // =========================================================================
      // [STAGE 2]: 3D Ribbon Spiral Mesh Orbit (Phase 1)
      // Enters from bottom, flies up through center across text, climbs all the way to top!
      // pScale runs from 0 to 1 as g goes from 0 to 400/600 (0.6667)
      // =========================================================================
      const pScale = Math.min(1, g / (400 / 600));

      if (pScale < 1) {
        const targetT1 = pScale * (601 + railK);
        const targetT2 = pScale * (621 + railK);
        railDrawn1 += (targetT1 - railDrawn1) * 0.18;
        railDrawn2 += (targetT2 - railDrawn2) * 0.18;

        const c1 = Math.floor(railDrawn1);
        const f1 = Math.max(0, c1 - railK);
        railGeom1.setDrawRange(f1, Math.max(0, Math.min(c1, 601) - f1 + 1));

        const c2 = Math.floor(railDrawn2);
        const f2 = Math.max(0, c2 - railK);
        railGeom2.setDrawRange(f2, Math.max(0, Math.min(c2, 621) - f2 + 1));
        railLine1.visible = true;
        railLine2.visible = true;

        const baseOffset = pScale * (yCurve + cardsSpan) - cardsSpan + 25;
        for (let i = 0; i < numCards; i++) {
          const tCoord = baseOffset + 6.2 * i;
          const isVis = tCoord > 0 && tCoord < yCurve;
          spiralMeshes[i].visible = isVis;

          if (isVis) {
            const hoverSc = spiralMeshes[i].userData.hoverScale ?? 1;
            deformSpiralCard(spiralMeshes[i], Math.min(tCoord, yCurve - 0.001), hoverSc);
          }
        }
      } else {
        // Hide spiral elements when ribbon flight completes and exits off top
        railLine1.visible = false;
        railLine2.visible = false;
        for (let i = 0; i < numCards; i++) {
          spiralMeshes[i].visible = false;
        }
      }

      // =========================================================================
      // [STAGE 3]: 6 Grid Images Flying in 1, 1 (One-by-One) Sequentially!
      // Starts at g = eg right as headings clear. Zero dead gap!
      // =========================================================================
      const H = Math.max(0, Math.min(1, (g - eg) / (1 - eg)));

      // Draw horizontal dividing line
      if (H > 0) {
        if (!horizDrawn) {
          const rows = isMobile() ? 3 : 2;
          const isLarge = window.innerWidth >= 1440;
          const gapY = isMobile() ? 0.22 : isTablet() ? 0.36 : isLarge ? 0.7 : 0.55;
          const gridH = calcCardWidth() * cardAspect;
          const totalSpan = rows * gridH + (rows - 1) * gapY;
          if (isMobile()) {
            horizGeom1.setFromPoints(genHorizontalLinePts(0.5 * totalSpan - gridH - 0.5 * gapY, false));
            horizGeom2.setFromPoints(genHorizontalLinePts(0.5 * totalSpan - 2 * gridH - 1.5 * gapY, true));
          } else {
            horizGeom1.setFromPoints(genHorizontalLinePts(0, false));
            horizGeom2.setFromPoints(genHorizontalLinePts(0, false));
          }
          horizLine1.visible = true;
          horizLine2.visible = true;
          horizDrawn = true;
        }

        const drawP = 1 - Math.pow(1 - Math.max(0, Math.min(1, (H - 0.2) / 0.8)), 2.5);
        horizGeom1.setDrawRange(0, Math.round(600 * drawP));
        if (isMobile()) {
          const drawP2 = Math.max(0, Math.min(1, (H - 0.28) / 0.72));
          horizGeom2.setDrawRange(0, Math.round((1 - Math.pow(1 - drawP2, 2.5)) * 600));
        } else {
          horizGeom2.setDrawRange(0, 0);
        }
      } else {
        horizLine1.visible = false;
        horizLine2.visible = false;
        horizDrawn = false;
      }

      const camHalfH = Math.tan(((getFov() * Math.PI) / 180) / 2) * camera.position.z;
      const camHalfW = camHalfH * camera.aspect;
      const cW = curCardW;
      const cH = curCardH;
      const cCols = curCols;
      const isLarge = window.innerWidth >= 1440;
      const gapX = isMobile() ? 0.18 : isTablet() ? 0.28 : isLarge ? 0.5 : 0.38;
      const gapY = isMobile() ? 0.22 : isTablet() ? 0.36 : isLarge ? 0.7 : 0.55;

      // Sequential One-by-One Stagger (1, 1 entrance matching trionn.com):
      const cardStagger = 0.08;
      const cardFlyDuration = 0.40;

      for (let i = 0; i < 6; i++) {
        const mesh = gridMeshes[i];
        if (!mesh) continue;

        const cardProg = Math.max(0, Math.min(1, (H - cardStagger * i) / cardFlyDuration));

        if (cardProg <= 0 && !mesh.userData.wave) {
          mesh.visible = false;
          continue;
        }
        mesh.visible = true;

        const easeP = 1 - Math.pow(1 - cardProg, 3);
        const colIdx = i % cCols;
        const rowIdx = Math.floor(i / cCols);
        const numRows = isMobile() ? 3 : 2;

        const targetPos = new THREE.Vector3(
          -(0.5 * (cCols * cW + (cCols - 1) * gapX)) + 0.5 * cW + colIdx * (cW + gapX),
          0.5 * (numRows * cH + (numRows - 1) * gapY) - 0.5 * cH - rowIdx * (cH + gapY) - 0.25,
          0
        );

        // Origin directions: Top row comes from above, bottom row comes from below, corners from diagonal
        const startY = rowIdx === 0 ? camHalfH + 2.5 * cH : -camHalfH - 2.5 * cH;
        const startX = colIdx === 0 ? -camHalfW - 2.5 * cW : colIdx === cCols - 1 ? camHalfW + 2.5 * cW : targetPos.x;

        const curX = startX + (targetPos.x - startX) * easeP;
        const curY = startY + (targetPos.y - startY) * easeP;

        // Apply hover scale smoothly
        const hSc = mesh.userData.hoverScale || 1;
        mesh.scale.set(hSc, hSc, 1);
        mesh.position.set(curX, curY, 0);

        // Gentle 3D floating wave motion
        mesh.userData.waveT += 0.02;
        mesh.userData.wave = cardProg < 1 ? Math.min(1, mesh.userData.wave + 0.035) : Math.max(0, mesh.userData.wave - 0.012);

        if (mesh.userData.wave > 0) {
          applyWaveDeform(mesh, mesh.userData.wave, mesh.userData.waveT, i);
          mesh.userData.waveFlat = false;
        } else if (!mesh.userData.waveFlat) {
          applyWaveDeform(mesh, 0, mesh.userData.waveT, i);
          mesh.userData.waveFlat = true;
        }
      }

      // Pointer Raycaster Hover Interaction for Grid Cards
      if (hasPointer && H > 0.4) {
        raycaster.setFromCamera(mouseNorm, camera);
        const visGrid = gridMeshes.filter((m) => m.visible);
        let hoveredMesh = null;
        if (visGrid.length > 0) {
          const hits = raycaster.intersectObjects(visGrid, false);
          if (hits.length > 0) hoveredMesh = hits[0].object;
        }
        for (let i = 0; i < 6; i++) {
          const m = gridMeshes[i];
          if (!m) continue;
          const targetScale = m === hoveredMesh ? 1.08 : 1.0;
          m.userData.hoverScale += (targetScale - m.userData.hoverScale) * 0.15;
        }
      }

      // =========================================================================
      // [STAGE 4]: Venetian Blind Shutter into Dark Footer (Phase 3)
      // Driven by w when progress > curEx. Seamless transition into footer!
      // =========================================================================
      const slats = slatsRef.current.filter(Boolean);
      if (slats.length > 0) {
        const count = slats.length;
        for (let i = 0; i < count; i++) {
          // Bottom slats rise first, followed by upper slats
          const startD = (0.28 * (count - 1 - i)) / (count - 1 || 1);
          const endD = startD + 0.32;
          const slatP = Math.max(0, Math.min(1, (w - startD) / (endD - startD)));
          slats[i].style.transform = `scaleY(${slatP})`;
        }
      }

      renderer.render(scene, camera);
    };

    gsap.ticker.add(onTick);

    const onWindowResize = () => {
      currentPinDist = calcPinDist();
      camera.fov = getFov();
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.position.set(0, 0, getCamDist());
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      updateGeometryParams();
      rebuildGridMeshes();
      horizDrawn = false;
    };

    window.addEventListener('resize', onWindowResize);

    return () => {
      gsap.ticker.remove(onTick);
      window.removeEventListener('resize', onWindowResize);
      section.removeEventListener('pointermove', onPointerMove);
      section.removeEventListener('pointerleave', onPointerLeave);

      renderer.dispose();
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh || obj instanceof THREE.Line) {
          if (obj.geometry) obj.geometry.dispose();
          if (obj.material) {
            if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose());
            else obj.material.dispose();
          }
        }
      });
    };
  }, []);

  return (
    <>
      {/* ==================== [ Trionn Pinned Orbit Section Start ] ==================== */}
      <div
        ref={spacerRef}
        id="dribbble-orbit"
        className="pin-spacer trionn-orbit-spacer relative w-full"
        style={{ paddingBottom: `${pinDistance}px` }}
      >
        <section className="trionn-orbit-section" ref={sectionRef}>
          {/* 1. Behind: Center Marquee Title Block (Layer 1 - z-index: 2) */}
          <div ref={titleBoxRef} className="dribble-title-wrap">
            <div className="dribble-title-inner">
              <h2 className="mrquee-text top-word">Design in</h2>
              <span className="title">
                Exploring ideas through <br /> daily design practice.
              </span>
              <h2 className="mrquee-text bottom-word">motion</h2>
            </div>
          </div>

          {/* 2. Middle: Three.js 3D WebGL Canvas (Layer 2 - z-index: 5: Images orbit ON TOP of text!) */}
          <canvas ref={canvasRef} className="trionn-orbit-canvas" />

          {/* 3. Foreground: Bottom Bar (Layer 3 - z-index: 10) */}
          <div className="orbit-bottom-bar">
            <div className="orbit-bottom-text">
              <p className="small">
                Concepts, explorations, and interface <br />
                experiments shared openly as part of <br />
                our creative process.
              </p>
            </div>

            <div className="orbit-btn-wrap">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="orbit-btn"
                href="https://dribbble.com/trionnstudio"
              >
                <span className="orbit-btn-underline">
                  <span className="u-right" />
                  <span className="u-left" />
                </span>
                <span className="orbit-btn-text">View on Dribbble</span>
                <span className="orbit-btn-arrow">
                  <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5.47372 8.652V6.552L8.32972 3.752V4.9L5.47372 2.1V-3.09944e-06L9.32372 3.836V4.816L5.47372 8.652ZM-0.000281237 5.11V3.542H8.60972V5.11H-0.000281237Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* 4. Top: 5 Venetian Blind Slats for Smooth Wipe into Dark Footer (z-index: 30) */}
          <div className="orbit-curtain-wrap">
            {Array.from({ length: 5 }).map((_, idx) => (
              <div
                key={idx}
                ref={(el) => {
                  if (el) slatsRef.current[idx] = el;
                }}
                className="orbit-curtain-slat"
              />
            ))}
          </div>
        </section>
      </div>
      {/* ==================== [ Trionn Pinned Orbit Section End ] ==================== */}
    </>
  );
}
