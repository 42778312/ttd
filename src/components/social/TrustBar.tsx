import Image from "next/image";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

type Testimonial = (typeof TESTIMONIALS)[number];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-2.5 h-2.5 ${
            i < rating
              ? "fill-primary text-primary"
              : "fill-white/10 text-white/20"
          }`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="glass rounded-xl p-2.5 glass-hover group w-64 shrink-0">
      <div className="flex items-center gap-2 mb-1.5">
        <div className="relative w-7 h-7 rounded-full overflow-hidden border border-primary/30 shrink-0">
          <Image
            src={testimonial.photo}
            alt={testimonial.name}
            fill
            sizes="28px"
            className="object-cover"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-semibold text-white truncate">
            {testimonial.name}
          </p>
          <p className="text-[9px] font-mono text-on-surface-variant/70 truncate">
            {testimonial.videos}
          </p>
        </div>
        <StarRating rating={testimonial.rating} />
      </div>
      <p className="text-[10px] text-on-surface-variant leading-snug line-clamp-2">
        {testimonial.text}
      </p>
      <p className="text-[9px] text-on-surface-variant/50 mt-1 font-mono">
        {testimonial.time}
      </p>
    </div>
  );
}

function TestimonialsMarquee() {
  const looped = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <div className="hidden lg:block overflow-hidden testimonial-marquee-mask">
      <div
        className="flex w-max gap-2 animate-testimonial-scroll hover:[animation-play-state:paused]"
        style={{ animationDuration: "55s" }}
      >
        {looped.map((testimonial, i) => (
          <TestimonialCard key={`${testimonial.name}-${i}`} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}

export function TrustBar() {
  return (
    <section className="shrink-0 space-y-2">
      <div className="flex items-center justify-center gap-3">
        <div className="flex -space-x-2">
          {TESTIMONIALS.slice(0, 4).map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative w-7 h-7 rounded-full overflow-hidden border-2 border-background shrink-0"
            >
              <Image
                src={testimonial.photo}
                alt={testimonial.name}
                fill
                sizes="28px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div>
          <p className="text-xs font-semibold text-white">
            Loved by <span className="text-gradient-primary">1,247,893+</span> users
          </p>
          <div className="flex items-center gap-1 mt-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-primary text-primary" />
            ))}
            <span className="text-[10px] text-on-surface-variant ml-1">
              4.9/5 · 86k+ reviews
            </span>
          </div>
        </div>
      </div>

      <TestimonialsMarquee />
    </section>
  );
}
