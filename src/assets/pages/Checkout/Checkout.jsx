import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

import {db} from "../../firebase/config";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import * as yup from "yup";
import Swal from "sweetalert2";

const schema = yup.object().shape({
  name: yup
    .string()
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .required("El nombre es obligatorio"),

  address: yup
    .string()
    .min(5, "La dirección es demasiado corta")
    .required("La dirección es obligatoria"),

  phone: yup
  .string()
  .min(8, "Ingresa un teléfono válido")
  .required("El teléfono es obligatorio"),

  email: yup
  .string()
  .email("Ingresa un email válido")
  .required("El email es obligatorio"),

  payment: yup
    .string()
    .required("Debes seleccionar un método de pago"),
});

import {
  FaCcVisa,
  FaCcMastercard,
  FaMoneyBillWave,
} from "react-icons/fa";

export const Checkout = () => {

  const navigate = useNavigate();

  const { setCart } = useContext(CartContext);
  const { state } = useLocation();

  const { cart, total } = state;
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  address: "",
  payment: "cash",
});

  const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await schema.validate(formData, {
      abortEarly: false,
    });

    setErrors({});

    const order = {
      buyer: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        paymentMethod: formData.payment,
      },

      items: cart.map((item) => ({
        id: item.id,
        name: item.title,
        image: item.image,
        price: item.price,
        quantity: item.quantity,
      })),

      total,

      date: serverTimestamp(),
    };

    //console.log(order);

    const docRef = await addDoc(
      collection(db, "orders"),
      order
    );

    await Swal.fire({
  title: "¡Gracias por tu compra! 🍩",
  text: "Tu pedido fue registrado correctamente.",
  icon: "success",
  confirmButtonColor: "#ec4899",
  background: "#fff7f2",
});

    setCart([]);

    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      payment: "cash",
    });

    navigate(`/order/${docRef.id}`);;

  } catch (err) {

    if (err.name === "ValidationError") {

      const newErrors = {};

      err.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });

      setErrors(newErrors);

    } else {

      console.error("Error Firebase:", err);

      Swal.fire({
        title: "Error",
        text: "No se pudo registrar la compra.",
        icon: "error",
      });

    }
  }
};

  return (
    <section className="py-20 px-6 bg-[#FFF7F2] min-h-screen">

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">

        {/* SUMMARY */}
        <div>

          <h2 className="text-4xl font-bold text-zinc-800">
            Resumen del pedido
          </h2>

          <div className="mt-10 space-y-6">

            {cart.map((item, index) => (

              <div
                key={index}
                className="bg-white p-4 rounded-3xl flex gap-4"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 rounded-2xl object-cover"
                />

                <div>
                  <h3 className="font-bold text-zinc-800">
                    {item.name}
                  </h3>

                  <p className="text-zinc-500">
                    Cantidad: {item.quantity}
                  </p>

                  <p className="text-pink-500 font-bold mt-2">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>

              </div>

            ))}

          </div>

          <div className="mt-10 flex justify-between items-center">

            <h3 className="text-3xl font-bold text-zinc-800">
              Total
            </h3>

            <span className="text-4xl font-bold text-pink-500">
              ${total.toFixed(2)}
            </span>

          </div>

        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded-[40px] shadow-xl"
        >

          <h2 className="text-3xl font-bold text-zinc-800">
            Datos del solicitante
          </h2>

          <div className="space-y-6 mt-10">

            <input
  type="text"
  name="name"
  placeholder="Nombre completo"
  value={formData.name}
  onChange={handleChange}
  className="
    w-full
    p-4
    rounded-2xl
    border
    bg-[#fff7f2]
    text-zinc-800
  "
/>

{errors.name && (
  <p className="text-red-500 text-sm mt-2">
    {errors.name}
  </p>
)}

{/* EMAIL */}

<input
  type="email"
  name="email"
  placeholder="Correo electrónico"
  value={formData.email}
  onChange={handleChange}
  className="
    w-full
    p-4
    rounded-2xl
    border
    bg-[#fff7f2]
    text-zinc-800
  "
/>

{errors.email && (
  <p className="text-red-500 text-sm mt-2">
    {errors.email}
  </p>
)}

{/* PHONE */}

<input
  type="text"
  name="phone"
  placeholder="Teléfono"
  value={formData.phone}
  onChange={handleChange}
  className="
    w-full
    p-4
    rounded-2xl
    border
    bg-[#fff7f2]
    text-zinc-800
  "
/>

{errors.phone && (
  <p className="text-red-500 text-sm mt-2">
    {errors.phone}
  </p>
)}

{/* ADDRESS */}

<input
  type="text"
  placeholder="Dirección"
  className="
    w-full
    p-4
    rounded-2xl
    border
    bg-[#fff7f2]
    text-zinc-800
  "
  name="address"
  value={formData.address}
  onChange={handleChange}
/>

{errors.address && (
  <p className="text-red-500 text-sm mt-2">
    {errors.address}
  </p>
)}
            {/* PAYMENT */}
            <div>

              <h3 className="font-bold text-zinc-800 mb-4">
                Método de pago
              </h3>

              <div className="grid grid-cols-3 gap-4">

                <button
  type="button"
  onClick={() =>
    setFormData({
      ...formData,
      payment: "visa",
    })
  }
  className={`
    border
    p-4
    rounded-2xl
    flex
    flex-col
    items-center
    transition
    ${
      formData.payment === "visa"
        ? "border-pink-500 bg-pink-50"
        : ""
    }
  `}
>
  <FaCcVisa
    className="text-blue-600"
    size={40}
  />

  Visa
</button>

                <button
                  type="button"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      payment: "mastercard",
                    })
                  }
                  className={`
                    border
                    p-4
                    rounded-2xl
                    flex
                    flex-col
                    items-center
                    transition
                    ${
                      formData.payment === "mastercard"
                        ? "border-pink-500 bg-pink-50"
                        : ""
                    }
                  `}
                >
                  <FaCcMastercard className="text-blue-800" size={40} />
                  Mastercard
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      payment: "cash",
                    })
                  }
                  className={`
                    border
                    p-4
                    rounded-2xl
                    flex
                    flex-col
                    items-center
                    transition
                    ${
                      formData.payment === "cash"
                        ? "border-pink-500 bg-pink-50"
                        : ""
                    }
                  `}
                >
                  <FaMoneyBillWave className="text-green-600" size={40} />
                  Efectivo
                </button>

              </div>

            </div>

            <button
              type="submit"
              className="
                w-full
                bg-pink-500
                hover:bg-pink-600
                text-white
                py-4
                rounded-2xl
                font-semibold
                text-lg
              "
            >
              Confirmar pedido 🍩
            </button>

          </div>

        </form>

      </div>

    </section>
  );
};