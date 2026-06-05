import { motion } from "framer-motion";

const steps = [
  {
    icon: "🥣",
    title: "Ingredientes frescos",
    text: "Seleccionamos ingredientes de calidad para lograr sabores únicos.",
  },
  {
    icon: "🍞",
    title: "Masa artesanal",
    text: "Nuestra masa se prepara diariamente para mantener la textura perfecta.",
  },
  {
    icon: "🔥",
    title: "Horneado perfecto",
    text: "Cocinamos cada dona en el punto exacto para lograr suavidad y sabor.",
  },
  {
    icon: "🍩",
    title: "Decoración handmade",
    text: "Decoramos cada dona a mano con toppings irresistibles.",
  },
  {
    icon: "🎀",
    title: "Empaque premium",
    text: "Cada pedido llega presentado con un estilo dulce y moderno.",
  },
  {
    icon: "🚚",
    title: "Entrega fresca",
    text: "Empacamos cuidadosamente cada pedido para conservar frescura y calidad.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export const AboutReceta = () => {
  return (
    <section className="py-24 px-6 bg-[#FFF7F2] relative overflow-hidden">

      {/* BLOBS */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300/20 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300/20 blur-3xl rounded-full" />

      {/* FLOATING DONUT */}
      <motion.img
        src="https://res.cloudinary.com/dcfo0mbfj/image/upload/v1775585766/donasRosas_clfale.png"
        alt="floating donut"
        className="absolute w-24 top-20 right-10 opacity-80 hidden md:block"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TITLE */}
        <div className="text-center">
          <h2 className="text-5xl font-bold text-zinc-800">
            Cómo las hacemos
          </h2>

          <p className="text-zinc-500 mt-6 text-lg max-w-2xl mx-auto">
            Cada producto pasa por un proceso artesanal lleno de detalle,
            sabor y mucho amor. Desde la selección de ingredientes hasta el toque final, cada paso es clave para crear las delicias que tanto amás.
          </p>
        </div>

        {/* GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20"
        >

          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.03,
                boxShadow: "0px 20px 40px rgba(255,105,180,0.15)",
              }}
              transition={{
                type: "spring",
                stiffness: 200,
              }}
              className="bg-white p-8 rounded-[32px] shadow-sm cursor-pointer"
            >
              <span className="text-5xl">
                {step.icon}
              </span>

              <h3 className="font-bold text-2xl mt-6 text-zinc-800">
                {step.title}
              </h3>

              <p className="text-zinc-600 mt-4 leading-relaxed">
                {step.text}
              </p>
            </motion.div>
          ))}

        </motion.div>

      </div>
    </section>
  );
};
