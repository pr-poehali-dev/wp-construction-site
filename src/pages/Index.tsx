import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/0c1dc591-22d6-46c9-8584-ab371048c4ec/files/d467cfb0-875c-4941-8339-87bb1977dfb1.jpg";
const HOUSE_2 = "https://cdn.poehali.dev/projects/0c1dc591-22d6-46c9-8584-ab371048c4ec/files/33405df5-4705-436f-876f-662af9ffb3ca.jpg";

const NAV_ITEMS = [
  { label: "Проекты", href: "#projects" },
  { label: "Технология", href: "#tech" },
  { label: "Цены", href: "#pricing" },
  { label: "Этапы", href: "#stages" },
  { label: "О компании", href: "#about" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

const PROJECTS = [
  { name: "Economy 88", area: "88 м²", floors: "1 этаж", rooms: "2 спальни", price: "от 2 640 000 ₽", img: HOUSE_2 },
  { name: "Standard 118", area: "118 м²", floors: "2 этажа", rooms: "3 спальни", price: "от 3 540 000 ₽", img: HERO_IMG },
  { name: "Comfort 142", area: "142 м²", floors: "2 этажа", rooms: "4 спальни", price: "от 4 260 000 ₽", img: HOUSE_2 },
  { name: "Family 96", area: "96 м²", floors: "1 этаж", rooms: "3 спальни", price: "от 2 880 000 ₽", img: HERO_IMG },
  { name: "Premium 165", area: "165 м²", floors: "2 этажа", rooms: "4 спальни", price: "от 4 950 000 ₽", img: HOUSE_2 },
  { name: "Compact 72", area: "72 м²", floors: "1 этаж", rooms: "2 спальни", price: "от 2 160 000 ₽", img: HERO_IMG },
];

const TECH_LAYERS = [
  { icon: "Layers", title: "Каркас из сухой доски", desc: "Камерная сушка до 12% влажности, антисептирование, точная геометрия." },
  { icon: "Thermometer", title: "Утепление 200 мм", desc: "Базальтовая или эковата, ветрозащита, пароизоляция — тепло круглый год." },
  { icon: "ShieldCheck", title: "Энергоэффективность", desc: "Скандинавский пирог стены: расход тепла на 40% ниже обычного дома." },
  { icon: "Wind", title: "Вентиляция и фасад", desc: "Вентилируемый фасад, дышащие материалы, отсутствие конденсата." },
];

const STAGES = [
  { num: "01", title: "Заявка и расчёт", desc: "Обсуждаем проект, считаем смету, выезжаем на участок." },
  { num: "02", title: "Проект и договор", desc: "Готовим документацию, фиксируем цену и сроки в договоре." },
  { num: "03", title: "Фундамент", desc: "Заливаем плиту или ставим сваи — по типу грунта." },
  { num: "04", title: "Каркас и крыша", desc: "Возводим коробку, монтируем кровлю, закрываем контур." },
  { num: "05", title: "Инженерия и отделка", desc: "Электрика, сантехника, утепление, внутренняя отделка." },
  { num: "06", title: "Сдача под ключ", desc: "Проверяем качество, передаём дом с гарантией 5 лет." },
];

const ADVANTAGES = [
  { icon: "Clock", value: "от 2 мес.", label: "Срок строительства" },
  { icon: "Award", value: "5 лет", label: "Гарантия на дом" },
  { icon: "Home", value: "350+", label: "Построенных домов" },
  { icon: "Banknote", value: "0%", label: "Рассрочка платежа" },
];

const REVIEWS = [
  { name: "Алексей Морозов", city: "Санкт-Петербург", text: "Построили дом 118 м² за 2,5 месяца. Бригада работала аккуратно, все сроки соблюдены. Зимой тепло, счета за отопление приятно удивили." },
  { name: "Марина Соколова", city: "Ленинградская обл.", text: "Долго выбирали подрядчика, остановились на этой компании — не пожалели. Прозрачная смета без скрытых доплат, постоянно были на связи." },
  { name: "Дмитрий Волков", city: "Москва", text: "Заказывали проект Comfort 142. Понравился подход: показали технологию, объяснили каждый слой стены. Дом сдали с гарантией, всё работает." },
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
  const [formData, setFormData] = useState({ name: "", phone: "", project: "", area: "", comment: "" });
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
      {/* TOP BAR */}
      <div className="hidden lg:block bg-[#1a1a1a] text-white/70">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-9 text-xs font-body">
          <span>Строительство финских каркасных домов под ключ · СПб и Москва</span>
          <div className="flex items-center gap-6">
            <a href="tel:+74950000000" className="hover:text-[hsl(35,60%,52%)] transition-colors">+7 (495) 000-00-00</a>
            <span>Пн–Вс: 9:00–20:00</span>
          </div>
        </div>
      </div>

      {/* NAV */}
      <nav className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <button onClick={() => scrollTo("#home")} className="text-xl font-semibold tracking-wider text-[#1a1a1a]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            ФИНСКИЙ&nbsp;ДОМИК
          </button>
          <ul className="hidden xl:flex gap-7">
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
            onClick={() => scrollTo("#estimate")}
            className="hidden xl:block font-body text-xs font-semibold tracking-widest uppercase bg-[hsl(35,60%,52%)] text-white px-5 py-2.5 hover:bg-[hsl(35,60%,42%)] transition-colors duration-300"
          >
            Рассчитать дом
          </button>
          <button className="xl:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {menuOpen && (
          <div className="xl:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
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
      <section id="home" className="relative h-[88vh] flex items-center overflow-hidden">
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
              <button onClick={() => scrollTo("#projects")} className="font-body text-xs font-semibold tracking-widest uppercase bg-[hsl(35,60%,52%)] text-white px-8 py-4 hover:bg-[hsl(35,60%,42%)] transition-colors duration-300">
                Каталог проектов
              </button>
              <button onClick={() => scrollTo("#estimate")} className="font-body text-xs font-semibold tracking-widest uppercase border border-white/50 text-white px-8 py-4 hover:bg-white/10 transition-colors duration-300">
                Рассчитать стоимость
              </button>
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

      {/* PROJECTS / CATALOG */}
      <section id="projects" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-fade text-center mb-16">
            <div className="accent-line mx-auto mb-6" />
            <p className="font-body text-xs tracking-[0.3em] uppercase text-[hsl(35,60%,52%)] mb-4">Каталог</p>
            <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Проекты домов</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((p, i) => (
              <div key={i} className="group bg-white border border-[#eee] section-fade hover:shadow-xl transition-shadow duration-300" style={{ transitionDelay: `${i * 0.07}s` }}>
                <div className="h-56 overflow-hidden relative">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-[hsl(35,60%,52%)] text-white px-3 py-1 font-body text-xs font-medium tracking-wide">{p.area}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl text-[#1a1a1a] mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{p.name}</h3>
                  <div className="flex flex-wrap gap-x-5 gap-y-2 mb-5 font-body text-xs text-[#777]">
                    <span className="flex items-center gap-1.5"><Icon name="Maximize" size={13} className="text-[hsl(35,60%,52%)]" />{p.area}</span>
                    <span className="flex items-center gap-1.5"><Icon name="Building" size={13} className="text-[hsl(35,60%,52%)]" />{p.floors}</span>
                    <span className="flex items-center gap-1.5"><Icon name="BedDouble" size={13} className="text-[hsl(35,60%,52%)]" />{p.rooms}</span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-[#eee]">
                    <span className="font-body text-base font-semibold text-[#1a1a1a]">{p.price}</span>
                    <button onClick={() => scrollTo("#estimate")} className="font-body text-xs font-semibold tracking-widest uppercase text-[hsl(35,60%,52%)] hover:text-[#1a1a1a] transition-colors">
                      Заказать →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section id="tech" className="py-24 md:py-32 bg-[#f0ede8]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="section-fade">
            <div className="accent-line mb-6" />
            <p className="font-body text-xs tracking-[0.3em] uppercase text-[hsl(35,60%,52%)] mb-4">Технология</p>
            <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] leading-tight mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Скандинавский<br /><em className="not-italic font-semibold">каркас</em>
            </h2>
            <p className="font-body text-sm text-[#555] leading-relaxed mb-10">
              Мы строим по финской технологии: сухая доска камерной сушки, многослойное утепление и правильный «пирог» стены. Такой дом теплее, тише и долговечнее, а расходы на отопление — минимальны.
            </p>
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

      {/* STAGES */}
      <section id="stages" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-fade text-center mb-16">
            <div className="accent-line mx-auto mb-6" />
            <p className="font-body text-xs tracking-[0.3em] uppercase text-[hsl(35,60%,52%)] mb-4">Как мы работаем</p>
            <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Этапы строительства</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#ddd]">
            {STAGES.map((s, i) => (
              <div key={i} className="bg-[#f7f6f4] p-8 hover:bg-white transition-colors duration-300 section-fade" style={{ transitionDelay: `${i * 0.07}s` }}>
                <div className="text-4xl font-semibold text-[hsl(35,60%,52%)]/30 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{s.num}</div>
                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{s.title}</h3>
                <p className="font-body text-sm text-[#666] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 md:py-32 bg-[#f0ede8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-fade text-center mb-16">
            <div className="accent-line mx-auto mb-6" />
            <p className="font-body text-xs tracking-[0.3em] uppercase text-[hsl(35,60%,52%)] mb-4">Стоимость</p>
            <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Комплектации</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Тёплый контур", price: "от 24 000 ₽/м²", popular: false, items: ["Фундамент", "Каркас и крыша", "Окна и двери", "Утепление стен", "Черновой пол"] },
              { name: "Под ключ", price: "от 36 000 ₽/м²", popular: true, items: ["Всё из «Тёплый контур»", "Внутренняя отделка", "Электрика и сантехника", "Отопление", "Финишные покрытия"] },
              { name: "Премиум", price: "от 52 000 ₽/м²", popular: false, items: ["Всё из «Под ключ»", "Дизайн-проект", "Премиум материалы", "Умный дом", "Ландшафт у входа"] },
            ].map((p, i) => (
              <div key={i} className={`section-fade p-8 ${p.popular ? "bg-[#1a1a1a] text-white" : "bg-white"}`} style={{ transitionDelay: `${i * 0.1}s` }}>
                {p.popular && <div className="font-body text-[10px] tracking-widest uppercase text-[hsl(35,60%,52%)] mb-3">Популярный выбор</div>}
                <h3 className={`text-2xl mb-2 ${p.popular ? "text-white" : "text-[#1a1a1a]"}`} style={{ fontFamily: "'Cormorant Garamond', serif" }}>{p.name}</h3>
                <div className={`text-xl font-semibold mb-6 ${p.popular ? "text-[hsl(35,60%,62%)]" : "text-[hsl(35,60%,52%)]"}`} style={{ fontFamily: "'Cormorant Garamond', serif" }}>{p.price}</div>
                <ul className="space-y-3 mb-8">
                  {p.items.map((it, j) => (
                    <li key={j} className={`flex items-center gap-2 font-body text-sm ${p.popular ? "text-white/70" : "text-[#666]"}`}>
                      <Icon name="Check" size={15} className="text-[hsl(35,60%,52%)] flex-shrink-0" />{it}
                    </li>
                  ))}
                </ul>
                <button onClick={() => scrollTo("#estimate")} className={`w-full font-body text-xs font-semibold tracking-widest uppercase py-3.5 transition-colors duration-300 ${p.popular ? "bg-[hsl(35,60%,52%)] text-white hover:bg-[hsl(35,60%,42%)]" : "bg-[#1a1a1a] text-white hover:bg-[hsl(35,60%,52%)]"}`}>
                  Выбрать
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESTIMATE FORM */}
      <section id="estimate" className="py-24 md:py-32 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div className="section-fade">
            <div className="accent-line mb-6" />
            <p className="font-body text-xs tracking-[0.3em] uppercase text-[hsl(35,60%,52%)] mb-4">Калькулятор</p>
            <h2 className="text-4xl md:text-5xl font-light text-white leading-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Рассчитайте<br /><em className="not-italic font-semibold text-[hsl(35,60%,62%)]">стоимость</em><br />вашего дома
            </h2>
            <p className="font-body text-sm text-white/50 leading-relaxed mb-8">
              Заполните форму — менеджер свяжется с вами в течение 2 часов, подберёт проект и подготовит смету бесплатно.
            </p>
            <div className="space-y-4">
              {[
                { icon: "MessageCircle", text: "Бесплатная консультация" },
                { icon: "FileText", text: "Подробная смета и проект" },
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
                  <label className="font-body text-[10px] tracking-widest uppercase text-white/40 block mb-2">Проект дома</label>
                  <select value={formData.project} onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                    className="w-full bg-[#2a2a2a] border border-white/10 text-white font-body text-sm px-4 py-3 focus:outline-none focus:border-[hsl(35,60%,52%)] transition-colors cursor-pointer">
                    <option value="">Выберите проект</option>
                    {PROJECTS.map((p) => <option key={p.name} value={p.name}>{p.name} · {p.area}</option>)}
                    <option value="individual">Индивидуальный проект</option>
                  </select>
                </div>
                <div>
                  <label className="font-body text-[10px] tracking-widest uppercase text-white/40 block mb-2">Площадь (м²)</label>
                  <input type="number" value={formData.area} onChange={(e) => setFormData({ ...formData, area: e.target.value })} placeholder="Например: 120"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/20 font-body text-sm px-4 py-3 focus:outline-none focus:border-[hsl(35,60%,52%)] transition-colors" />
                </div>
                <div>
                  <label className="font-body text-[10px] tracking-widest uppercase text-white/40 block mb-2">Комментарий</label>
                  <textarea value={formData.comment} onChange={(e) => setFormData({ ...formData, comment: e.target.value })} placeholder="Опишите ваши пожелания..." rows={3}
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

      {/* ABOUT */}
      <section id="about" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="section-fade">
            <div className="accent-line mb-6" />
            <p className="font-body text-xs tracking-[0.3em] uppercase text-[hsl(35,60%,52%)] mb-4">О компании</p>
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
              {[
                { label: "Собственные бригады", icon: "Users" },
                { label: "Фиксированная цена", icon: "FileCheck" },
                { label: "Гарантия 5 лет", icon: "ShieldCheck" },
                { label: "Договор и сроки", icon: "FileSignature" },
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

      {/* REVIEWS */}
      <section id="reviews" className="py-24 md:py-32 bg-[#f0ede8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-fade text-center mb-16">
            <div className="accent-line mx-auto mb-6" />
            <p className="font-body text-xs tracking-[0.3em] uppercase text-[hsl(35,60%,52%)] mb-4">Что говорят клиенты</p>
            <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Отзывы</h2>
          </div>
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

      {/* CONTACTS */}
      <section id="contacts" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div className="section-fade">
            <div className="accent-line mb-6" />
            <p className="font-body text-xs tracking-[0.3em] uppercase text-[hsl(35,60%,52%)] mb-4">Свяжитесь с нами</p>
            <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-10 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Обсудим<br /><em className="not-italic font-semibold">ваш дом</em>
            </h2>
            <div className="space-y-6">
              {[
                { icon: "Phone", label: "Телефон", value: "+7 (495) 000-00-00" },
                { icon: "Mail", label: "Email", value: "info@finskidomik.ru" },
                { icon: "MapPin", label: "Офис", value: "Санкт-Петербург, Москва" },
                { icon: "Clock", label: "Режим работы", value: "Пн–Вс: 9:00–20:00" },
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
      <footer className="bg-[#1a1a1a] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div>
              <div className="text-lg tracking-wider text-white mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>ФИНСКИЙ ДОМИК</div>
              <p className="font-body text-xs text-white/40 leading-relaxed">Строительство энергоэффективных каркасных домов под ключ по скандинавской технологии.</p>
            </div>
            <div>
              <p className="font-body text-[10px] tracking-widest uppercase text-white/40 mb-4">Разделы</p>
              <div className="flex flex-col gap-2">
                {NAV_ITEMS.slice(0, 4).map((item) => (
                  <button key={item.href} onClick={() => scrollTo(item.href)} className="font-body text-xs text-white/60 hover:text-[hsl(35,60%,52%)] transition-colors text-left">{item.label}</button>
                ))}
              </div>
            </div>
            <div>
              <p className="font-body text-[10px] tracking-widest uppercase text-white/40 mb-4">Контакты</p>
              <div className="flex flex-col gap-2 font-body text-xs text-white/60">
                <span>+7 (495) 000-00-00</span>
                <span>info@finskidomik.ru</span>
                <span>Санкт-Петербург, Москва</span>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center">
            <p className="font-body text-xs text-white/30">© 2024 Финский Домик. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
