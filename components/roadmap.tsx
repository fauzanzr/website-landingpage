import Image from "next/image";

export default function Roadmap() {
  return (
    <section className="relative">
      <div className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="relative mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#3a6e6d,#3a6e6d,#3a6e6d)] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-5xl">
              Our Roadmap
            </h2>
            <p className="text-lg text-black">
              Expanding from one of the fastest-growing Horeca industries in Jogja, scaling to other regions, and replicating the success across similar wholesale verticals.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative" data-aos="fade-up">
            {/* Line */}
            <div className="absolute left-1/2 h-full w-0.5 bg-[#3a6e6d]/20 transform -translate-x-1/2"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {/* Item 1 */}
              <div className="relative flex items-center justify-between" data-aos="fade-up">
                <div className="w-5/12 pr-8 text-right">
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <h4 className="text-xl font-semibold text-[#3a6e6d] mb-2">Phase 1: Market Entry</h4>
                    <p className="text-black">Establishing strong presence in Jogja's HoReCa industry through strategic partnerships and innovative solutions.</p>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#3a6e6d] border-4 border-white"></div>
                <div className="w-5/12 pl-8"></div>
              </div>

              {/* Item 2 */}
              <div className="relative flex items-center justify-between" data-aos="fade-up" data-aos-delay="200">
                <div className="w-5/12 pr-8"></div>
                <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#3a6e6d] border-4 border-white"></div>
                <div className="w-5/12 pl-8">
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <h4 className="text-xl font-semibold text-[#3a6e6d] mb-2">Phase 2: Regional Expansion</h4>
                    <p className="text-black">Scaling operations to major cities across Indonesia while maintaining service quality and customer satisfaction.</p>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="relative flex items-center justify-between" data-aos="fade-up" data-aos-delay="400">
                <div className="w-5/12 pr-8 text-right">
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <h4 className="text-xl font-semibold text-[#3a6e6d] mb-2">Phase 3: Market Leadership</h4>
                    <p className="text-black">Becoming the leading B2B wholesale platform in Indonesia's HoReCa industry through continuous innovation.</p>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#3a6e6d] border-4 border-white"></div>
                <div className="w-5/12 pl-8"></div>
              </div>

              {/* Item 4 */}
              <div className="relative flex items-center justify-between" data-aos="fade-up" data-aos-delay="600">
                <div className="w-5/12 pr-8"></div>
                <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#3a6e6d] border-4 border-white"></div>
                <div className="w-5/12 pl-8">
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <h4 className="text-xl font-semibold text-[#3a6e6d] mb-2">Phase 4: Vertical Integration</h4>
                    <p className="text-black">Expanding into complementary verticals while maintaining our core focus on wholesale excellence.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
