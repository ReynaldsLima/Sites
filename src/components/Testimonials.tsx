// PLACEHOLDER: depoimentos fictícios. Substitua por relatos reais e
// autorizados antes de publicar — confira também as regras de publicidade
// da OAB (Provimento 205/2021) sobre uso de depoimentos de clientes.
const TESTIMONIALS = [
  {
    quote: "[Inserir depoimento real do cliente aqui]",
    name: "[Nome do cliente]",
    role: "[Relação com o escritório]",
  },
  {
    quote: "[Inserir depoimento real do cliente aqui]",
    name: "[Nome do cliente]",
    role: "[Relação com o escritório]",
  },
  {
    quote: "[Inserir depoimento real do cliente aqui]",
    name: "[Nome do cliente]",
    role: "[Relação com o escritório]",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <span className="text-sm font-semibold uppercase tracking-widest text-accent">
          Depoimentos
        </span>
        <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
          O que nossos clientes dizem
        </h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((item) => (
          <figure
            key={item.name}
            className="flex flex-col justify-between rounded-xl border border-border bg-muted p-6"
          >
            <blockquote className="text-foreground">
              &ldquo;{item.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6">
              <div className="font-semibold text-foreground">
                {item.name}
              </div>
              <div className="text-sm text-muted-foreground">{item.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
