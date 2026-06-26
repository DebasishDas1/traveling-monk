const SectionHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="mb-24 text-center">
      <span className="text-[#8C6B4A] text-[10px] font-bold uppercase tracking-[0.6em] block mb-6">
        {subtitle}
      </span>

      <h2 className="text-4xl md:text-6xl text-[#2B1F14]  tracking-tight leading-[1.1]">
        {title}
      </h2>

      {/* subtle underline with organic dots */}
      <div className="flex items-center justify-center gap-3 mt-8">
        <span className="w-12 h-px bg-[#CBB79C]" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#8C6B4A]" />
        <span className="w-12 h-px bg-[#CBB79C]" />
      </div>
    </div>
  );
};

export default SectionHeader;
