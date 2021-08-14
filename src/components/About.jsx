import React, { useState, useEffect, useRef } from 'react';
import BIRDS from 'vanta/dist/vanta.birds.min.js';
import Typewriter from 'typewriter-effect';
import { descriptions } from '../config/AboutDescriptions.js';
import * as THREE from 'three'


function About() {
    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef("Animation")
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(BIRDS({
                el: myRef.current,
                THREE: THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                birdSize: 1.20,
                speedLimit: 6.00,
                cohesion: 15.00,
                quantity: 4.00
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
    return (
        <main ref={myRef} className="h-screen flex flex-col items-center px-6 lg:px-20 text-white">
            <section className="m-auto w-full md:w-9/12 xl:w-8/12">
                <span className="font-bold uppercase text-xl">Hi, my name is</span>
                <h1 className="text-5xl font-bold py-3">
                    Joseph<br />Xu
                </h1>
                <div className="pb-3">
                    <Typewriter
                        options={{
                            strings: descriptions,
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
                {/* put in links*/}
                <div className="flex gap-x-2">
                    <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        Contact Me
                </button>
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        View My Projects
                </button>
                </div>
            </section>
        </main>
    );
}

export default About;