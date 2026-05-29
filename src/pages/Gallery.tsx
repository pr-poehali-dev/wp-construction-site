import PageHero from "@/components/PageHero";
import Icon from "@/components/ui/icon";
import { GALLERY_COLORS } from "@/lib/siteData";

const Gallery = () => (
  <div>
    <PageHero eyebrow="Фотоматериалы" title="Галерея объектов" subtitle="Реальные фотографии построенных нами домов и этапов строительства." />
    <section className="py-24 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {GALLERY_COLORS.map((c, i) => (
            <div
              key={i}
              className={`${c} section-fade overflow-hidden group cursor-pointer ${i === 0 || i === 5 ? "md:col-span-2 h-64" : "h-40"}`}
              style={{ transitionDelay: `${(i % 4) * 0.06}s` }}
            >
              <div className="w-full h-full group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                <Icon name="Image" size={28} className="text-white/30 group-hover:text-white/60 transition-colors" />
              </div>
            </div>
          ))}
        </div>
        <p className="font-body text-xs text-center text-[#999] mt-8 tracking-wide section-fade">
          Загрузите фотографии ваших объектов — и мы добавим их в галерею
        </p>
      </div>
    </section>
  </div>
);

export default Gallery;
