export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-semibold text-slate-900">Barra</span>
          <span className="text-lg font-light text-amber-700">
            Advogados
          </span>
        </div>
        <p className="text-sm text-slate-500">
          © {year} Barra Advogados. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
