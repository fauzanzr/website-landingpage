import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.png";

export default function Features() {
  return (
    <section className="relative">
      <div className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="relative mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#3a6e6d,#3a6e6d,#3a6e6d)] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-5xl">
              Innovative Features for Modern Business
            </h2>
            <p className="text-lg text-black">
              Empowering your business with cutting-edge solutions
            </p>
          </div>

          {/* Features grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-aos="fade-up">
            {/* 1st feature */}
            <div className="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3a6e6d]/10">
                  <svg className="h-6 w-6 fill-current text-[#3a6e6d]" viewBox="0 0 24 24">
                    <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm4.504 8.001h-1.005v1.001c0 .557-.445 1.002-1.001 1.002-.556 0-1.001-.445-1.001-1.002v-1.001h-1.005c-.556 0-1.001-.445-1.001-1.001s.445-1.001 1.001-1.001h1.005v-1.005c0-.556.445-1.001 1.001-1.001.556 0 1.001.445 1.001 1.001v1.005h1.005c.556 0 1.001.445 1.001 1.001s-.445 1.001-1.001 1.001z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-[#3a6e6d]">Smart Ordering</h4>
              </div>
              <p className="text-black">Streamlined ordering process with intelligent recommendations and automated reordering capabilities.</p>
            </div>

            {/* 2nd feature */}
            <div className="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3a6e6d]/10">
                  <svg className="h-6 w-6 fill-current text-[#3a6e6d]" viewBox="0 0 24 24">
                    <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm1.504 14.001l-3.503 3.503-3.503-3.503c-.393.393-1.031.393-1.424 0-.393-.393-.393-1.031 0-1.424l4.215 4.215c.393.393 1.031.393 1.424 0l4.215-4.215c.393-.393.393-1.031 0-1.424-.393-.393-1.031-.393-1.424 0z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-[#3a6e6d]">Real-time Analytics</h4>
              </div>
              <p className="text-black">Comprehensive analytics dashboard providing insights into sales, inventory, and market trends.</p>
            </div>

            {/* 3rd feature */}
            <div className="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-up" data-aos-delay="400">
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3a6e6d]/10">
                  <svg className="h-6 w-6 fill-current text-[#3a6e6d]" viewBox="0 0 24 24">
                    <path d="M19 8h5v2h-5V8Zm-4 5h9v2h-9v-2Zm9 5H11v2h13v-2Z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-[#3a6e6d]">Inventory Management</h4>
              </div>
              <p className="text-black">Advanced inventory tracking with predictive analytics for optimal stock levels.</p>
            </div>

            {/* 4th feature */}
            <div className="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-up" data-aos-delay="600">
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3a6e6d]/10">
                  <svg className="h-6 w-6 fill-current text-[#3a6e6d]" viewBox="0 0 24 24">
                    <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm4.504 14.001l-3.503-3.503-3.503 3.503c-.393-.393-1.031-.393-1.424 0-.393.393-.393 1.031 0 1.424l4.215 4.215c.393.393 1.031.393 1.424 0l4.215-4.215c.393-.393.393-1.031 0-1.424-.393-.393-1.031-.393-1.424 0z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-[#3a6e6d]">Supply Chain Integration</h4>
              </div>
              <p className="text-black">Seamless integration with suppliers and logistics partners for efficient operations.</p>
            </div>

            {/* 5th feature */}
            <div className="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-up" data-aos-delay="800">
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3a6e6d]/10">
                  <svg className="h-6 w-6 fill-current text-[#3a6e6d]" viewBox="0 0 24 24">
                    <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm4.504 8.001h-9.008c-.556 0-1.001.445-1.001 1.001s.445 1.001 1.001 1.001h9.008c.556 0 1.001-.445 1.001-1.001s-.445-1.001-1.001-1.001z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-[#3a6e6d]">Mobile Access</h4>
              </div>
              <p className="text-black">Full-featured mobile app for managing your business on the go.</p>
            </div>

            {/* 6th feature */}
            <div className="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-up" data-aos-delay="1000">
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3a6e6d]/10">
                  <svg className="h-6 w-6 fill-current text-[#3a6e6d]" viewBox="0 0 24 24">
                    <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm1.504 14.001l-3.503 3.503-3.503-3.503c-.393-.393-1.031-.393-1.424 0-.393.393-.393 1.031 0 1.424l4.215 4.215c.393.393 1.031.393 1.424 0l4.215-4.215c.393-.393.393-1.031 0-1.424-.393-.393-1.031-.393-1.424 0z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-[#3a6e6d]">24/7 Support</h4>
              </div>
              <p className="text-black">Round-the-clock customer support to ensure smooth business operations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
