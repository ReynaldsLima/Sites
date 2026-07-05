const TESTIMONIALS = [
  {
    quote:
      "A equipe da Barra Advogados conduziu meu processo trabalhista com muita competência e transparência. Fui informado em cada etapa.",
    name: "Marcos Oliveira",
    role: "Cliente pessoa física",
  },
  {
    quote:
      "Contratamos a assessoria empresarial para reestruturar nossos contratos e o resultado superou as expectativas. Recomendo fortemente.",
    name: "Fernanda Costa",
    role: "Diretora, Costa Comércio Ltda.",
  },
  {
    quote:
      "Atendimento humano e atencioso durante todo o processo de divórcio. Me senti amparada em um momento difícil.",
    name: "Juliana Alves",
    role: "Cliente pessoa física",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <span className="text-sm font-semibold uppercase tracking-widest text-amber-700">
          Depoimentos
        </span>
        <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
          O que nossos clientes dizem
        </h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((item) => (
          <figure
            key={item.name}
            className="flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50 p-6"
          >
            <blockquote className="text-slate-700">
              &ldquo;{item.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6">
              <div className="font-semibold text-slate-900">{item.name}</div>
              <div className="text-sm text-slate-500">{item.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
