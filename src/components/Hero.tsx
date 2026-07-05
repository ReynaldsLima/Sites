export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-slate-900 text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #b45309 0%, transparent 40%), radial-gradient(circle at 80% 60%, #b45309 0%, transparent 45%)",
        }}
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-28 sm:py-36">
        <span className="rounded-full border border-amber-600/40 bg-amber-600/10 px-4 py-1 text-xs font-medium uppercase tracking-widest text-amber-500">
          Advocacia especializada
        </span>

        <h1 className="max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
          Defendendo seus direitos com ética, agilidade e resultado.
        </h1>

        <p className="max-w-xl text-lg text-slate-300">
          A Barra Advogados oferece assessoria jurídica completa para pessoas
          físicas e empresas, com atendimento próximo e soluções sob medida
          para cada caso.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="#contato"
            className="rounded-md bg-amber-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-600"
          >
            Agende uma consulta
          </a>
          <a
            href="#servicos"
            className="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Conheça nossos serviços
          </a>
        </div>
      </div>
    </section>
  );
}
