import Marquee from "@/components/shared/Marquee";
import { brands } from "@/lib/data";

export default function LogoSlider() {
  return (
    <div className="border-y border-border py-16">
      <Marquee duration={22} className="no-scrollbar">
        <div className="flex items-center gap-20 pr-20">
          {brands.map((b) => (
            <span
              key={b.code}
              className="font-display whitespace-nowrap text-2xl uppercase text-grey/50 transition-colors hover:text-neon"
            >
              {b.name}
            </span>
          ))}
        </div>
      </Marquee>
    </div>
  );
}
