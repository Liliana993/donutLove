import React from 'react'
import { Link } from 'react-router-dom'

export const CardCombo = ({image, name, description}) => {
  return (
    <div className="relative rounded-2xl overflow-hidden group">
          <img
            src={image}
            className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
          />

          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center p-6 text-white">
            <h3 className="text-2xl font-bold">{name}</h3>
            <p className="mt-2">{description}</p>

            <div className="mt-8 flex justify-center">
              <Link
                to="/contact"
                className="bg-pink-500 text-white px-6 py-3 rounded-full font-medium hover:bg-pink-600 transition-all duration-300"
              >
                Contactar
              </Link>
            </div>
          </div>
        </div>
  )
}
