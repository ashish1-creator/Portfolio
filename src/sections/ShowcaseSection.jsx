import React from 'react'
import {useRef} from 'react'
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useGSAP} from '@gsap/react'
import TitleHeader from "../components/TitleHeader.jsx";


gsap.registerPlugin(ScrollTrigger);
const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);



    useGSAP(() =>{
        const projects = [project1Ref.current,project2Ref.current,project3Ref.current];
        projects.forEach((card,index)=>{
            gsap.fromTo(
                card,
                {
                    y:50,opacity:0
                },
                {
                    y:0,
                    opacity:1,
                    duration:1,
                    delay: 0.3 *(index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom -=100',
                    }
                }
            )
        })

 gsap.fromTo(sectionRef.current,
     {opacity:0},
     {opacity:1,
         duration:1.5})
    },[])
    return (
        <section id = "work" ref={sectionRef} className="app-showcase">
        <div className = "w-full">
        <div className="showcaselayout">
             {/*LEFT  SIDE */}
            <div className="first-project-wrapper" ref={project1Ref}>
                <div className="image-wrapper">
                    <img src="/images/ChatGPT Image Oct 28, 2025, 01_25_07 AM.png" alt="Ryde"/>
                </div>
                <div className="text-content">
                    <h2>An interactive weather app that displays current weather and temperature based on the user’s location</h2>
                    <p className="text-white-50 md:text-xl">An App built with react, and the OpenWeather API..</p>
                </div>

            </div>
             {/*RIGHT SIDE */}
            <div className="project-list-wrapper overflow-hidden" >
                <div className="project" ref={project2Ref}>
                    <div className="image-wrapper bg-[#0a0a0a]">
                        <img src="/images/ChatGPT Image Oct 28, 2025, 01_15_51 AM.png" alt ="📽️ Explore Movies Instantly" />
                    </div>
                    <h2>📽️ Explore Movies Instantly</h2>
                </div>
                <div className = "project" ref={project3Ref}>
                    <div className="image-wrapper bg-[#0a0a0a]">
                        <img src="/images/ChatGPT Image Oct 28, 2025, 10_18_32 AM.png" alt="Fit-Forge"/>
                    </div>
                    <h2>FIT-FORGE - Together, We Forge Strength</h2>
                </div>
            </div>
        </div>
        </div>
        </section>
    )
}
export default ShowcaseSection

