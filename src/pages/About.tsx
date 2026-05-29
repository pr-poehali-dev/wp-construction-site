import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Icon from "@/components/ui/icon";
import { HERO_IMG, REVIEWS } from "@/lib/siteData";

const FEATURES = [
  { label: "Собственные бригады", icon: "Users" },
  { label: "Фиксированная цена", icon: "FileCheck" },
  { label: "Гарантия 5 лет", icon: "ShieldCheck" },
  { label: "Договор и сроки", icon: "FileSignature" },
];

const About = () => (
  <div>
    <PageHero eyebrow="О компании" title="Финский Домик" subtitle="Строим энергоэффективные каркасные дома по скандинавской технологии с 2010 года." />

    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="section-fade">
          <div className="accent-line mb-6" />
          <p className="font-body text-xs tracking-[0.3em] uppercase text-[hsl(35,60%,52%)] mb-4">Кто мы</p>
          <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] leading-tight mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Строим финские дома<br /><em className="not-italic font-semibold">с 2010 года</em>
          </h2>
          <p className="font-body text-sm text-[#555] leading-relaxed mb-6">
            «Финский Домик» — компания полного цикла. Мы проектируем и строим энергоэффективные каркасные дома по скандинавской технологии в Санкт-Петербурге, Ленинградской области и Москве.
          </p>
          <p className="font-body text-sm text-[#555] leading-relaxed mb-10">
            Собственные бригады, прозрачные сметы без скрытых доплат, фиксированная цена в договоре и гарантия 5 лет на конструктив. За 14 лет мы построили более 350 домов.
          </p>
          <div className="grid grid-cols-2 gap-8">
            {FEATURES.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#1a1a1a] flex items-center justify-center flex-shrink-0">
                  <Icon name={item.icon} fallback="CircleAlert" size={16} className="text-[hsl(35,60%,52%)]" />
                </div>
                <span className="font-body text-xs font-medium text-[#333]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="section-fade" style={{ transitionDelay: "0.2s" }}>
          <div className="relative">
            <div className="w-full h-80 md:h-96 overflow-hidden">
              <img src={HERO_IMG} alt="О компании" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[hsl(35,60%,52%)] text-white p-6 w-40">
              <div className="text-3xl font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>14</div>
              <div className="font-body text-xs tracking-wider uppercase mt-1">лет<br />на рынке</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-24 md:py-32 bg-[#f0ede8]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading eyebrow="Что говорят клиенты" title="Отзывы" center />
        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((r, i) => (
            <div key={i} className="bg-white p-8 section-fade" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => <Icon key={j} name="Star" size={15} className="text-[hsl(35,60%,52%)] fill-[hsl(35,60%,52%)]" />)}
              </div>
              <p className="font-body text-sm text-[#555] leading-relaxed mb-6 italic">«{r.text}»</p>
              <div className="pt-4 border-t border-[#eee]">
                <p className="font-body text-sm font-semibold text-[#1a1a1a]">{r.name}</p>
                <p className="font-body text-xs text-[#999]">{r.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
