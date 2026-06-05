import { FaInstagram, FaMapMarker } from "react-icons/fa";
import { FaSquareFacebook, FaSquareEnvelope,  FaSquareWhatsapp } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-gray-300 px-6 py-12">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            🍩 DonutLove
          </h2>
          <p className="text-sm text-gray-400">
            Dulce o salado, siempre hay algo para vos. Hecho con amor todos los días.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Navegación
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Inicio</li>
            <li className="hover:text-white cursor-pointer">Categorías</li>
            <li className="hover:text-white cursor-pointer">Productos</li>
            <li className="hover:text-white cursor-pointer">Combos</li>
          </ul>
        </div>

        {/* CONTACTO */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Contacto
          </h3>
          <ul className="space-y-3 text-sm">

            <li className="flex items-center gap-2">
              <FaSquareWhatsapp size={16} /> +54 9 3754 00-0000
            </li>

            <li className="flex items-center gap-2">
              <FaSquareEnvelope size={16} /> contacto@donutlove.com
            </li>

            <li className="flex items-center gap-2">
              <FaMapMarker size={16} /> Leandro N. Alem, Misiones
            </li>

          </ul>
        </div>

        {/* REDES + CTA */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Seguinos
          </h3>

          <div className="flex gap-4 mb-6">
            <div className="bg-white/10 p-2 rounded-full hover:bg-pink-500 transition cursor-pointer">
              <FaInstagram size={18} />
            </div>

            <div className="bg-white/10 p-2 rounded-full hover:bg-pink-500 transition cursor-pointer">
              <FaSquareFacebook size={18} />
            </div>
          </div>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} DonutLove. Todos los derechos reservados.
      </div>

    </footer>
  );
};