import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { testimonials } from "../data/testimonials";
import { Star } from "lucide-react";
export default function TestimonialsSection() {
  return (
    <section className="bg-[#24252d]  py-16 md:py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-primary">
            Real Community Voices
          </h2>
          <p className="text-gray-50/80 text-base md:text-lg max-w-xl mx-auto mt-5">
            Hear how our community is making a difference—through shared meals,
            support, and compassion. These voices reflect the power of small
            actions to create lasting change.
          </p>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="bg-background border border-border rounded-lg p-6 h-full shadow-sm  hover:shadow-md transition duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-foreground font-semibold">{t.name}</h4>
                    <p className="text-muted-foreground text-sm">{t.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(t.rating)
                          ? "text-yellow-500"
                          : i < t.rating
                          ? "text-yellow-400"
                          : "text-muted"
                      }`}
                      fill={i < t.rating ? "currentColor" : "none"}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t.feedback}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
