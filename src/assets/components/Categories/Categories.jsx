import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Swal from "sweetalert2";
import { categories } from "../../utils/categories";
import {getDocs, collection} from "firebase/firestore"
import {db} from "../../firebase/config"


export const Categories = ({cart, setCart}) => {
  const [selectedCategory, setSelectedCategory] = useState("dulce");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setProducts(productsData);
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  const addToCart = (product) => {

  setCart((prev) => {

    const existingProduct = prev.find(
      (item) => item.title === product.title
    );

    if (existingProduct) {

      return prev.map((item) =>
        item.title === product.title
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
    }

    return [
      ...prev,
      {
        ...product,
        quantity: 1,
      },
    ];
  });

  Swal.fire({
    title: "Producto agregado 🍩",
    text: `${product.title} agregado al carrito`,
    icon: "success",
    timer: 1200,
    showConfirmButton: false,
    background: "#fff7f2",
  });
};

  return (
    <section className="py-20 px-6 bg-[#FFF7F2]">

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-800">
            Conoce nuestras categorías 🍩
          </h2>

          <p className="text-zinc-500 mt-4 text-lg">
            Explora nuestros productos favoritos
          </p>
        </div>

        {/* CATEGORIES */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {categories.map((cat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(cat.title)}
              className={`
                relative
                group
                cursor-pointer
                overflow-hidden
                rounded-3xl
                border-4
                transition-all
                duration-300
                ${
                  selectedCategory === cat.title
                    ? "border-pink-500 shadow-xl"
                    : "border-transparent"
                }
              `}
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-44 object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-xl font-bold">
                  {cat.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* PRODUCTS */}
        <div className="mt-20">

          <h3 className="text-3xl font-bold text-zinc-800 mb-10">
            Productos de {selectedCategory}
          </h3>

          <AnimatePresence mode="wait">

            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >

              {filteredProducts.map((product, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-[32px] overflow-hidden shadow-lg"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 object-cover"
                  />

                  <div className="p-6">
                    <h4 className="text-2xl font-bold text-zinc-800">
                      {product.title}
                    </h4>

                    <button
  onClick={() => addToCart(product)}
  className="
    mt-6
    bg-pink-500
    hover:bg-pink-600
    transition
    text-white
    px-6
    py-3
    rounded-full
    w-full
    font-semibold
  "
>
  Agregar al carrito 🛒
</button>
                  </div>
                </motion.div>
              ))}

            </motion.div>

          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};