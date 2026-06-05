import {CardCombo} from "./CardCombo";

const combos = [
  {
    id: 29,
    name: "Desayunos Premium Ejecutivos",
    description:
      "Sorprendé a tu equipo, clientes o invitados con desayunos artesanales de alta calidad.",
    image:
      "https://res.cloudinary.com/dcfo0mbfj/image/upload/v1745957232/cld-sample-4.jpg",
  },
  {
    id: 30,
    name: "Box Dulces para Eventos",
    description:
      "Donas, cookies y delicias artesanales para cumpleaños, reuniones y celebraciones especiales.",
    image:
      "https://res.cloudinary.com/dcfo0mbfj/image/upload/v1775585808/donasDocena_afnhzp.jpg",
  },
];


export const Combos = () => {
  return (
    <section className="py-16 px-6 bg-pink-400">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">

        {combos.map((combo) => (

          <CardCombo key={combo.id}
  image={combo.image}
  name={combo.name}
  description={combo.description}/>
        ))}

      </div>

    </section>
  );
};