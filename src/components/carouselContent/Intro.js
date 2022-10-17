import React from "react";
import "../../styles/carouselContent/Intro.css";
import * as THREE from 'three'
import { useRef, useState, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, TrackballControls } from '@react-three/drei'

function Word({ children, ...props }) {
    const color = new THREE.Color()
    const fontProps = { fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
    const ref = useRef()
    const [hovered, setHovered] = useState(false)
    const over = (e) => (e.stopPropagation(), setHovered(true))
    const out = () => setHovered(false)
    // Tie component to the render-loop
    useFrame(({ camera }) => {
      // Make text face the camera
      ref.current.quaternion.copy(camera.quaternion)
      // Animate font color
      ref.current.material.color.lerp(color.set(hovered ? '#fa2720' : 'white'), 0.1)
    })
    return <Text ref={ref} onPointerOver={over} onPointerOut={out} onClick={() => console.log('clicked')} {...props} {...fontProps} children={children} />
  }
  
function Cloud({ count = 3, radius = 20 }) {
    // Create a count x count random words with spherical distribution
    const words = useMemo(() => {
      const skills_list = ['Python', 'C', 'Java', 'Javascript', 'JSP', 'HTML', 'CSS', 'Tensorflow', 'jQuery', 'Node', 'Express', 'React', 'Django', 'MariaDB', 'MySQL', 'PostgreSQL']
      var skills_ct = 0
      const temp = []
      const spherical = new THREE.Spherical()
      const phiSpan = Math.PI / (count + 1)
      const thetaSpan = (Math.PI * 2) / count
      for (let i = 1; i < count + 1; i++){
        for (let j = 0; j < count; j++){
            skills_ct++
            temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), skills_list[skills_ct]])
        } 
      }
        
      return temp
    }, [count, radius])
    return words.map(([pos, word], index) => <Word key={index} position={pos} children={word} />)
  }

export default function Intro(){
    const tagName = ['Python', 'C', 'Javascript', 'Java'];
    return(
        <div className = "row intro-main align-items-center">
            <div className = "col">
                <div className = "text-center">
                  <img
                  src="/my_dog.png"
                  width="50"
                  height="50"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"/>
                  <h2>Hello, My name is Mingon Song</h2>
                </div>
                <br/>
                <br/>
                <div className = "text-center">
                  <span> Backend and ML / AI Enthusiast who lives through coffee and music</span>
                </div>
                <br/>
                <div className = "text-center">
                  <span>Currently employed as a backend engineer in non-profit organization ‘UofTHacks’ but <strong>actively seeking for winter / summer internship</strong></span>
                </div>
                <br/>
                <br/>
                <div className = "text-center">
                  <span>please give a second for my 'skills' word cloud to pop up &#128073;</span>
                </div>
            </div>
            <div className = "col word-cloud">
                <Canvas dpr={[1, 2]} camera={{ position: [-10, 5, 17], fov: 100 }}>
                    <fog attach="fog" args={['#202025', 0, 100]} />
                    <Cloud count={4} radius={15} />
                    <TrackballControls />
                </Canvas>
            </div>
        </div>
    )
}