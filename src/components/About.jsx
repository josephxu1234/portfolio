import React, { useState, useEffect, useRef } from 'react';
import BIRDS from 'vanta/dist/vanta.birds.min.js';
import Typewriter from 'typewriter-effect';
import { descriptions } from '../config/AboutDescriptions.js';
import * as THREE from 'three'
import Programmer from '../assets/Programmer.svg';

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
                quantity: 4.00,
                backgroundColor: 0x7192f
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
    {/*if other pages are to be added, remove absolute top-0 */}
    {/* add padding-y to adjust for mobile device landscape mode*/}
    return (
        <div ref={myRef} className="flex justify-center items-center h-screen w-full absolute top-0">
            <div className="flex flex-col mx-16 lg:mx-24 2xl:mx-40 text-white">
                <span className="font-bold uppercase text-xl lg:text-3xl">Hi, my name is</span>
                <h1 className="text-5xl lg:text-7xl font-bold py-3">
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
                    <a href="mailto:josephxu1234@gmail.com" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        Contact Me
                    </a>
                    <a href="https://github.com/josephxu1234" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        View Github
                    </a>
                </div>

            </div>
            <div className="invisible md:visible mx-10 lg:mx-24 2xl:mx-40 lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img className="object-cover object-center rounded" alt="Programmer" src={Programmer} />
            </div>
        </div>
    );
}

export default About;