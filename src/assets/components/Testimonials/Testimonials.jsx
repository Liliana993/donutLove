//import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: "Carla M.",
    text: "Llegaron súper frescas y hermosas 😍",
    image: "https://res.cloudinary.com/dcfo0mbfj/image/upload/v1777644290/main-sample.png",
  },
  {
    name: "Lucia R.",
    text: "El diseño y los sabores son increíbles 🍩",
    image: "https://res.cloudinary.com/dcfo0mbfj/image/upload/v1745957232/cld-sample.jpg",
  },
  {
    name: "Taylor G.",
    text: "Pedir en DonutLove ya es tradición en casa ✨",
    image: "https://res.cloudinary.com/dcfo0mbfj/image/upload/v1745957230/samples/smile.jpg",
  },
  {
    name: "Juan T.",
    text: "Las donas más suaves y ricas que probé 😁",
    image: "https://res.cloudinary.com/dcfo0mbfj/image/upload/v1745957231/samples/man-portrait.jpg",
  },
];

export const Testimonials = () => {
  return (
      <section className="w-full py-24 bg-white overflow-hidden">

      <div className="text-center mb-16 px-6">
        <h2 className="text-5xl font-bold text-zinc-800">
          Lo que dicen nuestros clientes 💖
        </h2>

        <p className="text-zinc-500 mt-4 text-lg">
          Miles de momentos dulces compartidos
        </p>
      </div>

      {/* CARRUSEL */}
      <motion.div
        className="flex gap-8 w-max"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...testimonials, ...testimonials].map((item, index) => (
          <div
            key={index}
            className="w-[350px] bg-[#FFF7F2] p-8 rounded-[32px] shadow-sm flex-shrink-0"
          >
            <p className="text-yellow-400 text-2xl">
              ★★★★★
            </p>

            <p className="text-zinc-600 mt-6 text-lg leading-relaxed">
              {item.text}
            </p>

            <div className="mt-8 flex items-center gap-4">
              <img
    src={item.image}
    alt={item.name}
    className="w-14 h-14 rounded-full object-cover border-2 border-pink-300"
  />

              <div>
                <h4 className="font-bold text-zinc-800">
                  {item.name}
                </h4>

                <span className="text-sm text-zinc-500">
                  Cliente feliz
                </span>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
