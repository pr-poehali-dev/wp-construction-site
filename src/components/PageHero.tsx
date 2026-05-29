import { HERO_IMG } from "@/lib/siteData";

interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

const PageHero = ({ eyebrow, title, subtitle }: Props) => (
  <section className="relative h-[42vh] min-h-[320px] flex items-center overflow-hidden">
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMG})` }} />
    <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/85 via-[#1a1a1a]/55 to-[#1a1a1a]/30" />
    <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
      <div className="accent-line mb-6" />
      <p className="font-body text-xs tracking-[0.3em] uppercase text-[hsl(35,60%,52%)] mb-4">{eyebrow}</p>
      <h1 className="text-4xl md:text-6xl font-light text-white leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
        {title}
      </h1>
      {subtitle && <p className="font-body text-sm text-white/60 mt-4 max-w-xl">{subtitle}</p>}
    </div>
  </section>
);

export default PageHero;
