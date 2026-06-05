import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartModal = ({
  isCartOpen,
  setIsCartOpen
}) => {

  const navigate = useNavigate();
  const { cart, incrementQuantity, decrementQuantity, totalPrice } = useContext(CartContext);


  return (
    <AnimatePresence>

      {isCartOpen && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex justify-end"
        >

          <motion.div
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            exit={{ x: 500 }}
            className="w-full sm:w-[450px] h-full bg-white p-8 overflow-y-auto"
          >

            {/* HEADER */}
            <div className="flex items-center justify-between">

              <h2 className="text-3xl font-bold text-zinc-800">
                Tu carrito 🍩
              </h2>

              <button
                onClick={() => setIsCartOpen(false)}
                className="
                  bg-zinc-500
                  hover:bg-zinc-400
                  w-10
                  h-10
                  rounded-full
                  text-xl
                "
              >
                ✕
              </button>

            </div>

            {/* PRODUCTS */}
            <div className="mt-10 space-y-6">

  {cart.length === 0 ? (

    <div className="text-center py-10">

      <p className="text-zinc-500 text-lg">
        Tu carrito está vacío 🛒
      </p>

    </div>

  ) : (

    cart.map((product, index) => (

      <div
        key={index}
        className="bg-[#FFF7F2] p-4 rounded-3xl"
      >
        <div className="flex gap-4"> 
          <img src={product.image} alt={product.name} className="w-24 h-24 rounded-2xl object-cover" />
           <div className="flex-1"> 
            <h3 className="font-bold text-zinc-800"> {product.name} </h3>
             <p className="text-pink-500 font-bold mt-2"> ${product.price} </p> 
             {/* QUANTITY */} 
             <div className="flex items-center gap-4 mt-4"> 
              <button onClick={() => decrementQuantity(product.id)} className="bg-zinc-400 w-8 h-8 rounded-full" > - </button>
               <span className="text-zinc-800 font-bold"> {product.quantity} </span> 
               <button onClick={() => incrementQuantity(product.id)} className="bg-pink-500 text-white w-8 h-8 rounded-full" > + </button> 
               </div> 
               </div> 
               </div>
      </div>

    ))

  )}

</div>

            {/* TOTAL */}
            <div className="border-t mt-10 pt-6">

              <div className="flex justify-between items-center">

                <h3 className="text-2xl font-bold text-zinc-800">
                  Total
                </h3>

                <span className="text-3xl font-bold text-pink-500">
                  ${totalPrice.toFixed(2)}
                </span>

              </div>

              {/* BUTTONS */}
              <div className="space-y-4 mt-8">

                <button
                  onClick={() => setIsCartOpen(false)}
                  className="
                    w-full
                    border
                    border-pink-500
                    text-pink-500
                    py-4
                    rounded-2xl
                    font-semibold
                  "
                >
                  Seguir comprando
                </button>

                {cart.length > 0 && (

  <button
    onClick={() =>
      navigate("/checkout", {
        state: {
          cart,
          total: totalPrice,
        },
      })
    }
    className="
      w-full
      bg-pink-500
      hover:bg-pink-600
      text-white
      py-4
      rounded-2xl
      font-semibold
    "
  >
    Finalizar compra ✨
  </button>
)}

              </div>

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
};