# LeadPulse — landing page

Landing page de SaaS para o LeadPulse. Astro + CSS puro (sem framework de UI), inspirada
estruturalmente no template MIT "Linea" (8bsite/app-landing-page-template), com copy,
design tokens e componentes originais.

## Stack

- [Astro](https://astro.build) (output estático)
- `@astrojs/sitemap` (sitemap.xml automático)
- CSS puro com design tokens (`src/styles/global.css`) — sem Tailwind/UI kit
- GSAP instalado e pronto para animações de scroll mais avançadas, se o projeto crescer

## Comandos

| Comando           | Ação                                         |
| ------------------ | --------------------------------------------- |
| `npm install`       | Instala as dependências                       |
| `npm run dev`       | Sobe o servidor local em `localhost:4321`     |
| `npm run build`     | Gera o site estático em `./dist/`             |
| `npm run preview`   | Faz preview do build de produção              |

## Estrutura

```
src/
  layouts/Base.astro      — <head>, meta tags, fontes
  components/              — Nav, Hero, Features, HowItWorks, SocialProof,
                              Pricing, FAQ, SignupForm, CTA, Footer,
                              CookieBanner, MobileStickyCTA
  pages/
    index.astro             — landing page
    obrigado.astro           — thank-you page (pós-cadastro)
    politica-de-privacidade.astro
    termos-de-uso.astro
    404.astro
```

## Antes de publicar — pendências reais

O conteúdo abaixo foi deixado como placeholder de propósito (nunca inventado como se fosse
real). Buscar no código por `TODO` encontra todos os pontos; os principais:

- **Domínio real**: trocar `https://leadpulse.example.com` em `astro.config.mjs`,
  `public/robots.txt` e no e-mail de contato (`src/components/Footer.astro`).
- **Preços**: `src/components/Pricing.astro` tem valores `R$ --` de exemplo.
- **Depoimentos e logos de clientes**: `src/components/SocialProof.astro` só tem placeholders
  com colchetes — não publicar sem depoimentos e logos reais, com autorização de uso.
- **Formulário de cadastro**: `src/components/SignupForm.astro` hoje só simula o envio e
  redireciona para `/obrigado`. Falta ligar a um endpoint real (ex.: Formspree, rota própria) —
  o trecho comentado no script já mostra onde.
- **Analytics**: snippet do GA4 comentado em `src/layouts/Base.astro` — falta o ID real.
- **Política de Privacidade / Termos de Uso**: os textos são rascunhos estruturais e
  **precisam de revisão jurídica** (LGPD) antes de publicar.
- **Integrações de CRM**: `Features.astro` e `FAQ.astro` citam integração com CRM sem citar
  nomes — confirmar quais CRMs serão suportados no lançamento.
- **Imagens/fotos reais**: o hero hoje usa um visual ilustrativo em CSS/SVG (sem fotos). Se
  entrarem fotos reais (equipe, produto, clientes), lembrar de `alt` descritivo e compressão.

## Checklist de entrega (`SITES/CLAUDE.md`)

Já cobertos: 404 customizada, title/description únicos por página, OG image, favicon
(SVG + PNG + apple-touch-icon), robots.txt, sitemap.xml, breakpoints responsivos, CTA fixo
mobile, estados de erro/carregamento no formulário, thank-you page, política de privacidade,
termos de uso, banner de cookies.

Pendentes de dado real (não técnicos): analytics com ID real, preços reais, depoimentos reais,
revisão jurídica dos textos legais, fotos reais com alt text, domínio de produção.
