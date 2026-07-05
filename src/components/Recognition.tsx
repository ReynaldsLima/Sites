// PLACEHOLDER: nenhuma publicação/entidade real está listada aqui — estes
// são só espaços reservados de layout. Substitua por selos de
// reconhecimento reais (ex.: Análise Advocacia 500, Chambers and Partners,
// Leaders League) apenas se o escritório for de fato reconhecido por eles;
// exibir o nome de uma publicação sem essa validação é uma alegação falsa,
// não só um placeholder de conteúdo.
const RECOGNITIONS = [
  "[Publicação / ranking]",
  "[Publicação / ranking]",
  "[Publicação / ranking]",
  "[Publicação / ranking]",
];

export default function Recognition() {
  return (
    <section id="reconhecimento" className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <span className="text-sm font-semibold uppercase tracking-widest text-accent">
          Reconhecimento
        </span>
        <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
          Avaliados pelo mercado jurídico
        </h2>
        <p className="mt-4 text-muted-foreground">
          Espaço reservado para classificações e prêmios reais do escritório —
          substitua pelos selos das publicações que efetivamente reconhecem a
          Barra Advogados.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
        {RECOGNITIONS.map((name, index) => (
          <div
            key={index}
            className="flex h-20 items-center justify-center rounded-md border border-dashed border-border px-4 text-center text-xs font-medium uppercase tracking-wide text-muted-foreground"
          >
            {name}
          </div>
        ))}
      </div>
    </section>
  );
}
