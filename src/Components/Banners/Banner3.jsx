import React from 'react'
import BannerPng from "../../assets/banner-bg.jpg";
import { motion } from "framer-motion";
import { FadeLeft } from "../../Utility/Animation";
import { MdOutlineShoppingCart } from 'react-icons/md';

const bgStyle = {
    backgroundImage: `url(${BannerPng})`,
    backgrounSize: "cover",
    backgroundRepeat: "no-repeat"
}

const Banner3 = () => {
  return (
    <section>
      <div style={bgStyle} className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 ">
        {/* Blank div  */}
        <div></div>

        {/* Banner Info */}
         <div className="flex flex-col justify-center">
          <div className="text-center md:text-left  space-y-4 lg:max-w-[400px]">
            <motion.h1
            variants={FadeLeft(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true}}
            className="text-3xl lg:text-6xl font-bold uppercase">get fresh fruits today</motion.h1>
            <motion.p
            variants={FadeLeft(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Atque inventore
              iusto quaerat eos cumque facere voluptatibus consequuntur
              molestias fugit eveniet.
            </motion.p>
            <motion.p
            variants={FadeLeft(0.9)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true}}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Provident, ad!
            </motion.p>
            {/* button section  */}
             <motion.div
              variants={FadeLeft(0.9)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn flex justify-center items-center gap-2">
              Learn more<MdOutlineShoppingCart/>
              </button>
            </motion.div>
          </div> 
        </div> 
      </div>
    </section>
    
  )
}

export default Banner3
