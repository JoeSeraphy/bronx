# Bronx Multimarcas — Landing Page

Landing page premium construída com **Next.js 14 (App Router) + TypeScript + Tailwind CSS + shadcn/ui**,
com animações via **Framer Motion**, **GSAP + ScrollTrigger** e **Lenis Smooth Scroll**.

## Rodando o projeto

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

Para build de produção:

```bash
npm run build
npm run start
```

## Stack e por que cada peça está aqui

| Camada | Tecnologia | Papel |
|---|---|---|
| Framework | Next.js 14 (App Router) | SSR/SSG real, roteamento por arquivo, `next/image`, `next/font` |
| Linguagem | TypeScript (strict mode) | Tipagem em dados, props e componentes |
| Estilo | Tailwind CSS + shadcn/ui | Design tokens da marca, componentes acessíveis e tipados |
| Microinterações | Framer Motion | Reveals ao scroll, stagger, magnetic buttons, tilt cards, spotlight |
| Scroll storytelling | GSAP + ScrollTrigger | Pin de seções, scroll horizontal, parallax de vídeo |
| Smooth scroll | Lenis | Sincronizado ao ScrollTrigger via `SmoothScrollProvider` |


## Performance / Lighthouse

Esse projeto usa `next/image` (otimização automática de imagem incl. AVIF/WebP),
`next/font` (fontes self-hosted, sem FOIT/CLS), SSR/SSG nativo do Next.js e code splitting
automático por rota — os itens que só um framework de verdade resolve. Ainda assim, vale o
mesmo alerta de sempre: vídeo autoplay, GSAP/Lenis e cursor customizado têm custo de
performance real. Se **Performance 95+ no Lighthouse for inegociável**, o ajuste fino
(reduzir partículas, lazy-mount do GSAP após interação, poster estático em vez de vídeo
autoplay em conexões lentas) é o próximo passo recomendado.
