import { Link, useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { HERO_IMG, HOUSE_2, PROJECTS, ADVANTAGES, TECH_LAYERS } from "@/lib/siteData";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* HERO */}
      <section className="relative h-[88vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMG})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/80 via-[#1a1a1a]/45 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-xl">
            <div className="accent-line mb-6" />
            <p className="font-body text-xs tracking-[0.3em] uppercase text-[hsl(35,60%,52%)] mb-4 opacity-0 animate-fade-up delay-100" style={{ animationFillMode: "forwards" }}>
              Скандинавская технология
            </p>
            <h1 className="text-4xl md:text-6xl font-light text-white leading-tight mb-6 opacity-0 animate-fade-up delay-200" style={{ animationFillMode: "forwards", fontFamily: "'Cormorant Garamond', serif" }}>
              Финские каркасные дома<br /><em className="not-italic font-semibold text-[hsl(35,60%,62%)]">под ключ</em>
            </h1>
            <p className="font-body text-sm text-white/70 leading-relaxed mb-10 opacity-0 animate-fade-up delay-300" style={{ animationFillMode: "forwards" }}>
              Энергоэффективные дома по скандинавской технологии.<br />
              Строительство от 2 месяцев. Гарантия 5 лет. Фиксированная цена.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up delay-400" style={{ animationFillMode: "forwards" }}>
              <Link to="/projects" className="font-body text-xs font-semibold tracking-widest uppercase bg-[hsl(35,60%,52%)] text-white px-8 py-4 hover:bg-[hsl(35,60%,42%)] transition-colors duration-300 text-center">
                Каталог проектов
              </Link>
              <Link to="/contacts" className="font-body text-xs font-semibold tracking-widest uppercase border border-white/50 text-white px-8 py-4 hover:bg-white/10 transition-colors duration-300 text-center">
                Рассчитать стоимость
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="bg-[#1a1a1a] py-14">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {ADVANTAGES.map((s, i) => (
            <div key={i} className="text-center section-fade" style={{ transitionDelay: `${i * 0.1}s` }}>
              <Icon name={s.icon} fallback="CircleAlert" size={22} className="text-[hsl(35,60%,52%)] mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-semibold text-white mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{s.value}</div>
              <div className="font-body text-xs tracking-widest uppercase text-white/50">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading eyebrow="Каталог" title="Популярные проекты" center />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.slice(0, 3).map((p, i) => <ProjectCard key={p.name} p={p} delay={i * 0.07} />)}
          </div>
          <div className="text-center mt-12 section-fade">
            <Link to="/projects" className="inline-block font-body text-xs font-semibold tracking-widest uppercase border border-[#1a1a1a] text-[#1a1a1a] px-8 py-4 hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300">
              Все проекты домов
            </Link>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY PREVIEW */}
      <section className="py-24 md:py-32 bg-[#f0ede8]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="section-fade">
            <div className="accent-line mb-6" />
            <p className="font-body text-xs tracking-[0.3em] uppercase text-[hsl(35,60%,52%)] mb-4">Технология</p>
            <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] leading-tight mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Скандинавский<br /><em className="not-italic font-semibold">каркас</em>
            </h2>
            <p className="font-body text-sm text-[#555] leading-relaxed mb-10">
              Мы строим по финской технологии: сухая доска камерной сушки, многослойное утепление и правильный «пирог» стены. Такой дом теплее, тише и долговечнее.
            </p>
            <div className="space-y-6 mb-10">
              {TECH_LAYERS.slice(0, 3).map((t, i) => (
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
            <Link to="/technology" className="inline-block font-body text-xs font-semibold tracking-widest uppercase text-[hsl(35,60%,52%)] hover:text-[#1a1a1a] transition-colors">
              Подробнее о технологии →
            </Link>
          </div>
          <div className="section-fade" style={{ transitionDelay: "0.2s" }}>
            <div className="relative">
              <div className="w-full h-[28rem] overflow-hidden">
                <img src={HOUSE_2} alt="Технология строительства" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[hsl(35,60%,52%)] text-white p-6 w-44">
                <div className="text-3xl font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>−40%</div>
                <div className="font-body text-xs tracking-wider uppercase mt-1">на отопление</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-28 bg-[#1a1a1a]">
        <div className="max-w-3xl mx-auto px-6 text-center section-fade">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Готовы построить <em className="not-italic font-semibold text-[hsl(35,60%,62%)]">свой дом?</em>
          </h2>
          <p className="font-body text-sm text-white/50 mb-10 max-w-lg mx-auto">
            Оставьте заявку — менеджер подберёт проект, рассчитает смету и ответит на все вопросы в течение 2 часов.
          </p>
          <button onClick={() => navigate("/contacts")} className="font-body text-xs font-semibold tracking-widest uppercase bg-[hsl(35,60%,52%)] text-white px-10 py-4 hover:bg-[hsl(35,60%,42%)] transition-colors duration-300">
            Получить расчёт бесплатно
          </button>
        </div>
      </section>
    </div>
  );
};

export default Index;
