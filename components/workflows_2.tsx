import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import Spotlight from "@/components/spotlight";

export default function Workflows_2() {
  return (
    <section className="relative">
      <div className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="relative mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#3a6e6d,#3a6e6d,#3a6e6d)] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-5xl">
              Our Framework & Flow
            </h2>
            <p className="text-lg text-black">
              Understanding our systematic approach.
            </p>
          </div>

          {/* Framework and Flow Cards */}
          <div className="grid gap-12 md:gap-16" data-aos="fade-up">
            {/* Framework Card */}
            <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#3a6e6d] mb-6 text-center">The Framework</h3>
                <div className="relative mx-auto max-w-4xl overflow-hidden rounded-lg" data-aos="zoom-in" data-aos-delay="200">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="aspect-[16/9] relative">
                    <Image
                      className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                      src="/images/framework_img.png"
                      alt="Framework"
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </div>
                <div className="mt-6 text-center transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-black"></p>
                </div>
              </div>
            </div>

            {/* Flow Card */}
            <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#3a6e6d] mb-6 text-center">The Flow</h3>
                <div className="relative mx-auto max-w-4xl overflow-hidden rounded-lg" data-aos="zoom-in" data-aos-delay="400">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3a6e6d]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="aspect-[1628/527] relative">
                    <Image
                      className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                      src="/images/flow_img.png"
                      alt="Flow"
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </div>
                <div className="mt-6 text-center transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-black"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
