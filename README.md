# TTD — TikTok Downloader

TTD is a free TikTok video downloader built as a modern web app with an optional iPhone Shortcut. Paste a TikTok link in the browser to preview and download watermark-free HD videos, or install the Shortcut to save videos straight from TikTok’s Share menu to your Camera Roll.

## Features

- **No watermark** — Downloads clean HD video files without a burned-in logo
- **Web downloader** — Paste a link, preview the video, and download in one click
- **iPhone Shortcut** — One-tap downloads from TikTok’s Share sheet (no browser required)
- **No account** — No signup, subscription, or ads
- **Rate limiting** — Built-in protection against API abuse
- **Secure proxy** — Video downloads are proxied through an allowlisted CDN host check

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| UI | [React 19](https://react.dev/), [Tailwind CSS 3](https://tailwindcss.com/) |
| Language | TypeScript |
| Fonts | Geist, JetBrains Mono |
| Icons | Lucide React |
| Video resolution | [TikWM API](https://www.tikwm.com/) |

The app uses a **Kinetic Glass** design system (dark glassmorphism, TikTok-inspired pink/aqua accents). See [`DESIGN.md`](./DESIGN.md) for full design tokens and guidelines.

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone <repository-url>
cd ttd
npm install
cp .env.example .env
```

### Environment Variables

Copy `.env.example` to `.env` and adjust as needed:

| Variable | Description | Default |
|----------|-------------|---------|
| `TIKWM_API_BASE` | Upstream TikTok resolution API | `https://www.tikwm.com/api/` |
| `RATE_LIMIT_MAX` | Max requests per IP per window | `30` |
| `RATE_LIMIT_WINDOW_MS` | Rate limit window in milliseconds | `60000` |
| `NEXT_PUBLIC_SHORTCUT_URL` | Path to the Shortcut landing page | `/shortcut` |
| `NEXT_PUBLIC_ICLOUD_SHORTCUT_URL` | iCloud Shortcuts share link for one-tap install | _(optional)_ |
| `NEXT_PUBLIC_SITE_URL` | Public site URL (used in Shortcut setup examples) | _(optional)_ |

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production

```bash
npm run build
npm start
```

The app is configured for **standalone** output (`next.config.ts`), suitable for containerized deployments.

## Project Structure

```
src/
├── app/
│   ├── page.tsx                 # Home — web downloader
│   ├── layout.tsx               # Root layout & metadata
│   ├── shortcut/
│   │   ├── page.tsx             # iPhone Shortcut landing page
│   │   └── setup/page.tsx       # Manual Shortcut build guide
│   └── api/
│       ├── resolve/route.ts     # Resolve TikTok URL → video metadata
│       └── download/route.ts    # Proxy video file download
├── components/
│   ├── hero/                    # URL input & hero section
│   ├── cards/                   # Video preview & shortcut cards
│   ├── shortcut/                # Shortcut install UI
│   ├── layout/                  # Header, logo, background
│   ├── social/                  # Trust bar, stats footer
│   └── ui/                      # Buttons, glass cards, badges
├── lib/
│   ├── providers/tikwm.ts       # TikWM API integration
│   ├── tiktok.ts                # URL validation & normalization
│   ├── rate-limit.ts            # In-memory IP rate limiter
│   ├── api-client.ts            # Frontend API helpers
│   └── constants.ts             # Marketing copy & config
└── types/
    └── video.ts                 # VideoData & API types
```

## API Reference

### `POST /api/resolve`

Resolves a TikTok URL to downloadable video metadata.

**Request body:**

```json
{ "url": "https://www.tiktok.com/@user/video/1234567890" }
```

**Response:**

```json
{
  "id": "1234567890",
  "title": "Video title",
  "author": "username",
  "cover": "https://...",
  "downloadUrl": "https://...",
  "duration": 15
}
```

Also supports `GET /api/resolve?url=...` for use from the iPhone Shortcut.

### `GET /api/download`

Proxies a video file from an allowlisted TikTok CDN host.

**Query parameters:**

| Param | Required | Description |
|-------|----------|-------------|
| `url` | Yes | Direct CDN video URL from `downloadUrl` |
| `filename` | No | Download filename (default: `tiktok-video.mp4`) |

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Web downloader — paste a TikTok link and download |
| `/shortcut` | Marketing landing page for the iPhone Shortcut |
| `/shortcut/setup` | Step-by-step guide to build the Shortcut manually |

## How It Works

1. **Resolve** — User submits a TikTok URL. The server validates it, calls the TikWM API with `hd=1`, and returns metadata including a watermark-free download URL.
2. **Download** — The browser requests `/api/download`, which fetches the video from TikTok’s CDN (host allowlist enforced) and streams it back with a `Content-Disposition: attachment` header.
3. **Shortcut** — On iPhone, a Shortcuts workflow shares a TikTok link to `GET /api/resolve`, extracts `downloadUrl`, fetches the video, and saves it to Photos.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## License

Private project — see repository owner for usage terms.
# ttd
