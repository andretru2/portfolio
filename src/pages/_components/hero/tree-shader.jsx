"use client";
import React, {
  useRef,
  // useEffect,
  useMemo,
  Suspense,
} from "react";
import {
  // useLoader,
  useFrame,
  Canvas,
  extend,
} from "@react-three/fiber";
import * as THREE from "three";

import { useTexture } from "@react-three/drei";

// import { ShaderMaterial, Vector3 } from "three";
// extend({ planeBufferGeometry });

function Model() {
  const meshRef = useRef();

  const vertexShader = `
    uniform float iTime;
    uniform vec3 iResolution;
    
    varying vec2 vUv;
    
    void main() {
      vUv = uv;
      
      vec3 pos = position;
      
      pos.x += sin(iTime * 0.5) * 0.1;
      pos.y += cos(iTime * 0.3) * 0.1;
      pos.z += sin(iTime * 0.2) * 0.1;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;

  const fragmentShader = `
    uniform vec3 iResolution;
    uniform float iTime;
    varying vec2 vUv;

    #define R iResolution.xy
    #define Main void mainImage(out vec4 Q, in vec2 U)
    #define ei(a) mat2(cos(a),sin(a),-sin(a),cos(a))

    float segment (vec2 p, vec2 a, vec2 b) {
      return length(p-a-(b-a)*clamp(dot(p-a,b-a)/dot(b-a,b-a),0.,1.));
    }

    vec3 hash (vec2 p) {
      vec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973));
      p3 += dot(p3, p3.yxz+33.33);
      return fract((p3.xxy+p3.yzz)*p3.zyx);
    }

    vec3 noise(vec2 p) {
      vec4 w = vec4(
        floor(p),
        ceil (p) );
      vec3
        _00 = hash(w.xy),
        _01 = hash(w.xw),
        _10 = hash(w.zy),
        _11 = hash(w.zw),
        _0 = mix(_00,_01,fract(p.y)),
        _1 = mix(_10,_11,fract(p.y));
      return mix(_0,_1,fract(p.x));
    }

    vec3 fbm (vec2 p) {
      vec3 w = vec3(0);
      float N = 5.;
      for (float i = 1.; i < N; i++) {
        p *= 1.7*ei(.5);
        w += noise(p)/N/i;
      }
      return w;
    }

    Main {
      vec2 U = 2. * (vUv - 0.5 * R) / R.y;
      vec4 Q = vec4(0);
      float d = 1e9;
      U.y -= -1.;
      float r = 0.;
      for (float i = 0.; i < 15.; i++) {
        float s = segment(U, vec2(0), vec2(0, .6));
        d = min(d, s);
        U.y -= .6;
        float h = -.5 + hash(vec2(i, 1. + iTime)).x;
        h = sign(h);
        r += h * exp2(i);
        vec3 f = hash(vec2(r));
        U *= 1.1 + .5 * f.y;
        if (h != 0.)
          U.x = h * U.x;
        U.xy *= ei(-1. + .5 * f.x);
      }
      vec3 hh = hash(vec2(r));
      Q = step(d, .05) * .15 * vec4(4, 3, 2, 1);
      U.y -= -.5;
      U *= .3;
      U = vec2(atan(U.y, U.x), length(U));
      U.x += .1 * fbm(vec2(10. * U.y, round(U.x / 5.))).x;
      U.y += (.5 + .5 * abs(sin(5. * U.x))) * -sin(U.x);
      U.y += .5 * fbm(r + 10. * U.xx).x;
      if (U.y < .5)
        Q = sin(.5 * (hh.x * 2. - 1.) + .5 + U.y + vec4(1, 2, 3, 4));
      if (length(Q) == 0.)
        discard;
      gl_FragColor = Q;
    }
  `;

  const uniforms = useMemo(
    () => ({
      iTime: { value: 0 },
      iResolution: { value: new THREE.Vector3(1, 1, 1) },
    }),
    []
  );

  useFrame(({ clock }) => {
    meshRef.current.material.uniforms.iTime.value =
      clock.getElapsedTime();
    meshRef.current.material.uniforms.iResolution.value.set(
      window.innerWidth,
      window.innerHeight,
      1
    );
  });

  return (
    <mesh ref={meshRef}>
      <planeBufferGeometry
        attach="geometry"
        args={[2, 2]}
      />
      <shaderMaterial
        attach="material"
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

function Test() {
  const vertexShader = `
  varying vec2 vUv;
void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;
    gl_Position = projectionPosition;
    vUv = uv;
}`;

  const fragmentShader = `
