import Spotlight from "@/components/spotlight";

export default function Workflows() {
  return (
    <section className="relative">
      <div className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="relative mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#3a6e6d,#3a6e6d,#3a6e6d)] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up">
              Key Features of the HoReCa Industry
            </h2>
            <p className="text-lg text-black"
              data-aos="fade-up">
              Empowering businesses with seamless ordering and efficient inventory management
            </p>
          </div>

          {/* Items */}
          <div className="grid gap-8 md:grid-cols-3" data-aos="fade-up" data-aos-delay="200">
            {/* 1st item */}
            <div className="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="mb-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#3a6e6d]/10">
                  <svg className="h-6 w-6 fill-current text-[#3a6e6d]" viewBox="0 0 24 24">
                    <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm-1.504 14.001h-1.005v1.001c0 .557-.445 1.002-1.001 1.002-.556 0-1.001-.445-1.001-1.002v-1.001h-1.005c-.556 0-1.001-.445-1.001-1.001s.445-1.001 1.001-1.001h1.005v-1.005c0-.556.445-1.001 1.001-1.001.556 0 1.001.445 1.001 1.001v1.005h1.005c.556 0 1.001.445 1.001 1.001s-.445 1.001-1.001 1.001zm7.012-3.003c-.556 0-1.001-.445-1.001-1.001s.445-1.001 1.001-1.001h1.005c.556 0 1.001.445 1.001 1.001s-.445 1.001-1.001 1.001h-1.005z" />
                  </svg>
                </div>
              </div>
              <h4 className="mb-2 text-xl font-semibold text-[#3a6e6d]">Customer-Centric</h4>
              <p className="text-black">The industry prioritizes customer satisfaction and personalization.</p>
            </div>

            {/* 2nd item */}
            <div className="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-up" data-aos-delay="400">
              <div className="mb-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#3a6e6d]/10">
                  <svg className="h-6 w-6 fill-current text-[#3a6e6d]" viewBox="0 0 24 24">
                    <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm4.504 14.001h-9.008c-.556 0-1.001-.445-1.001-1.001s.445-1.001 1.001-1.001h9.008c.556 0 1.001.445 1.001 1.001s-.445 1.001-1.001 1.001z" />
                  </svg>
                </div>
              </div>
              <h4 className="mb-2 text-xl font-semibold text-[#3a6e6d]">Diverse Offerings</h4>
              <p className="text-black">Catering to a range of preferences, from luxury services to budget-friendly options.</p>
            </div>

            {/* 3rd item */}
            <div className="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-up" data-aos-delay="600">
              <div className="mb-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#3a6e6d]/10">
                  <svg className="h-6 w-6 fill-current text-[#3a6e6d]" viewBox="0 0 24 24">
                    <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm-4.504 14.001l3.503-3.503 3.503 3.503c.393.393 1.031.393 1.424 0 .393-.393.393-1.031 0-1.424l-4.215-4.215c-.393-.393-1.031-.393-1.424 0l-4.215 4.215c-.393.393-.393 1.031 0 1.424.393.393 1.031.393 1.424 0z" />
                  </svg>
                </div>
              </div>
              <h4 className="mb-2 text-xl font-semibold text-[#3a6e6d]">Dynamic Trends</h4>
              <p className="text-black">Continuously influenced by lifestyle trends, technology, and cultural changes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
