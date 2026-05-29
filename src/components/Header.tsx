import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { NAV_ITEMS } from "@/lib/siteData";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="hidden lg:block bg-[#1a1a1a] text-white/70">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-9 text-xs font-body">
          <span>Строительство финских каркасных домов под ключ · СПб и Москва</span>
          <div className="flex items-center gap-6">
            <a href="tel:+74950000000" className="hover:text-[hsl(35,60%,52%)] transition-colors">+7 (495) 000-00-00</a>
            <span>Пн–Вс: 9:00–20:00</span>
          </div>
        </div>
      </div>

      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-semibold tracking-wider text-[#1a1a1a]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            ФИНСКИЙ&nbsp;ДОМИК
          </Link>
          <ul className="hidden xl:flex gap-7">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`nav-link font-body text-xs font-medium tracking-widest uppercase transition-colors ${
                    location.pathname === item.to ? "text-[hsl(35,60%,52%)]" : "text-[#1a1a1a] hover:text-[hsl(35,60%,52%)]"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            onClick={() => navigate("/contacts")}
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
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className="font-body text-sm font-medium tracking-widest uppercase text-left text-[#1a1a1a] hover:text-[hsl(35,60%,52%)] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
