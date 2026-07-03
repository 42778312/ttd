import Image from "next/image";
import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
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
              : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="p-3 w-56 sm:w-64 shrink-0">
      <div className="flex items-center gap-2 mb-2">
        <div className="relative w-7 h-7 rounded-full overflow-hidden border border-border shrink-0">
          <Image
            src={testimonial.photo}
            alt={testimonial.name}
            fill
            sizes="28px"
            className="object-cover"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium text-foreground truncate">
            {testimonial.name}
          </p>
          <p className="text-[10px] text-muted-foreground truncate">
            {testimonial.videos}
          </p>
        </div>
        <StarRating rating={testimonial.rating} />
      </div>
      <p className="text-xs text-muted-foreground leading-snug line-clamp-2">
        {testimonial.text}
      </p>
      <p className="text-[10px] text-muted-foreground/70 mt-1.5">
        {testimonial.time}
      </p>
    </Card>
  );
}

export function TrustBar() {
  const looped = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <div className="w-full shrink-0 mt-auto overflow-hidden testimonial-marquee-mask -mx-gutter">
      <div
        className="flex w-max gap-3 animate-testimonial-scroll hover:[animation-play-state:paused]"
        style={{ animationDuration: "55s" }}
      >
        {looped.map((testimonial, i) => (
          <TestimonialCard key={`${testimonial.name}-${i}`} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}
