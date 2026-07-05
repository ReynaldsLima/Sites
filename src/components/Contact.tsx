"use client";

import { useState, type FormEvent } from "react";

const INFO = [
  {
    label: "Endereço",
    value: "Av. Paulista, 1000 — São Paulo, SP",
  },
  {
    label: "Telefone",
    value: "(11) 4000-1234",
  },
  {
    label: "E-mail",
    value: "contato@barraadvogados.com.br",
  },
  {
    label: "Horário",
    value: "Segunda a sexta, 9h às 18h",
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section id="contato" className="bg-primary py-24 text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-accent-on-dark">
            Contato
          </span>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Vamos conversar sobre o seu caso
          </h2>
          <p className="mt-4 text-stone-300">
            Preencha o formulário ou utilize um dos canais abaixo. Retornamos
            em até um dia útil.
          </p>

          <dl className="mt-8 space-y-4">
            {INFO.map((item) => (
              <div key={item.label} className="flex flex-col">
                <dt className="text-xs font-semibold uppercase tracking-widest text-stone-400">
                  {item.label}
                </dt>
                <dd className="text-stone-100">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rounded-xl bg-white p-6 sm:p-8">
          {sent ? (
            <div
              role="status"
              aria-live="polite"
              className="flex h-full flex-col items-center justify-center gap-2 py-12 text-center"
            >
              <p className="text-lg font-semibold text-foreground">
                Mensagem enviada!
              </p>
              <p className="text-sm text-muted-foreground">
                Obrigado pelo contato. Retornaremos em breve.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm font-medium text-foreground"
                >
                  Nome
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-md border border-border px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium text-foreground"
                >
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-md border border-border px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-1 block text-sm font-medium text-foreground"
                >
                  Telefone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full rounded-md border border-border px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm font-medium text-foreground"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full rounded-md border border-border px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <button
                type="submit"
                className="w-full cursor-pointer rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-accent"
              >
                Enviar mensagem
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
