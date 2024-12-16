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

          {/* Additional Features */}
          <div className="mt-16 grid gap-8 md:grid-cols-3" data-aos="fade-up" data-aos-delay="600">
            {/* Feature 1 */}
            <div className="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3a6e6d]/10 mr-4">
                  <svg className="h-6 w-6 fill-current text-[#3a6e6d]" viewBox="0 0 24 24">
                    <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm4.504 8.001h-9.008c-.556 0-1.001.445-1.001 1.001s.445 1.001 1.001 1.001h9.008c.556 0 1.001-.445 1.001-1.001s-.445-1.001-1.001-1.001z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-[#3a6e6d]">Systematic Approach</h4>
              </div>
              <p className="text-black">Well-defined processes ensure consistent quality and reliability in every transaction.</p>
            </div>

            {/* Feature 2 */}
            <div className="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3a6e6d]/10 mr-4">
                  <svg className="h-6 w-6 fill-current text-[#3a6e6d]" viewBox="0 0 24 24">
                    <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm-1.504 14.001h-1.005v1.001c0 .557-.445 1.002-1.001 1.002-.556 0-1.001-.445-1.001-1.002v-1.001h-1.005c-.556 0-1.001-.445-1.001-1.001s.445-1.001 1.001-1.001h1.005v-1.005c0-.556.445-1.001 1.001-1.001.556 0 1.001.445 1.001 1.001v1.005h1.005c.556 0 1.001.445 1.001 1.001s-.445 1.001-1.001 1.001z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-[#3a6e6d]">Efficient Integration</h4>
              </div>
              <p className="text-black">Seamless integration between different components of the wholesale ecosystem.</p>
            </div>

            {/* Feature 3 */}
            <div className="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3a6e6d]/10 mr-4">
                  <svg className="h-6 w-6 fill-current text-[#3a6e6d]" viewBox="0 0 24 24">
                    <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm4.504 14.001l-3.503-3.503-3.503 3.503c-.393.393-1.031.393-1.424 0-.393-.393-.393-1.031 0-1.424l4.215-4.215c.393-.393 1.031-.393 1.424 0l4.215 4.215c.393.393.393 1.031 0 1.424-.393.393-1.031.393-1.424 0z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-[#3a6e6d]">Continuous Optimization</h4>
              </div>
              <p className="text-black">Regular improvements based on data analytics and user feedback.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
