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

> **Nota:** o build precisa de acesso à internet na primeira vez (o `next/font/google`
> baixa os arquivos de fonte no momento do build). Isso já foi validado — o projeto
> compila sem erros de TypeScript e sem erros de build (`tsc --noEmit` e `next build`
> rodados com sucesso durante o desenvolvimento).

## Stack e por que cada peça está aqui

| Camada | Tecnologia | Papel |
|---|---|---|
| Framework | Next.js 14 (App Router) | SSR/SSG real, roteamento por arquivo, `next/image`, `next/font` |
| Linguagem | TypeScript (strict mode) | Tipagem em dados, props e componentes |
| Estilo | Tailwind CSS + shadcn/ui | Design tokens da marca, componentes acessíveis e tipados |
| Microinterações | Framer Motion | Reveals ao scroll, stagger, magnetic buttons, tilt cards, spotlight |
| Scroll storytelling | GSAP + ScrollTrigger | Pin de seções, scroll horizontal, parallax de vídeo |
| Smooth scroll | Lenis | Sincronizado ao ScrollTrigger via `SmoothScrollProvider` |

## Arquitetura de pastas

```
app/
  layout.tsx        -> fontes (next/font), metadata/SEO, Schema.org, providers globais
  page.tsx           -> composição das seções
  sitemap.ts          -> sitemap.xml automático
  robots.ts           -> robots.txt automático
  globals.css         -> tokens de cor, keyframes customizadas, acessibilidade

components/
  ui/                 -> primitivos shadcn (button, input) com variantes tipadas (cva)
  shared/             -> peças reutilizáveis entre seções:
    SmoothScrollProvider.tsx   Lenis + GSAP ScrollTrigger
    CustomCursor.tsx           cursor personalizado (Framer Motion springs)
    ScrollProgress.tsx         barra de progresso de scroll
    RevealOnScroll.tsx         fade-up / fade-left / fade-right / zoom / scale / blur + stagger
    Marquee.tsx                 marquee infinito (logos, "FOLLOW US", depoimentos)
    MagneticButton.tsx          efeito magnético em qualquer botão/link
    TiltCard.tsx                 hover 3D / tilt
    Icons.tsx                    ícones SVG (WhatsApp, Instagram, seta)
  layout/
    Navbar.tsx, Footer.tsx
  sections/
    Hero.tsx, LogoSlider.tsx, Brands.tsx, Manifesto.tsx, Novidades.tsx,
    LojaFisica.tsx, Instagram.tsx, Testimonials.tsx, FinalCTA.tsx

lib/
  data.ts    -> fonte única de dados tipados (marcas, produtos, posts, depoimentos, endereço)
  utils.ts   -> helper `cn` (padrão shadcn/ui)
```

## Antes de publicar — troque os placeholders

- **WhatsApp**: número `5521999999999` em `lib/data.ts` (`SITE.whatsapp`)
- **Endereço / mapa**: `SITE.address` e `SITE.mapsEmbed` / `SITE.mapsDirections` em `lib/data.ts`
- **Instagram**: `SITE.instagram` em `lib/data.ts`
- **URL do site**: `SITE.url` em `lib/data.ts` (usado no `metadataBase`, Open Graph e Schema.org)
- **Imagens**: todas usam Unsplash como placeholder (`images.unsplash.com`, já configurado em
  `next.config.mjs` → `images.remotePatterns`). Troque pelas fotos reais da Bronx — o
  `next/image` já cuida de AVIF/WebP, lazy loading e dimensionamento automaticamente.
- **Vídeo do hero**: `components/sections/Hero.tsx`, troque a tag `<source>` pelo vídeo real.

## Performance / Lighthouse

Esse projeto usa `next/image` (otimização automática de imagem incl. AVIF/WebP),
`next/font` (fontes self-hosted, sem FOIT/CLS), SSR/SSG nativo do Next.js e code splitting
automático por rota — os itens que só um framework de verdade resolve. Ainda assim, vale o
mesmo alerta de sempre: vídeo autoplay, GSAP/Lenis e cursor customizado têm custo de
performance real. Se **Performance 95+ no Lighthouse for inegociável**, o ajuste fino
(reduzir partículas, lazy-mount do GSAP após interação, poster estático em vez de vídeo
autoplay em conexões lentas) é o próximo passo recomendado.
