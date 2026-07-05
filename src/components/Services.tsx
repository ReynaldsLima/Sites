const SERVICES = [
  {
    title: "Direito Civil",
    description:
      "Contratos, responsabilidade civil, indenizações e questões patrimoniais com atendimento personalizado.",
  },
  {
    title: "Direito Trabalhista",
    description:
      "Defesa de empregados e empregadores em reclamações, acordos e consultoria preventiva.",
  },
  {
    title: "Direito Empresarial",
    description:
      "Constituição de empresas, contratos comerciais, fusões e assessoria jurídica contínua para negócios.",
  },
  {
    title: "Direito de Família",
    description:
      "Divórcios, pensão alimentícia, guarda de filhos e inventários conduzidos com sensibilidade e sigilo.",
  },
  {
    title: "Direito Tributário",
    description:
      "Planejamento tributário, defesas administrativas e judiciais para reduzir riscos fiscais.",
  },
  {
    title: "Direito Criminal",
    description:
      "Defesa técnica em todas as fases do processo penal, com atuação firme e estratégica.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-amber-700">
            Serviços
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Áreas de atuação
          </h2>
          <p className="mt-4 text-slate-600">
            Oferecemos suporte jurídico completo, da consultoria preventiva à
            representação em juízo, para pessoas físicas e empresas.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-slate-200 bg-white p-6 transition hover:border-amber-600/40 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
