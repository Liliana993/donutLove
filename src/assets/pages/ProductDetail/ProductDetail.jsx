import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { SimilarProducts } from "../../components/SimilarProducts/SimilarProducts";

export const ProductDetail = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {

    const fetchProduct = async () => {

      try {

        const docRef = doc(
          db,
          "products",
          id
        );

        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {

          setProduct({
            id: docSnap.id,
            ...docSnap.data(),
          });

        }

      } catch (error) {

        console.error(error);

      }

    };

    fetchProduct();

  }, [id]);

  useEffect(() => {

    window.scrollTo(0, 0);

  }, []);

  useEffect(() => {
  setAddedToCart(false);
}, [id]);

  const increment = () => {

    if (count < product.stock) {

      setCount(count + 1);

    }

  };

  const handleAddToCart = () => {
  addToCart(product, count);
  setAddedToCart(true);
};

  const decrement = () => {

    if (count > 1) {

      setCount(count - 1);

    }

  };

  if (!product) {

    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );

  }
  console.log(product);

  return (

    <section className="w-full min-h-screen bg-white py-10 px-6">

      {/* BOTÓN VOLVER */}
      <div className="max-w-7xl mx-auto mb-8">

        <button
          onClick={() => {

            navigate("/");

            setTimeout(() => {

              const section =
                document.getElementById(
                  "featured-products"
                );

              if (section) {

                section.scrollIntoView({
                  behavior: "smooth",
                });

              }

            }, 100);

          }}
          className="
            inline-flex
            items-center
            gap-2
            bg-pink-500
            hover:bg-pink-600
            text-white
            px-5
            py-3
            rounded-2xl
            font-semibold
            shadow-md
            transition-all
          "
        >
          ← Volver a Productos
        </button>

      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* IMAGEN */}
        <div>

          <div className="w-full h-[500px] bg-gray-100 rounded-3xl overflow-hidden shadow-lg">

            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />

          </div>

        </div>

        {/* INFO */}
        <div className="flex flex-col gap-6 justify-center">

          <span className="text-pink-500 font-semibold uppercase tracking-widest">
            {product.category}
          </span>

          <h1 className="text-5xl font-black text-gray-900">
            {product.title}
          </h1>

          <p className="text-3xl font-bold text-pink-600">
            ${product.price}
          </p>

          <div className="badge badge-outline w-fit">
            Stock disponible: {product.stock}
          </div>

          <p className="text-gray-600 leading-relaxed">
            {product.description}
          </p>

          {/* CANTIDAD */}
          {/* CANTIDAD */}
<div className="flex items-center gap-4">

  {!addedToCart ? (

    <>
      <div className="flex items-center border rounded-2xl overflow-hidden">

        <button
          onClick={decrement}
          disabled={count === 1}
          className="
            px-4
            py-2
            text-xl
            bg-gray-200
            hover:bg-gray-400
            disabled:opacity-50
          "
        >
          -
        </button>

        <span className="px-6 font-bold text-black">
          {count}
        </span>

        <button
          onClick={increment}
          disabled={count >= product.stock}
          className="
            px-4
            py-2
            text-xl
            bg-gray-200
            hover:bg-gray-400
            disabled:opacity-50
          "
        >
          +
        </button>

      </div>

      <button
        onClick={handleAddToCart}
        className="
          bg-pink-500
          hover:bg-pink-600
          transition-all
          text-white
          px-8
          py-4
          rounded-2xl
          font-bold
          shadow-lg
        "
      >
        Agregar al carrito
      </button>
    </>

  ) : (

    <div className="flex flex-col gap-3">

      <p className="text-green-600 font-bold">
        Producto agregado al carrito ✅
      </p>

      <button
        onClick={() => navigate("/")}
        className="
          bg-green-500
          hover:bg-green-600
          text-white
          px-6
          py-3
          rounded-2xl
          font-semibold
        "
      >
        Seguir comprando
      </button>

    </div>

  )}

</div>

          {/* BENEFICIOS */}
          <div className="grid grid-cols-2 gap-4 mt-6">

            <div className="bg-pink-50 p-4 rounded-2xl">

              <h3 className="font-bold text-gray-900">
                Envío rápido
              </h3>

              <p className="text-sm text-gray-600">
                Entrega en menos de 24hs
              </p>

            </div>

            <div className="bg-pink-50 p-4 rounded-2xl">

              <h3 className="font-bold text-gray-900">
                Ingredientes frescos
              </h3>

              <p className="text-sm text-gray-600">
                Calidad premium garantizada
              </p>

            </div>

          </div>

        </div>

      </div>

      <SimilarProducts product={product} />

    </section>

  );

};