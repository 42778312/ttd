export const SHORTCUT_URL = process.env.NEXT_PUBLIC_SHORTCUT_URL ?? "/shortcut";

export const ICLOUD_SHORTCUT_URL =
  process.env.NEXT_PUBLIC_ICLOUD_SHORTCUT_URL ?? "";

export const SHORTCUT_FEATURES = [
  {
    title: "No watermark",
    description: "Save clean HD videos straight to your Camera Roll — no TTD logo burned in.",
    icon: "shield",
  },
  {
    title: "One-tap from Share",
    description: "Skip the browser. Share any TikTok → tap TTD → done in under 3 seconds.",
    icon: "zap",
  },
  {
    title: "Always free",
    description: "No subscription, no account, no ads. TTD is free SaaS built for creators.",
    icon: "gift",
  },
  {
    title: "Works offline-ready",
    description: "Videos land in Photos instantly. Watch, edit, or repost whenever you want.",
    icon: "download",
  },
] as const;

export const SHORTCUT_INSTALL_STEPS = [
  {
    title: "Install the shortcut",
    description:
      "Tap Add TTD Shortcut below. The Shortcuts app opens — confirm with Add Shortcut.",
  },
  {
    title: "Share from TikTok",
    description:
      "Open any video in TikTok, tap the Share arrow, and scroll to find TTD in the list.",
  },
  {
    title: "Saved to Photos",
    description:
      "TTD resolves the video, strips the watermark, and saves HD quality to your library.",
  },
] as const;

export const STATS = [
  { label: "Videos Downloaded", value: "12.4M+" },
  { label: "Happy Users", value: "1.2M+" },
  { label: "Shortcut Downloads", value: "2.7M+" },
  { label: "Uptime", value: "99.9%" },
] as const;

export const FEATURE_CHIPS = [
  { label: "No Watermark", icon: "shield" },
  { label: "HD Quality", icon: "hd" },
  { label: "Fast & Free", icon: "zap" },
  { label: "No Account", icon: "user" },
] as const;

export const TESTIMONIALS = [
  {
    name: "@sophiee",
    videos: "2,847 videos",
    text: "Best downloader ever! No watermark and super fast.",
    time: "2h ago",
    avatar: "SE",
    photo: "https://i.pravatar.cc/150?img=5",
    rating: 5,
  },
  {
    name: "@mike_t",
    videos: "1,203 videos",
    text: "The iPhone shortcut is a game changer. One tap download!",
    time: "5h ago",
    avatar: "MT",
    photo: "https://i.pravatar.cc/150?img=12",
    rating: 5,
  },
  {
    name: "@luna.creates",
    videos: "5,621 videos",
    text: "Finally a downloader that actually works in HD.",
    time: "1d ago",
    avatar: "LC",
    photo: "https://i.pravatar.cc/150?img=9",
    rating: 5,
  },
  {
    name: "@dev_jake",
    videos: "892 videos",
    text: "Clean UI, no ads, no BS. Exactly what I needed.",
    time: "2d ago",
    avatar: "DJ",
    photo: "https://i.pravatar.cc/150?img=15",
    rating: 5,
  },
  {
    name: "@emma.vids",
    videos: "3,104 videos",
    text: "Saved my entire draft folder before a trip. Works every time.",
    time: "3d ago",
    avatar: "EV",
    photo: "https://i.pravatar.cc/150?img=25",
    rating: 5,
  },
  {
    name: "@alex.content",
    videos: "756 videos",
    text: "HD quality is legit. Way better than other tools I tried.",
    time: "4d ago",
    avatar: "AC",
    photo: "https://i.pravatar.cc/150?img=33",
    rating: 4,
  },
  {
    name: "@nina.reposts",
    videos: "4,390 videos",
    text: "The shortcut lives in my Share sheet now. Couldn't live without it.",
    time: "5d ago",
    avatar: "NR",
    photo: "https://i.pravatar.cc/150?img=44",
    rating: 5,
  },
  {
    name: "@tom.edits",
    videos: "1,887 videos",
    text: "No account signup, no watermark — just paste and go.",
    time: "6d ago",
    avatar: "TE",
    photo: "https://i.pravatar.cc/150?img=52",
    rating: 5,
  },
  {
    name: "@priya.clips",
    videos: "2,210 videos",
    text: "Super reliable for reposting inspiration clips to my team.",
    time: "1w ago",
    avatar: "PC",
    photo: "https://i.pravatar.cc/150?img=47",
    rating: 5,
  },
  {
    name: "@ryan.m",
    videos: "643 videos",
    text: "Fast downloads even on slow Wi‑Fi. Five stars from me.",
    time: "1w ago",
    avatar: "RM",
    photo: "https://i.pravatar.cc/150?img=68",
    rating: 5,
  },
] as const;

export const SHORTCUT_STEPS = [
  "Tap Get TTD Shortcut and add it in the Shortcuts app",
  "Open any TikTok video → Share → TTD",
  "Video saves to Photos automatically — no watermark",
] as const;
