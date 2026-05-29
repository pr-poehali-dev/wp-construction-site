import { useNavigate } from "react-router-dom";
import PageHero from "@/components/PageHero";
import Icon from "@/components/ui/icon";
import { PRICING } from "@/lib/siteData";

const Pricing = () => {
  const navigate = useNavigate();
  return (
    <div>
      <PageHero eyebrow="Стоимость" title="Цены и комплектации" subtitle="Прозрачные цены за квадратный метр. Финальная стоимость фиксируется в договоре без скрытых доплат." />
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {PRICING.map((p, i) => (
              <div key={i} className={`section-fade p-8 ${p.popular ? "bg-[#1a1a1a] text-white" : "bg-white border border-[#eee]"}`} style={{ transitionDelay: `${i * 0.1}s` }}>
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
                <button onClick={() => navigate("/contacts")} className={`w-full font-body text-xs font-semibold tracking-widest uppercase py-3.5 transition-colors duration-300 ${p.popular ? "bg-[hsl(35,60%,52%)] text-white hover:bg-[hsl(35,60%,42%)]" : "bg-[#1a1a1a] text-white hover:bg-[hsl(35,60%,52%)]"}`}>
                  Выбрать
                </button>
              </div>
            ))}
          </div>
          <p className="font-body text-xs text-center text-[#999] mt-12 section-fade">
            Точную смету рассчитаем после выбора проекта и осмотра участка. Расчёт бесплатный.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
