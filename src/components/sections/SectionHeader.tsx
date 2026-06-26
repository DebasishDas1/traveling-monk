const SectionHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="mb-24 text-center">
      {/* Eyebrow */}
      <span
        className="block mb-5 text-[10px] font-semibold uppercase tracking-[0.18em]"
        style={{ color: "var(--color-saffron)" }}
      >
        {subtitle}
      </span>

      {/* Title */}
      <h2
        className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight"
        style={{ color: "var(--color-foreground)" }}
      >
        {title}
      </h2>

      {/* Divider */}
      <div className="flex items-center justify-center gap-3 mt-7">
        <span
          className="block w-10 h-px"
          style={{ background: "var(--color-parchment-dark)" }}
        />
        <span
          className="block w-1.5 h-1.5 rounded-full"
          style={{ background: "var(--color-saffron)" }}
        />
        <span
          className="block w-1.5 h-1.5 rounded-full opacity-40"
          style={{ background: "var(--color-saffron)" }}
        />
        <span
          className="block w-1.5 h-1.5 rounded-full opacity-20"
          style={{ background: "var(--color-saffron)" }}
        />
        <span
          className="block w-10 h-px"
          style={{ background: "var(--color-parchment-dark)" }}
        />
      </div>
    </div>
  );
};

export default SectionHeader;
