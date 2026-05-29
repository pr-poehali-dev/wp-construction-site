import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/0c1dc591-22d6-46c9-8584-ab371048c4ec/files/19efcd16-f142-479f-87f5-e6f3884cde5f.jpg";

const NAV_ITEMS = [
  { label: "Главная", href: "#home" },
  { label: "О компании", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "Галерея", href: "#gallery" },
  { label: "Контакты", href: "#contacts" },
];

const SERVICES = [
  { icon: "Building2", title: "Строительство под ключ", desc: "Полный цикл от проектирования до сдачи объекта. Жилые и коммерческие здания любой сложности." },
  { icon: "Hammer", title: "Капитальный ремонт", desc: "Комплексный ремонт помещений с заменой коммуникаций, перепланировкой и отделкой." },
  { icon: "Ruler", title: "Проектирование", desc: "Разработка архитектурных и инженерных проектов, согласование документации." },
  { icon: "HardHat", title: "Промышленное строительство", desc: "Возведение производственных и складских комплексов, административных зданий." },
  { icon: "Wrench", title: "Инженерные системы", desc: "Монтаж отопления, вентиляции, электрики, водоснабжения и канализации." },
  { icon: "TreePine", title: "Благоустройство", desc: "Ландшафтный дизайн, мощение, озеленение и устройство малых архитектурных форм." },
];

const PORTFOLIO = [
  { title: "ЖК «Северная звезда»", type: "Жилой комплекс", year: "2024", area: "12 400 м²", color: "bg-stone-200" },
  { title: "Бизнес-центр «Форум»", type: "Коммерческая недвижимость", year: "2023", area: "8 700 м²", color: "bg-zinc-300" },
  { title: "Коттеджный посёлок", type: "Частное строительство", year: "2023", area: "5 200 м²", color: "bg-neutral-300" },
  { title: "Склад-логистика «Восток»", type: "Промышленный объект", year: "2022", area: "22 000 м²", color: "bg-stone-300" },
  { title: "Школа №47", type: "Социальный объект", year: "2022", area: "9 100 м²", color: "bg-zinc-200" },
  { title: "Торговый центр «Меридиан»", type: "Коммерческая недвижимость", year: "2021", area: "15 300 м²", color: "bg-neutral-200" },
];

const GALLERY_COLORS = [
  "bg-stone-400", "bg-zinc-500", "bg-neutral-400", "bg-stone-500",
  "bg-zinc-400", "bg-neutral-500", "bg-stone-300", "bg-zinc-300",
];

const STATS = [
  { value: "150+", label: "Завершённых объектов" },
  { value: "12", label: "Лет на рынке" },
  { value: "98%", label: "Довольных клиентов" },
  { value: "200+", label: "Специалистов в команде" },
];

