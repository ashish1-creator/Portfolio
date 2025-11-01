import React from 'react'

const LogoSection = () => {
    return (
        <div className = "md:my-20 my-10 relative">
           <div className = "gradient-edge"/>
            <div className = "gradient-edge"/>
            <div className = "marquee h-52">
                <div className = "marquee-box md:gap-12 gap-5">
                    <p className="text-white-50  md:text-xl relative z-10 pointer-events-none">Hi, I'm Nallakappa 👋
                        I'm an MCA graduate and an aspiring Java Full Stack Developer passionate about creating efficient, user-friendly applications.
                        I enjoy working with technologies like Java, Spring Boot, React, and databases to build complete end-to-end solutions.
                        Currently, I’m enhancing my skills through real-time projects and continuous learning.
                        I’m eager to start my career in software development, contribute to impactful projects, and grow as a full stack professional.
                        `;</p>
                    {/*<p className="text-white-50  md:text-xl relative z-10 pointer-events-none"> Hey there!,I'm Ashish, a Java Full Stack Developer crafting*/}
                    {/*    seamless solutions from front-end to back-end.</p>*/}

                </div>
            </div>
        </div>
    )
}
export default LogoSection
