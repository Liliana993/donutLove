import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import {products} from "../../utils/products";

export const UploadProducts = () => {

  const uploadProducts = async () => {

    try {

      const productsCollection = collection(
        db,
        "products"
      );

      for (const product of products) {

        await addDoc(
          productsCollection,
          product
        );

      }

      console.log("Productos cargados ✅");

    } catch (error) {

      console.error(error);

    }
  };

  return (
     <div className="bg-red-500 text-white p-4 text-center">
      <button
        onClick={uploadProducts}
        className="btn btn-secondary"
      >
        Cargar productos
      </button>
    </div>
  );
};