function useSectionFade() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const els = document.querySelectorAll(".section-fade");
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({ name: "", phone: "", type: "", area: "", comment: "" });
  const [consultData, setConsultData] = useState({ name: "", phone: "" });
  const [formSent, setFormSent] = useState(false);
  const [consultSent, setConsultSent] = useState(false);

  useSectionFade();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = NAV_ITEMS.map((n) => n.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleEstimate = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  const handleConsult = (e: React.FormEvent) => {
    e.preventDefault();
    setConsultSent(true);
  };

  return (
    <div className="min-h-screen bg-[#f7f6f4] text-[#1a1a1a]">
      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <button onClick={() => scrollTo("#home")} className="font-display text-xl font-semibold tracking-wider text-[#1a1a1a]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            СТРОЙГРУПП
          </button>
          <ul className="hidden lg:flex gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => scrollTo(item.href)}
                  className={`nav-link font-body text-xs font-medium tracking-widest uppercase transition-colors ${
                    activeSection === item.href.replace("#", "")
                      ? "text-[hsl(35,60%,52%)]"
                      : "text-[#1a1a1a] hover:text-[hsl(35,60%,52%)]"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => scrollTo("#contacts")}
            className="hidden lg:block font-body text-xs font-semibold tracking-widest uppercase bg-[#1a1a1a] text-white px-5 py-2.5 hover:bg-[hsl(35,60%,52%)] transition-colors duration-300"
          >
            Связаться
          </button>
          <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="font-body text-sm font-medium tracking-widest uppercase text-left text-[#1a1a1a] hover:text-[hsl(35,60%,52%)] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMG})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/80 via-[#1a1a1a]/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-xl">
            <div className="accent-line mb-6" />
            <p className="font-body text-xs tracking-[0.3em] uppercase text-[hsl(35,60%,52%)] mb-4 opacity-0 animate-fade-up delay-100" style={{ animationFillMode: "forwards" }}>
              Строительство и проектирование
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-light text-white leading-tight mb-6 opacity-0 animate-fade-up delay-200" style={{ animationFillMode: "forwards", fontFamily: "'Cormorant Garamond', serif" }}>
              Строим <em className="not-italic font-semibold text-[hsl(35,60%,62%)]">будущее</em><br />
              с точностью<br />до миллиметра
            </h1>
            <p className="font-body text-sm text-white/70 leading-relaxed mb-10 opacity-0 animate-fade-up delay-300" style={{ animationFillMode: "forwards" }}>
              12 лет опыта. Более 150 завершённых объектов.<br />
              Жилое, коммерческое и промышленное строительство.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up delay-400" style={{ animationFillMode: "forwards" }}>
              <button onClick={() => scrollTo("#estimate")} className="font-body text-xs font-semibold tracking-widest uppercase bg-[hsl(35,60%,52%)] text-white px-8 py-4 hover:bg-[hsl(35,60%,42%)] transition-colors duration-300">
                Рассчитать смету
              </button>
              <button onClick={() => scrollTo("#portfolio")} className="font-body text-xs font-semibold tracking-widest uppercase border border-white/50 text-white px-8 py-4 hover:bg-white/10 transition-colors duration-300">
                Наши проекты
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-body text-[10px] tracking-widest uppercase text-white/50">Прокрутите вниз</span>
          <Icon name="ChevronDown" size={16} className="text-white/50 animate-bounce" />
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#1a1a1a] py-14">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <div key={i} className="text-center section-fade" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="text-4xl md:text-5xl font-semibold text-[hsl(35,60%,52%)] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{s.value}</div>
              <div className="font-body text-xs tracking-widest uppercase text-white/50">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="section-fade">
            <div className="accent-line mb-6" />
            <p className="font-body text-xs tracking-[0.3em] uppercase text-[hsl(35,60%,52%)] mb-4">О компании</p>
            <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] leading-tight mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Надёжность, подкреплённая<br /><em className="not-italic font-semibold">12 годами опыта</em>
            </h2>
            <p className="font-body text-sm text-[#555] leading-relaxed mb-6">
              «СтройГрупп» — строительная компания полного цикла. Мы реализуем проекты любой сложности: от частных домов до масштабных коммерческих объектов и промышленных комплексов.
            </p>
            <p className="font-body text-sm text-[#555] leading-relaxed mb-10">
              В нашей команде работают опытные инженеры, архитекторы и строители. Мы строго соблюдаем сроки, используем сертифицированные материалы и обеспечиваем прозрачность на каждом этапе.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {[
                { label: "Собственная техника", icon: "Truck" },
                { label: "Гарантия 5 лет", icon: "ShieldCheck" },
                { label: "Соблюдение сроков", icon: "Clock" },
                { label: "Лицензии СРО", icon: "Award" },
              ].map((item, i) => (
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
                <img src={HERO_IMG} alt="О компании" className="w-full h-full object-cover grayscale" />
                <div className="absolute inset-0 bg-[#1a1a1a]/20" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[hsl(35,60%,52%)] text-white p-6 w-40">
                <div className="text-3xl font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>12</div>
                <div className="font-body text-xs tracking-wider uppercase mt-1">лет<br />опыта</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 md:py-32 bg-[#f0ede8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-fade text-center mb-16">
            <div className="accent-line mx-auto mb-6" />
            <p className="font-body text-xs tracking-[0.3em] uppercase text-[hsl(35,60%,52%)] mb-4">Что мы делаем</p>
            <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Наши услуги</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#ddd]">
            {SERVICES.map((s, i) => (
              <div key={i} className="bg-[#f0ede8] p-8 hover:bg-white transition-colors duration-300 group section-fade" style={{ transitionDelay: `${i * 0.07}s` }}>
                <div className="w-10 h-10 border border-[#1a1a1a] flex items-center justify-center mb-6 group-hover:bg-[#1a1a1a] transition-colors duration-300">
                  <Icon name={s.icon} fallback="CircleAlert" size={18} className="text-[#1a1a1a] group-hover:text-[hsl(35,60%,52%)] transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{s.title}</h3>
                <p className="font-body text-sm text-[#666] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-fade text-center mb-16">
            <div className="accent-line mx-auto mb-6" />
            <p className="font-body text-xs tracking-[0.3em] uppercase text-[hsl(35,60%,52%)] mb-4">Наши работы</p>
            <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Портфолио</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO.map((p, i) => (
              <div key={i} className="group cursor-pointer section-fade" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className={`${p.color} h-52 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[#1a1a1a]/0 group-hover:bg-[#1a1a1a]/60 transition-all duration-300 flex items-center justify-center">
                    <span className="font-body text-xs tracking-widest uppercase text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white px-4 py-2">
                      Подробнее
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-[hsl(35,60%,52%)] text-white px-2 py-1">
                    <span className="font-body text-xs font-medium">{p.year}</span>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="font-body text-[10px] tracking-widest uppercase text-[#999] mb-1">{p.type} · {p.area}</p>
                  <h3 className="text-xl text-[#1a1a1a] group-hover:text-[hsl(35,60%,52%)] transition-colors" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{p.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 md:py-32 bg-[#f0ede8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-fade text-center mb-16">
            <div className="accent-line mx-auto mb-6" />
            <p className="font-body text-xs tracking-[0.3em] uppercase text-[hsl(35,60%,52%)] mb-4">Фотоматериалы</p>
            <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Галерея</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {GALLERY_COLORS.map((c, i) => (
              <div
                key={i}
                className={`${c} section-fade overflow-hidden group cursor-pointer ${i === 0 || i === 5 ? "md:col-span-2 h-64" : "h-40"}`}
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <div className="w-full h-full group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                  <Icon name="Image" size={28} className="text-white/30 group-hover:text-white/60 transition-colors" />
                </div>
              </div>
            ))}
          </div>
          <p className="font-body text-xs text-center text-[#999] mt-6 tracking-wide">
            Загрузите фотографии ваших объектов — и мы добавим их в галерею
          </p>
        </div>
      </section>

      {/* ESTIMATE FORM */}
      <section id="estimate" className="py-24 md:py-32 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div className="section-fade">
            <div className="accent-line mb-6" />
            <p className="font-body text-xs tracking-[0.3em] uppercase text-[hsl(35,60%,52%)] mb-4">Калькулятор</p>
            <h2 className="text-4xl md:text-5xl font-light text-white leading-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Рассчитайте<br /><em className="not-italic font-semibold text-[hsl(35,60%,62%)]">стоимость</em><br />вашего проекта
            </h2>
            <p className="font-body text-sm text-white/50 leading-relaxed mb-8">
              Заполните форму — наш менеджер свяжется с вами в течение 2 часов и подготовит предварительный расчёт сметы бесплатно.
            </p>
            <div className="space-y-4">
              {[
                { icon: "MessageCircle", text: "Бесплатная консультация" },
                { icon: "FileText", text: "Подробная смета в PDF" },
                { icon: "Clock", text: "Ответ в течение 2 часов" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Icon name={item.icon} fallback="CircleAlert" size={16} className="text-[hsl(35,60%,52%)]" />
                  <span className="font-body text-sm text-white/60">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="section-fade" style={{ transitionDelay: "0.2s" }}>
            {formSent ? (
              <div className="bg-white/5 border border-white/10 p-10 text-center">
                <div className="w-14 h-14 bg-[hsl(35,60%,52%)] flex items-center justify-center mx-auto mb-5">
                  <Icon name="Check" size={24} className="text-white" />
                </div>
                <h3 className="text-2xl text-white mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Заявка отправлена!</h3>
                <p className="font-body text-sm text-white/50">Менеджер свяжется с вами в течение 2 часов.</p>
              </div>
            ) : (
              <form onSubmit={handleEstimate} className="space-y-4">
                <div>
                  <label className="font-body text-[10px] tracking-widest uppercase text-white/40 block mb-2">Ваше имя *</label>
                  <input required type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Иван Петров"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/20 font-body text-sm px-4 py-3 focus:outline-none focus:border-[hsl(35,60%,52%)] transition-colors" />
                </div>
                <div>
                  <label className="font-body text-[10px] tracking-widest uppercase text-white/40 block mb-2">Телефон *</label>
                  <input required type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+7 (999) 000-00-00"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/20 font-body text-sm px-4 py-3 focus:outline-none focus:border-[hsl(35,60%,52%)] transition-colors" />
                </div>
                <div>
                  <label className="font-body text-[10px] tracking-widest uppercase text-white/40 block mb-2">Тип объекта</label>
                  <select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full bg-[#2a2a2a] border border-white/10 text-white font-body text-sm px-4 py-3 focus:outline-none focus:border-[hsl(35,60%,52%)] transition-colors cursor-pointer">
                    <option value="" className="text-white/50">Выберите тип</option>
                    <option value="house">Частный дом</option>
                    <option value="apartment">Квартира / Ремонт</option>
                    <option value="commercial">Коммерческая недвижимость</option>
                    <option value="industrial">Промышленный объект</option>
                  </select>
                </div>
                <div>
                  <label className="font-body text-[10px] tracking-widest uppercase text-white/40 block mb-2">Площадь (м²)</label>
                  <input type="number" value={formData.area} onChange={(e) => setFormData({ ...formData, area: e.target.value })} placeholder="Например: 150"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/20 font-body text-sm px-4 py-3 focus:outline-none focus:border-[hsl(35,60%,52%)] transition-colors" />
                </div>
                <div>
                  <label className="font-body text-[10px] tracking-widest uppercase text-white/40 block mb-2">Комментарий</label>
                  <textarea value={formData.comment} onChange={(e) => setFormData({ ...formData, comment: e.target.value })} placeholder="Опишите ваш проект..." rows={3}
                    className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/20 font-body text-sm px-4 py-3 focus:outline-none focus:border-[hsl(35,60%,52%)] transition-colors resize-none" />
                </div>
                <button type="submit" className="w-full bg-[hsl(35,60%,52%)] text-white font-body text-xs font-semibold tracking-widest uppercase py-4 hover:bg-[hsl(35,60%,42%)] transition-colors duration-300">
                  Получить расчёт бесплатно
                </button>
                <p className="font-body text-[10px] text-white/30 text-center">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div className="section-fade">
            <div className="accent-line mb-6" />
            <p className="font-body text-xs tracking-[0.3em] uppercase text-[hsl(35,60%,52%)] mb-4">Свяжитесь с нами</p>
            <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-10 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Обсудим<br /><em className="not-italic font-semibold">ваш проект</em>
            </h2>
            <div className="space-y-6">
              {[
                { icon: "Phone", label: "Телефон", value: "+7 (495) 000-00-00" },
                { icon: "Mail", label: "Email", value: "info@stroygrupp.ru" },
                { icon: "MapPin", label: "Адрес", value: "Москва, ул. Строительная, 1" },
                { icon: "Clock", label: "Режим работы", value: "Пн–Пт: 9:00–18:00" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-[#1a1a1a] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name={item.icon} fallback="CircleAlert" size={15} className="text-[hsl(35,60%,52%)]" />
                  </div>
                  <div>
                    <p className="font-body text-[10px] tracking-widest uppercase text-[#999] mb-0.5">{item.label}</p>
                    <p className="font-body text-sm text-[#1a1a1a] font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="section-fade" style={{ transitionDelay: "0.2s" }}>
            <div className="bg-[#f0ede8] p-8">
              <h3 className="text-2xl text-[#1a1a1a] mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Записаться на консультацию</h3>
              {consultSent ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 bg-[hsl(35,60%,52%)] flex items-center justify-center mx-auto mb-4">
                    <Icon name="Check" size={22} className="text-white" />
                  </div>
                  <h4 className="text-xl text-[#1a1a1a] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Отлично!</h4>
                  <p className="font-body text-sm text-[#666]">Мы перезвоним вам в ближайшее время.</p>
                </div>
              ) : (
                <form onSubmit={handleConsult} className="space-y-4">
                  <div>
                    <label className="font-body text-[10px] tracking-widest uppercase text-[#999] block mb-2">Ваше имя *</label>
                    <input required type="text" value={consultData.name} onChange={(e) => setConsultData({ ...consultData, name: e.target.value })} placeholder="Иван Петров"
                      className="w-full bg-white border border-[#ddd] text-[#1a1a1a] placeholder:text-[#bbb] font-body text-sm px-4 py-3 focus:outline-none focus:border-[hsl(35,60%,52%)] transition-colors" />
                  </div>
                  <div>
                    <label className="font-body text-[10px] tracking-widest uppercase text-[#999] block mb-2">Телефон *</label>
                    <input required type="tel" value={consultData.phone} onChange={(e) => setConsultData({ ...consultData, phone: e.target.value })} placeholder="+7 (999) 000-00-00"
                      className="w-full bg-white border border-[#ddd] text-[#1a1a1a] placeholder:text-[#bbb] font-body text-sm px-4 py-3 focus:outline-none focus:border-[hsl(35,60%,52%)] transition-colors" />
                  </div>
                  <button type="submit" className="w-full bg-[#1a1a1a] text-white font-body text-xs font-semibold tracking-widest uppercase py-4 hover:bg-[hsl(35,60%,52%)] transition-colors duration-300">
                    Записаться на консультацию
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1a1a1a] py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-lg tracking-wider text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>СТРОЙГРУПП</div>
          <p className="font-body text-xs text-white/30">© 2024 СтройГрупп. Все права защищены.</p>
          <div className="flex gap-6">
            {NAV_ITEMS.slice(0, 4).map((item) => (
              <button key={item.href} onClick={() => scrollTo(item.href)} className="font-body text-[10px] tracking-widest uppercase text-white/40 hover:text-[hsl(35,60%,52%)] transition-colors">
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;