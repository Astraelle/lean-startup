import TestimonialCard from './avis';

const testimonials = [
  {
    text: "J’ai rencontré mes premiers vrais potes de route grâce à Kollab. Un game changer.",
    name: "Camille L.",
    title: "Rédactrice freelance",
  },
  {
    text: "Enfin une app pensée pour les vrais besoins des digital nomades. Je me sens moins seule.",
    name: "Nina B.",
    title: "UX Designer",
  },
  {
    text: "Super outil pour l'entraide entre indépendants. J’ai trouvé un vidéaste pour mon projet en 2 jours.",
    name: "Yanis D.",
    title: "Motion Designer",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-10 px-4 bg-white">
      <div className="flex flex-col md:flex-row gap-6 justify-center items-start">
        {testimonials.map((t, index) => (
          <TestimonialCard
            key={index}
            text={t.text}
            name={t.name}
            title={t.title}
          />
        ))}
      </div>
    </section>
  );
}
