"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon, InstagramIcon } from "@/components/shared/Icons";
import { SITE } from "@/lib/data";

export default function Footer() {
  const [sent, setSent] = useState(false);

  return (
    <footer id="contato" className="relative bg-black">
      {/* linha animada no topo — "scan" neon deslizando em loop */}
      <div className="relative h-px w-full overflow-hidden bg-border">
        <motion.div
          className="absolute top-0 h-full w-2/5 bg-gradient-to-r from-transparent via-neon to-transparent shadow-[0_0_12px_rgba(203,255,61,0.6)]"
          animate={{ x: ["-100%", "250%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container">
        <div className="flex justify-between gap-8 py-20 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="font-display mb-4 inline-block text-2xl uppercase">
              BRO<span className="text-neon">N</span>X
            </span>
            <p className="mb-6 max-w-[32ch] text-sm leading-relaxed text-[#D8D8D8]">
              Multimarcas de streetwear premium. Curadoria urbana direto da quebrada para o mundo.
            </p>
            <div className="flex gap-3">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="link"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-neon"
              >
                <InstagramIcon className="h-4 w-4 text-grey" />
              </a>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="link"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-neon"
              >
                <WhatsAppIcon className="h-4 w-4 text-grey" />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="mb-5 font-mono text-[11px] uppercase tracking-wide opacity-85">Institucional</h4>
            <ul className="flex flex-col gap-3 text-sm text-[#D8D8D8]">
              <li><a href="#">Sobre</a></li>
              <li><a href="#">Manifesto</a></li>
              <li><a href="#">Trocas</a></li>
              <li><a href="#">Termos</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="mb-3 font-mono text-[11px] uppercase tracking-wide text-neon">Fale com a gente</h4>
            <p className="mb-4 text-sm leading-relaxed text-[#D8D8D8]">
              {SITE.address.street}
              <br />
              {SITE.address.district} — {SITE.address.city}, {SITE.address.state}
            </p>
            <div className="h-32 overflow-hidden rounded-2xl border border-border">
              <iframe
                src={SITE.mapsEmbed}
                loading="lazy"
                title="Mapa da loja Bronx Multimarcas"
                className="h-full w-full grayscale invert-[92%] contrast-[84%] brightness-[96%]"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border py-6 font-mono text-[11px] text-neutral-500">
          <span>© 2026 Bronx Multimarcas.</span>
          <span>Rio de Janeiro, Brasil</span>
        </div>
      </div>
    </footer>
  );
}
