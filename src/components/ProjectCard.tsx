import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

interface Project {
  name: string;
  area: string;
  floors: string;
  rooms: string;
  price: string;
  img: string;
}

const ProjectCard = ({ p, delay = 0 }: { p: Project; delay?: number }) => {
  const navigate = useNavigate();
  return (
    <div className="group bg-white border border-[#eee] section-fade hover:shadow-xl transition-shadow duration-300" style={{ transitionDelay: `${delay}s` }}>
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
          <button onClick={() => navigate("/contacts")} className="font-body text-xs font-semibold tracking-widest uppercase text-[hsl(35,60%,52%)] hover:text-[#1a1a1a] transition-colors">
            Заказать →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
