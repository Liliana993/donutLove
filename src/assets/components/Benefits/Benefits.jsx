//import { Heart, Truck, Star, Cookie } from "lucide-react";
import { FaSplotch, FaHeart, FaTruck, FaHamburger } from "react-icons/fa";

export const Benefits = () => {
  const benefits = [
    {
      icon: <FaHamburger size={32} />,
      title: "Recién horneado",
      desc: "Productos frescos todos los días"
    },
    {
      icon: <FaTruck size={32} />,
      title: "Entrega rápida",
      desc: "Recibí tu pedido en minutos"
    },
    {
      icon: <FaHeart size={32} />,
      title: "Hecho con amor",
      desc: "Cada receta cuidada al detalle"
    },
    {
      icon: <FaSplotch size={32} />,
      title: "Calidad premium",
      desc: "Ingredientes seleccionados"
    }
  ];

  return (
    <section className="py-16 px-6 bg-geyser">

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        ¿Por qué elegirnos?
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 bg-gray-700 p-8 rounded-2xl">
        
        {benefits.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 rounded-2xl hover:shadow-lg transition group"
          >
            {/* ICONO */}
            <div className="text-pink-500 mb-4 group-hover:scale-110 transition">
              {item.icon}
            </div>

            {/* TITULO */}
            <h3 className="font-semibold text-lg mb-2">
              {item.title}
            </h3>

            {/* DESCRIPCIÓN */}
            <p className="text-gray-500 text-sm">
              {item.desc}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
};