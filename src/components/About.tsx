const STATS = [
  { value: "15+", label: "Anos de experiência" },
  { value: "1.200+", label: "Casos atendidos" },
  { value: "98%", label: "Clientes satisfeitos" },
  { value: "6", label: "Áreas de atuação" },
];

export default function About() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-amber-700">
            Sobre nós
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Tradição jurídica com uma visão moderna
          </h2>
          <p className="mt-5 text-slate-600">
            A Barra Advogados nasceu do compromisso de oferecer um serviço
            jurídico transparente, técnico e humano. Nossa equipe acompanha de
            perto cada cliente, traduzindo a complexidade do Direito em
            decisões claras e seguras.
          </p>
          <p className="mt-4 text-slate-600">
            Atuamos em todo o território nacional, combinando experiência
            consolidada com o uso de tecnologia para agilizar processos e
            manter você sempre informado sobre o andamento do seu caso.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-center"
            >
              <div className="text-3xl font-semibold text-slate-900">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
