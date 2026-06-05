import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  collection,
  getDocs,
} from "firebase/firestore";

import { db } from "../../firebase/config";

export const FeaturedProducts = () => {

  const [featuredProducts, setFeaturedProducts] =
    useState([]);

  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const querySnapshot = await getDocs(
          collection(db, "products")
        );

        const productsData =
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

        const featured =
          productsData
            .filter(
              (product) => product.featured
            )
            .slice(0, 5);

        setFeaturedProducts(featured);

      } catch (error) {

        console.error(error);

      }

    };

    fetchProducts();

  }, []);

  //console.log(featuredProducts);
  return (
    <section className="py-16 px-6 bg-gray">

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Top productos más elegidos
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {featuredProducts.map((product) => {
           //console.log(product)
           return(
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden group"
          >

            <div className="overflow-hidden">

              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
              />

            </div>

            <div className="p-4">

              <h3 className="font-semibold text-lg text-gray-800">
                {product.title}
              </h3>

              <p className="text-pink-500 font-bold mt-2">
                ${product.price}
              </p>

              <Link
                to={`/producto/${product.id}`}
              >
                <button className="mt-4 w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-xl transition">
                  Ver más
                </button>
              </Link>

            </div>

          </div>
           )
})}

      </div>

    </section>
  );
};