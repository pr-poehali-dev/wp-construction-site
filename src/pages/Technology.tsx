import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Icon from "@/components/ui/icon";
import { HOUSE_2, TECH_LAYERS, STAGES } from "@/lib/siteData";

const Technology = () => (
  <div>
    <PageHero eyebrow="Технология" title="Скандинавский каркас" subtitle="Финская технология строительства: сухая доска, многослойное утепление и правильный «пирог» стены." />

    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="section-fade" style={{ transitionDelay: "0.1s" }}>
          <div className="relative">
            <div className="w-full h-[28rem] overflow-hidden">
              <img src={HOUSE_2} alt="Технология строительства" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[hsl(35,60%,52%)] text-white p-6 w-44">
              <div className="text-3xl font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>−40%</div>
              <div className="font-body text-xs tracking-wider uppercase mt-1">на отопление</div>
            </div>
          </div>
        </div>
        <div className="section-fade">
          <div className="accent-line mb-6" />
          <p className="font-body text-xs tracking-[0.3em] uppercase text-[hsl(35,60%,52%)] mb-4">Из чего состоит дом</p>
          <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] leading-tight mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Пирог стены<br /><em className="not-italic font-semibold">по слоям</em>
          </h2>
          <div className="space-y-6">
            {TECH_LAYERS.map((t, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1a1a1a] flex items-center justify-center flex-shrink-0">
                  <Icon name={t.icon} fallback="CircleAlert" size={18} className="text-[hsl(35,60%,52%)]" />
                </div>
                <div>
                  <h3 className="text-lg text-[#1a1a1a]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{t.title}</h3>
                  <p className="font-body text-sm text-[#666] leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="py-24 md:py-32 bg-[#f0ede8]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading eyebrow="Как мы работаем" title="Этапы строительства" center />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#ddd]">
          {STAGES.map((s, i) => (
            <div key={i} className="bg-[#f7f6f4] p-8 hover:bg-white transition-colors duration-300 section-fade" style={{ transitionDelay: `${(i % 3) * 0.07}s` }}>
              <div className="text-4xl font-semibold text-[hsl(35,60%,52%)]/30 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{s.num}</div>
              <h3 className="text-xl font-semibold text-[#1a1a1a] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{s.title}</h3>
              <p className="font-body text-sm text-[#666] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Technology;
