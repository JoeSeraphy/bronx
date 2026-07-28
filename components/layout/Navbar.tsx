import Link from "next/link";

const links = [
  { href: "#marcas", label: "Marcas" },
  { href: "#novidades", label: "Novidades" },
  { href: "#loja", label: "Loja" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-[500] p-4">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between rounded-full border border-border bg-black/55 px-6 py-3 backdrop-blur-xl">
        <Link href="#" data-cursor="link" className="font-display text-xl uppercase">
          BRO<span className="text-neon">N</span>X
        </Link>
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  data-cursor="link"
                  className="text-xs font-medium uppercase tracking-wide text-grey transition-colors hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#contato"
          data-cursor="link"
          className="rounded-full bg-white px-5 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-wide text-black"
        >
          Entrar
        </a>
      </div>
    </header>
  );
}
