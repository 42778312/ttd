import Image from "next/image";

const TIKTOK_THUMBS = Array.from(
  { length: 12 },
  (_, i) => `/images/tiktok-thumbs/${String(i + 1).padStart(2, "0")}.webp`,
);

const COLUMN_COUNT = 11;
const TILES_PER_COLUMN = 7;

type ColumnConfig = {
  duration: number;
  direction: "up" | "down";
  offset: number;
};

function seededValue(seed: number) {
  const x = Math.sin(seed * 12.9898 + seed * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

function buildColumns(): ColumnConfig[] {
  return Array.from({ length: COLUMN_COUNT }, (_, i) => ({
    duration: Number((28 + seededValue(i) * 18).toFixed(4)),
    direction: i % 2 === 0 ? "up" : "down",
    offset: Number((seededValue(i + 100) * -120).toFixed(4)),
  }));
}

const COLUMNS = buildColumns();

function TikTokVideoTile({ seed }: { seed: number }) {
  const thumb = TIKTOK_THUMBS[Math.floor(seededValue(seed) * TIKTOK_THUMBS.length)];
  const opacity = Number((0.75 + seededValue(seed + 1) * 0.25).toFixed(6));

  return (
    <div
      className="relative w-[88px] md:w-[104px] aspect-[9/16] rounded-xl overflow-hidden shrink-0 border border-white/[0.15] shadow-[0_8px_32px_rgba(0,0,0,0.35)] bg-black"
      style={{ opacity }}
    >
      <Image
        src={thumb}
        alt=""
        fill
        sizes="104px"
        className="object-cover object-top"
        draggable={false}
      />
    </div>
  );
}

function VideoColumn({ colIndex, config }: { colIndex: number; config: ColumnConfig }) {
  const tiles = Array.from({ length: TILES_PER_COLUMN * 2 }, (_, i) => (
    <TikTokVideoTile key={i} seed={colIndex * 100 + i} />
  ));

  return (
    <div
      className="flex flex-col gap-3 md:gap-4 shrink-0"
      style={{ marginTop: config.offset }}
    >
      <div
        className={`flex flex-col gap-3 md:gap-4 ${
          config.direction === "up" ? "animate-video-scroll-up" : "animate-video-scroll-down"
        }`}
        style={{ animationDuration: `${config.duration}s` }}
      >
        {tiles}
      </div>
    </div>
  );
}

export function BackgroundGlow() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <div className="absolute inset-0 bg-background" />

      {/* Scrolling TikTok video wall */}
      <div className="absolute inset-0 overflow-hidden video-wall-mask">
        <div className="absolute inset-[-8%] flex justify-between gap-2 md:gap-3 opacity-[0.38] md:opacity-[0.45]">
          {COLUMNS.map((config, i) => (
            <VideoColumn key={i} colIndex={i} config={config} />
          ))}
        </div>
      </div>

      {/* Atmospheric radial gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-primary/15 rounded-full blur-[140px] animate-pulse-glow" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[500px] bg-secondary/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] bg-secondary/8 rounded-full blur-[90px]" />

      {/* Center vignette — keeps foreground content readable */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_65%_at_50%_42%,rgba(1,1,1,0.55)_0%,rgba(1,1,1,0.28)_45%,rgba(1,1,1,0.05)_100%)]" />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-25" />
    </div>
  );
}
