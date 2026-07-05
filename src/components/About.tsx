// PLACEHOLDER: substitua pelos números reais do escritório antes de publicar.
const STATS = [
  { value: "[X]+", label: "Anos de experiência" },
  { value: "[X]+", label: "Casos atendidos" },
  { value: "[X]%", label: "Clientes satisfeitos" },
  { value: "6", label: "Áreas de atuação" },
];

export default function About() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Sobre nós
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
            Tradição jurídica com uma visão moderna
          </h2>
          <p className="mt-5 text-muted-foreground">
            A Barra Advogados nasceu do compromisso de oferecer um serviço
            jurídico transparente, técnico e humano. Nossa equipe acompanha de
            perto cada cliente, traduzindo a complexidade do Direito em
            decisões claras e seguras.
          </p>
          <p className="mt-4 text-muted-foreground">
            Atuamos em todo o território nacional, combinando experiência
            consolidada com o uso de tecnologia para agilizar processos e
            manter você sempre informado sobre o andamento do seu caso.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-muted p-6 text-center"
            >
              <div className="font-serif text-3xl font-semibold text-foreground">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
