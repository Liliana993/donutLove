//import React from 'react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
    const images = [
        'https://res.cloudinary.com/dcfo0mbfj/image/upload/v1775588365/chesecake_ki0nxq.jpg',
        'https://res.cloudinary.com/dcfo0mbfj/image/upload/v1775587487/panetonne_nk3tez.jpg',
        'https://res.cloudinary.com/dcfo0mbfj/image/upload/v1775587433/facturaBrasilera_jsj8rw.jpg'
    ];

    const [index, setIndex] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
            setHasAnimated(true);
        }, 2000);
        return () => 
          clearInterval(interval);
    }, []);

  return (
      <div className='relative h-[70vh] overflow-hidden'>

      {/* SLIDER */}
      <AnimatePresence mode='wait'>
        <motion.img
          key={index}
          src={images[index]}
          className='absolute top-0 left-0 w-full h-full object-cover'
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-pink-900/40 to-black/60 flex flex-col items-center justify-center text-center px-4">

        {/* CONTENIDO ANIMADO */}
        <motion.div
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.5
              }
            }
          }}
          className="flex flex-col items-center"
        >

          {/* BADGE */}
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="bg-white/20 text-white px-4 py-1 rounded-full text-sm mb-4 backdrop-blur"
          >
            Nuevos sabores cada semana
          </motion.span>

          {/* TITULO */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-white text-4xl md:text-6xl font-bold mb-4"
          >
            Todo lo rico, en un solo lugar
          </motion.h1>

          {/* TEXTO */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-gray-100 mb-6 max-w-xl"
          >
            Descubre la magia de nuestros productos artesanales, hechos con ingredientes de calidad y mucho amor.
          </motion.p>

          {/* BOTÓN */}
          <motion.button
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl shadow-lg transition"
            onClick={() => navigate("/about")}
          >
            Conocenos
          </motion.button>

        </motion.div>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-6 w-full flex justify-center gap-2 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === index ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>

    </div>
  )
}
