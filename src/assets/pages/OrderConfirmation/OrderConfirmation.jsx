import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { motion } from "framer-motion";

export const OrderConfirmation = () => {

  const { orderId } = useParams();

  const [order, setOrder] = useState(null);

  useEffect(() => {

    const getOrder = async () => {

      const docRef = doc(db, "orders", orderId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setOrder(docSnap.data());
      }

    };

    getOrder();

  }, [orderId]);

  if (!order) {
    return <p>Cargando orden...</p>;
  }

  //console.log(order);

  return (
    <section
      className="min-h-screen bg-[#FFF7F2] flex items-center justify-center px-6"
    >

      <div className="bg-white p-10 rounded-[40px] shadow-xl max-w-xl text-center">

        <h1 className="text-4xl font-bold text-zinc-800">
          ¡Compra realizada! 🎉
        </h1>

        <div className="mt-8 bg-pink-50 p-6 rounded-2xl">

          <p className="text-zinc-500">
            Número de orden:
          </p>

          <motion.p
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{
  type: "spring",
  stiffness: 180,
  damping: 12,
}}
  className="text-pink-500 font-bold text-xl mt-2 break-all"
>
  {orderId}
</motion.p>

        </div>

        <div className="mt-6 text-left space-y-2 text-zinc-800">

  <p>
    <strong>Nombre:</strong> {order.buyer?.name}
  </p>

  <p>
    <strong>Email:</strong> {order.buyer?.email}
  </p>

  <p>
    <strong>Teléfono:</strong> {order.buyer?.phone}
  </p>

  <p>
    <strong>Dirección:</strong> {order.buyer?.address}
  </p>

  <p>
    <strong>Método de pago:</strong> {order.buyer?.paymentMethod}
  </p>

  <p>
    <strong>Fecha:</strong>{" "}
    {order.date?.toDate()?.toLocaleDateString()}
  </p>

  <p>
    <strong>Total:</strong> $
    {Number(order.total).toFixed(2)}
  </p>

</div>
<div className="mt-8 flex justify-center">
  <Link
    to="/"
    className="bg-pink-500 text-white px-6 py-3 rounded-full font-medium hover:bg-pink-600 transition-all duration-300"
  >
    Volver al inicio
  </Link>
</div>

      </div>

    </section>
  );
};