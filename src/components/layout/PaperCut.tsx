interface PaperCutProps {
  className?: string;
  color?: string;
}

const PaperCut = ({ className = "", color = "#dbc8ac" }: PaperCutProps) => {
  return (
    <div
      className={`absolute bottom-0 left-0 w-full h-24 overflow-hidden pointer-events-none z-20 ${className}`}
    >
      <svg
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <defs>
          {/* subtle paper grain */}
          <filter id="grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.85"
              numOctaves="2"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncA type="table" tableValues="0 0.03" />
            </feComponentTransfer>
          </filter>

          {/* soft shadow */}
          <filter id="shadow">
            <feGaussianBlur stdDeviation="4" />
          </filter>

          {/* warm paper gradient */}
          <linearGradient id="paper" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#faf4e8" />
            <stop offset="100%" stopColor={color} />
          </linearGradient>
        </defs>

        {/* soft edge shadow */}
        <path
          d="
            M0 140
            V38
            C70 70 130 8 220 36
            C310 64 380 12 470 40
            C560 68 640 14 730 44
            C820 74 900 18 1000 42
            C1100 66 1190 14 1290 38
            C1360 54 1410 18 1440 30
            V140
            Z
          "
          fill="rgba(0,0,0,0.12)"
          filter="url(#shadow)"
        />

        {/* main torn paper */}
        <path
          d="
            M0 140
            V32
            C60 62 120 4 210 30
            C300 58 370 10 460 34
            C550 60 630 8 720 38
            C810 68 890 12 990 36
            C1090 60 1180 10 1280 32
            C1350 48 1405 14 1440 24
            V140
            Z
          "
          fill="url(#paper)"
        />

        {/* subtle torn fibers */}
        <path
          d="
            M0 32
            C60 62 120 4 210 30
            C300 58 370 10 460 34
            C550 60 630 8 720 38
            C810 68 890 12 990 36
            C1090 60 1180 10 1280 32
            C1350 48 1405 14 1440 24
          "
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="1 10"
        />

        {/* paper texture */}
        <rect
          width="1440"
          height="140"
          fill="white"
          filter="url(#grain)"
          opacity="0.4"
        />
      </svg>
    </div>
  );
};

export default PaperCut;
