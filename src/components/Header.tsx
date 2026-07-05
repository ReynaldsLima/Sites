"use client";

import { useState } from "react";

const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="text-xl font-semibold tracking-tight text-slate-900">
            Barra
          </span>
          <span className="text-xl font-light tracking-tight text-amber-700">
            Advogados
          </span>
        </a>

        <nav className="hidden gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-amber-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden rounded-md bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-amber-700 md:inline-block"
        >
          Fale Conosco
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 md:hidden"
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-slate-200 bg-white px-6 py-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-amber-700"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-md bg-slate-900 px-4 py-2.5 text-center text-sm font-medium text-white"
          >
            Fale Conosco
          </a>
        </nav>
      )}
    </header>
  );
}
