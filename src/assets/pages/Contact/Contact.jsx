import { useState } from "react";
import { motion } from "framer-motion";
import * as yup from "yup";
import Swal from "sweetalert2";

const schema = yup.object().shape({
  name: yup
    .string()
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .required("El nombre es obligatorio"),

  email: yup
    .string()
    .email("Correo inválido")
    .required("El correo es obligatorio"),

  message: yup
    .string()
    .min(10, "El mensaje es demasiado corto")
    .required("El mensaje es obligatorio"),
});

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

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

      // SIMULACIÓN DE ENVÍO
      setTimeout(() => {
        Swal.fire({
  title: "¡Gracias por escribirnos! 😊",
  text: "Recibimos tu mensaje correctamente y nos pondremos en contacto contigo muy pronto.",
  icon: "success",
  confirmButtonColor: "#ec4899",
  background: "#fff7f2",
});

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }, 1000);

    } catch (err) {
      const newErrors = {};

      err.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });

      setErrors(newErrors);
    }
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-pink-100 to-orange-100 relative overflow-hidden">

      {/* BLOBS */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300/20 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300/20 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold">
            Contacto
          </span>

          <h2 className="text-5xl font-bold text-zinc-800 mt-8 leading-tight">
            Hablemos de algo dulce
          </h2>

          <p className="text-zinc-600 text-lg mt-6 leading-relaxed">
            ¿Tienes alguna consulta, pedido especial o simplemente
            quieres saludarnos? Completa el formulario y te responderemos a la brevedad.
          </p>

          {/* FLOATING DONUT */}
          <motion.img
            src="https://res.cloudinary.com/dcfo0mbfj/image/upload/v1775585766/donasRosas_clfale.png"
            alt="donut"
            className="w-32 mt-12 hidden md:block"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
          />
        </motion.div>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#FFF7F2] p-10 rounded-[40px] shadow-xl space-y-6"
        >

          {/* NAME */}
          <div>
           <input
  type="text"
  name="name"
  placeholder="Tu nombre"
  value={formData.name}
  onChange={handleChange}
  className="
    w-full
    p-4
    rounded-2xl
    bg-white
    border
    border-pink-100
    text-zinc-700
    placeholder:text-zinc-400
    shadow-sm
    outline-none
    transition
    focus:border-pink-400
    focus:ring-4
    focus:ring-pink-200
  "
/>

            {errors.name && (
              <p className="text-red-500 text-sm mt-2">
                {errors.name}
              </p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <input
  type="email"
  name="email"
  placeholder="Tu correo"
  value={formData.email}
  onChange={handleChange}
  className="
    w-full
    p-4
    rounded-2xl
    bg-white
    border
    border-pink-100
    text-zinc-700
    placeholder:text-zinc-400
    shadow-sm
    outline-none
    transition
    focus:border-pink-400
    focus:ring-4
    focus:ring-pink-200
  "
/>

            {errors.email && (
              <p className="text-red-500 text-sm mt-2">
                {errors.email}
              </p>
            )}
          </div>

          {/* MESSAGE */}
          <div>
            <textarea
              name="message"
              placeholder="Tu mensaje"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="
w-full
p-4
rounded-2xl
bg-white
border
border-pink-100
text-zinc-700
placeholder:text-zinc-400
shadow-sm
outline-none
resize-none
transition
focus:border-pink-400
focus:ring-4
focus:ring-pink-200
"
            />

            {errors.message && (
              <p className="text-red-500 text-sm mt-2">
                {errors.message}
              </p>
            )}
          </div>

          {/* BUTTON */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 transition text-white py-4 rounded-2xl font-semibold text-lg shadow-lg"
          >
            Enviar mensaje 
          </motion.button>

        </motion.form>

      </div>
    </section>
  );
};