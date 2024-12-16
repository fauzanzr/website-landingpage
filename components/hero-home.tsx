import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";

export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-2 sm:px-4">
        {/* Hero content */}
        <div className="py-6 md:py-8"> {/* Reduced padding */}
          {/* Section header */}
          <div className="pb-6 text-center md:pb-8"> {/* Reduced padding */}
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#2d3e3e,#3a6e6d,#2d3e3e)] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-6xl"
              data-aos="fade-up"
            >
              DFB
            </h1>
            <div className="mx-auto max-w-3xl">
            <p
              className="text-lg text-gray-700 leading-relaxed mb-8"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              The Hotel, Restaurant, and Café (HoReCa) industry is a dynamic and expansive sector that provides essential services within the hospitality industry. It focuses on catering to customers' needs for accommodation, dining, and social experiences.
            </p>
            <p
              className="text-lg text-gray-700 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              Demand of materials are high in big cities, with abundant consumption level. Expansion and growth of F&B players are high to promote the lifestyle of end customers (individual or businesses). Just-in-Time fulfillment and rapid delivery from direct vendors or distributors is very critical, thus infrastructure of logistic is fragmented. At the same time, utilizing workforce is another challenge.
            </p>

              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