uniform float iTime;
uniform vec2 iResolution;
varying vec2 vUv;
uniform sampler2D iChannel0;
// by srtuss, 2013
// https://www.shadertoy.com/view/4sl3Dr#
// rotate position around axis
vec2 rotate(vec2 p, float a) {
    return vec2(p.x * cos(a) - p.y * sin(a), p.x * sin(a) + p.y * cos(a));
}

// 1D random numbers
float rand(float n) {
    return fract(sin(n) * 43758.5453123);
}

// 2D random numbers
vec2 rand2(in vec2 p) {
    return fract(vec2(sin(p.x * 591.32 + p.y * 154.077), cos(p.x * 391.32 + p.y * 49.077)));
}

// 1D noise
float noise1(float p) {
    float fl = floor(p);
    float fc = fract(p);
    return mix(rand(fl), rand(fl + 1.0), fc);
}

// voronoi distance noise, based on iq's articles
float voronoi(in vec2 x) {
    vec2 p = floor(x);
    vec2 f = fract(x);

    vec2 res = vec2(8.0);
    for(int j = -1; j <= 1; j++) {
        for(int i = -1; i <= 1; i++) {
            vec2 b = vec2(i, j);
            vec2 r = vec2(b) - f + rand2(p + b);

   // chebyshev distance, one of many ways to do this
            float d = max(abs(r.x), abs(r.y));

            if(d < res.x) {
                res.y = res.x;
                res.x = d;
            } else if(d < res.y) {
                res.y = d;
            }
        }
    }
    return res.y - res.x;
}

void main() {
    vec2 fragCoord = vUv * iResolution;

    float flicker = noise1(iTime * 2.0) * 0.8 + 0.4;

    vec2 uv = fragCoord.xy / iResolution.xy;
    uv = (uv - 0.5) * 2.0;
    vec2 suv = uv;
    uv.x *= iResolution.x / iResolution.y;

    float v = 0.0;

 // that looks highly interesting:
 //v = 1.0 - length(uv) * 1.3;

 // a bit of camera movement
    uv *= 0.6 + sin(iTime * 0.1) * 0.4;
    uv = rotate(uv, sin(iTime * 0.3) * 1.0);
    uv += iTime * 0.4;

 // add some noise octaves
    float a = 0.6, f = 1.0;

    for(int i = 0; i < 3; i++) // 4 octaves also look nice, its getting a bit slow though
    {
        float v1 = voronoi(uv * f + 5.0);
        float v2 = 0.0;

  // make the moving electrons-effect for higher octaves
        if(i > 0) {
   // of course everything based on voronoi
            v2 = voronoi(uv * f * 0.5 + 50.0 + iTime);

            float va = 0.0, vb = 0.0;
            va = 1.0 - smoothstep(0.0, 0.1, v1);
            vb = 1.0 - smoothstep(0.0, 0.08, v2);
            v += a * pow(va * (0.5 + vb), 2.0);
        }

  // make sharp edges
        v1 = 1.0 - smoothstep(0.0, 0.3, v1);

  // noise is used as intensity map
        v2 = a * (noise1(v1 * 5.5 + 0.1));

  // octave 0's intensity changes a bit
        if(i == 0)
            v += v2 * flicker;
        else
            v += v2;

        f *= 3.0;
        a *= 0.7;
    }

 // slight vignetting
    v *= exp(-0.6 * length(suv)) * 1.2;

 // use texture channel0 for color? why not.
    vec3 cexp = texture(iChannel0, uv * 0.001).xyz * 3.0 + texture(iChannel0, uv * 0.01).xyz;//vec3(1.0, 2.0, 4.0);
    cexp *= 1.4;

 // old blueish color set
 //vec3 cexp = vec3(6.0, 4.0, 2.0);

    vec3 col = vec3(pow(v, cexp.x), pow(v, cexp.y), pow(v, cexp.z)) * 2.0;

    gl_FragColor = vec4(col, 1.0);
}`;

  const meshRef = useRef();

  // Load the noise texture and update the shader uniform
  const noiseTexture = useTexture("noise2.png");
  useFrame((state) => {
    let time = state.clock.getElapsedTime();

    // start from 20 to skip first 20 seconds ( optional )
    meshRef.current.material.uniforms.iTime.value =
      time + 20;
  });

  // Define the shader uniforms with memoization to optimize performance
  const uniforms = useMemo(
    () => ({
      iTime: {
        type: "f",
        value: 1.0,
      },
      iResolution: {
        type: "v2",
        value: new THREE.Vector2(4, 3),
      },
      iChannel0: {
        type: "t",
        value: noiseTexture,
      },
    }),
    []
  );

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[4, 3]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export function Scene() {
  return (
    <Canvas className="h-full w-full  border-4 ">
      <Suspense>
        <Test />
        {/* <Model /> */}
      </Suspense>
    </Canvas>
  );
}
