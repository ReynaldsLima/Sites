export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-white py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="font-serif text-lg font-semibold text-primary">
            Barra
          </span>
          <span className="h-3.5 w-[3px] rounded-full bg-accent" aria-hidden />
          <span className="font-serif text-lg font-light text-primary">
            Advogados
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {year} Barra Advogados. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
