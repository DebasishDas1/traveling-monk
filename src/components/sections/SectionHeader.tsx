const SectionHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="mb-24 text-center">
      <span className="text-forest/40 text-[10px] font-semibold uppercase tracking-[0.5em] block mb-6">
        {subtitle}
      </span>

      <h2 className="text-5xl md:text-6xl text-forest font-display tracking-tight leading-[1.1]">
        {title}
      </h2>

      {/* subtle underline */}
      <div className="mt-6 w-16 h-px mx-auto bg-saffron/60" />
    </div>
  );
};

export default SectionHeader;
