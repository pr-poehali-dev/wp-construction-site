import { Link } from "react-router-dom";
import { NAV_ITEMS } from "@/lib/siteData";

const Footer = () => (
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
            {NAV_ITEMS.slice(1, 5).map((item) => (
              <Link key={item.to} to={item.to} className="font-body text-xs text-white/60 hover:text-[hsl(35,60%,52%)] transition-colors text-left">{item.label}</Link>
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
);

export default Footer;
