interface Props {
  eyebrow: string;
  title: string;
  center?: boolean;
  dark?: boolean;
}

const SectionHeading = ({ eyebrow, title, center, dark }: Props) => (
  <div className={`section-fade mb-16 ${center ? "text-center" : ""}`}>
    <div className={`accent-line mb-6 ${center ? "mx-auto" : ""}`} />
    <p className="font-body text-xs tracking-[0.3em] uppercase text-[hsl(35,60%,52%)] mb-4">{eyebrow}</p>
    <h2 className={`text-4xl md:text-5xl font-light ${dark ? "text-white" : "text-[#1a1a1a]"}`} style={{ fontFamily: "'Cormorant Garamond', serif" }}>
      {title}
    </h2>
  </div>
);

export default SectionHeading;
