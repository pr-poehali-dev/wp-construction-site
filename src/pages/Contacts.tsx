import { useState } from "react";
import PageHero from "@/components/PageHero";
import Icon from "@/components/ui/icon";
import { PROJECTS } from "@/lib/siteData";

const CONTACT_ITEMS = [
  { icon: "Phone", label: "Телефон", value: "+7 (495) 000-00-00" },
  { icon: "Mail", label: "Email", value: "info@finskidomik.ru" },
  { icon: "MapPin", label: "Офис", value: "Санкт-Петербург, Москва" },
  { icon: "Clock", label: "Режим работы", value: "Пн–Вс: 9:00–20:00" },
];

const Contacts = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", project: "", area: "", comment: "" });
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div>
      <PageHero eyebrow="Свяжитесь с нами" title="Контакты и расчёт" subtitle="Оставьте заявку — менеджер подберёт проект, рассчитает смету и ответит на вопросы в течение 2 часов." />

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div className="section-fade">
            <div className="accent-line mb-6" />
            <p className="font-body text-xs tracking-[0.3em] uppercase text-[hsl(35,60%,52%)] mb-4">Наши контакты</p>
            <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-10 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Обсудим<br /><em className="not-italic font-semibold">ваш дом</em>
            </h2>
            <div className="space-y-6 mb-10">
              {CONTACT_ITEMS.map((item, i) => (
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
            <div className="space-y-3">
              {[
                { icon: "MessageCircle", text: "Бесплатная консультация" },
                { icon: "FileText", text: "Подробная смета и проект" },
                { icon: "Clock", text: "Ответ в течение 2 часов" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Icon name={item.icon} fallback="CircleAlert" size={16} className="text-[hsl(35,60%,52%)]" />
                  <span className="font-body text-sm text-[#666]">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="section-fade" style={{ transitionDelay: "0.2s" }}>
            <div className="bg-[#1a1a1a] p-8">
              <h3 className="text-2xl text-white mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Рассчитать стоимость дома</h3>
              {formSent ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 bg-[hsl(35,60%,52%)] flex items-center justify-center mx-auto mb-5">
                    <Icon name="Check" size={24} className="text-white" />
                  </div>
                  <h4 className="text-2xl text-white mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Заявка отправлена!</h4>
                  <p className="font-body text-sm text-white/50">Менеджер свяжется с вами в течение 2 часов.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
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
        </div>
      </section>
    </div>
  );
};

export default Contacts;
