export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-primary text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #b45309 0%, transparent 40%), radial-gradient(circle at 80% 60%, #b45309 0%, transparent 45%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-[3px_1fr] gap-6 px-6 py-28 sm:gap-10 sm:py-36">
        {/* The bar: a literal rail, the courtroom "barra" the firm is named for. */}
        <div className="rounded-full bg-accent" aria-hidden />

        <div className="flex flex-col items-start gap-6">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-amber-300">
            Advocacia especializada
          </span>

          <h1 className="max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
            Defendendo seus direitos com <em className="italic">ética</em>,
            agilidade e resultado.
          </h1>

          <p className="max-w-xl text-lg text-slate-200">
            A Barra Advogados oferece assessoria jurídica completa para
            pessoas físicas e empresas, com atendimento próximo e soluções sob
            medida para cada caso.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#contato"
              className="cursor-pointer rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition hover:bg-amber-600"
            >
              Agende uma consulta
            </a>
            <a
              href="#servicos"
              className="cursor-pointer rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Conheça nossos serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
