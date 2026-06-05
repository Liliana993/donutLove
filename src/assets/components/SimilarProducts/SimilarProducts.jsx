import { Link } from "react-router-dom";
import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase/config";
import { useEffect, useState } from "react";

export const SimilarProducts = ({ product }) => {

  const [similarProducts, setSimilarProducts] =
    useState([]);

  useEffect(() => {

    if (!product) return;

    const fetchSimilarProducts = async () => {

      try {

        const q = query(
          collection(db, "products"),
          where(
            "category",
            "==",
            product.category
          )
        );

        const querySnapshot =
          await getDocs(q);

        const productsData =
          querySnapshot.docs
            .map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
            .filter(
              (item) =>
                item.id !== product.id
            );

        setSimilarProducts(
          productsData
        );

      } catch (error) {

        console.error(error);

      }

    };

    fetchSimilarProducts();

  }, [product]);

  if (
    !similarProducts ||
    similarProducts.length === 0
  ) {
    return null;
  }

  return (
    <section className="mt-24">

      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Productos similares 🍩
      </h2>

      <div
        className="
          flex
          gap-6
          overflow-x-auto
          scroll-smooth
          snap-x
          pb-4
        "
      >

        {similarProducts.map((item) => (

          <div
            key={item.id}
            className="
              min-w-[300px]
              bg-white
              rounded-3xl
              shadow-lg
              overflow-hidden
              snap-start
              flex-shrink-0
            "
          >

            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">

              <h3 className="text-xl font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="text-pink-500 font-bold mt-2">
                ${item.price}
              </p>

              <Link
                to={`/producto/${item.id}`}
                className="
                  mt-4
                  inline-block
                  w-full
                  text-center
                  bg-pink-500
                  hover:bg-pink-600
                  text-white
                  py-3
                  rounded-2xl
                  font-semibold
                  transition
                "
              >
                Ver producto
              </Link>

            </div>

          </div>

        ))}

      </div>

    </section>
  );

};