import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Header = ({ cart, setIsCartOpen }) => {
  return (
     <header className="bg-gray-900/90 backdrop-blur-md sticky top-0 z-50 border-b border-white/10">

      <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* LOGO */}
        <h1 className="text-2xl font-extrabold bg-gradient-to-r from-pink-400 to-orange-300 bg-clip-text text-transparent">
          DonutLove 🍩
        </h1>

        {/* LINKS */}
        <div className="flex items-center gap-8">

          <Link
            to="/"
            className="hover:text-pink-400 transition font-medium"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="hover:text-pink-400 transition font-medium"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="hover:text-pink-400 transition font-medium"
          >
            Contact
          </Link>

          {/* CART */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="
              relative
              bg-pink-500
              hover:bg-pink-600
              transition
              p-3
              rounded-full
              shadow-lg
              hover:scale-105
            "
          >
            <FaShoppingCart  size={22} />

            {/* COUNTER */}
            {cart.length > 0 && (
              <span
                className="
                  absolute
                  -top-2
                  -right-2
                  bg-white
                  text-pink-500
                  text-xs
                  font-bold
                  w-6
                  h-6
                  rounded-full
                  flex
                  items-center
                  justify-center
                  shadow-md
                "
              >
                {cart.length}
              </span>
            )}
          </button>

        </div>

      </nav>

    </header>
  )
}