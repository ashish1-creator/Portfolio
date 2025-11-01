import React from 'react'
import TitleHeader from "../components/TitleHeader.jsx";
import {testimonials} from "../constants/index.js";
import GlowCard from "../components/GlowCard.jsx";
const Testimonials = () => {
    return (
        <section id="about-me"  className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
  <TitleHeader title="Know About Me"/>
                <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
                    {testimonials.map(({name,review,mentions})=>(
                       <GlowCard card={{review}}>
                           <div className="flex items-center gap-3">
                             <div>
                                 <p className="font-bold text-xl mb-2">{name}</p>

                             </div>
                           </div>
                       </GlowCard>
                    ))}

                </div>

            </div>

        </section>



    )
}
export default Testimonials
