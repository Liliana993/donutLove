//import React from 'react'
import { Testimonials } from '../../components/Testimonials/Testimonials'
import { AboutReceta } from '../../components/AboutReceta/AboutReceta'

export const About = () => {
  return (
    <section className="w-full bg-[#FFF7F2] py-24 px-6">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
    {/* TEXT */}
    <div className="space-y-8">

      <span className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold">
        Nuestra historia
      </span>

      <h2 className="text-5xl font-bold text-zinc-800 leading-tight">
        Más que delicias, creamos
        <span className="text-pink-500"> momentos felices 🍩</span>
      </h2>

      <p className="text-zinc-600 text-lg leading-relaxed">
        En DonutLove elaboramos productos artesanales con ingredientes
        frescos y sabores irresistibles. Cada producto está pensado
        para convertir un momento simple en algo especial.
      </p>

      <div className="grid grid-cols-2 gap-4">

        <div className="bg-white p-6 rounded-3xl shadow-sm">
          <h3 className="text-3xl font-bold text-pink-500">+20</h3>
          <p className="text-zinc-600 mt-2">Sabores únicos</p>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm">
          <h3 className="text-3xl font-bold text-pink-500">100%</h3>
          <p className="text-zinc-600 mt-2">Artesanales</p>
        </div>

      </div>
    </div>

    {/* IMAGE */}
    <div className="relative">
      <img
        src='https://res.cloudinary.com/dcfo0mbfj/image/upload/v1745957231/samples/dessert-on-a-plate.jpg'
        alt="Donas artesanales"
        className="w-full h-[600px] object-cover rounded-[40px] shadow-2xl"
      />
    </div>

  </div>

  <AboutReceta />
  <Testimonials />
</section>
  )
}
