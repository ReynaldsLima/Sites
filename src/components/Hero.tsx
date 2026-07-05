export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-primary text-white"
    >
      {/* Ambient light drifting behind the glass, like sun through forum windows. */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="animate-hero-drift-a absolute -top-24 right-[-10%] h-96 w-96 rounded-full bg-accent/30 blur-3xl" />
        <div className="animate-hero-drift-b absolute bottom-[-20%] right-[10%] h-80 w-80 rounded-full bg-accent-on-dark/20 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-28 sm:py-36 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="grid grid-cols-[3px_1fr] gap-6 sm:gap-10">
          {/* The bar: a literal rail, the courtroom "barra" the firm is named for. */}
          <div className="rounded-full bg-accent" aria-hidden />

          <div className="flex flex-col items-start gap-6">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent-on-dark">
              Advocacia especializada
            </span>

            <h1 className="max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
              Defendendo seus direitos com <em className="italic">ética</em>,
              agilidade e resultado.
            </h1>

            <p className="max-w-xl text-lg text-stone-300">
              A Barra Advogados oferece assessoria jurídica completa para
              pessoas físicas e empresas, com atendimento próximo e soluções
              sob medida para cada caso.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contato"
                className="cursor-pointer rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition hover:bg-accent/90"
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

        {/* Glass panel: the "§" (section sign) is the mark lawyers write by hand
            on every statute reference — used here as the hero's signature. */}
        <div
          aria-hidden
          className="relative hidden h-72 w-64 shrink-0 items-center justify-center overflow-hidden rounded-3xl border border-white/15 bg-white/10 shadow-2xl backdrop-blur-xl lg:flex"
        >
          <span className="font-serif text-[11rem] leading-none text-white/25">
            §
          </span>
        </div>
      </div>
    </section>
  );
}
