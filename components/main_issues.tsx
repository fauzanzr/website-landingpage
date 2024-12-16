import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.png";
import WorflowImg01 from "@/public/images/demand.png";
import WorflowImg02 from "@/public/images/workflow-02.png";
import WorflowImg03 from "@/public/images/workflow-03.png";
import Spotlight from "@/components/spotlight";
import { Slide } from "react-awesome-reveal";

export default function Main_Issues() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#3a6e6d,#3a6e6d,#3a6e6d)] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-5xl">
              Main Issues in B2B Wholesale
            </h2>
            <p className="text-lg text-black">
              Understanding the critical challenges facing the industry today
            </p>
          </div>

          {/* Items */}
          <div className="mx-auto grid max-w-sm items-start gap-8 md:max-w-none md:grid-cols-3 lg:gap-16" data-aos="fade-up">
            {/* 1st item */}
            <div className="group relative flex h-full flex-col items-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-up" data-aos-delay="100">
              <div className="relative mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#3a6e6d]/10 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-[#3a6e6d]/5 before:transition-transform before:duration-300 group-hover:before:scale-110">
                <svg className="h-8 w-8 fill-current text-[#3a6e6d]" viewBox="0 0 32 32">
                  <path d="M19.18 12.18l-5.91 5.91a.75.75 0 1 1-1.06-1.06l5.91-5.91a.75.75 0 1 1 1.06 1.06zM16 28C9.383 28 4 22.617 4 16S9.383 4 16 4s12 5.383 12 12-5.383 12-12 12zm0-1.5c5.799 0 10.5-4.701 10.5-10.5S21.799 5.5 16 5.5 5.5 10.201 5.5 16 10.201 26.5 16 26.5z" />
                </svg>
              </div>
              <h4 className="mb-2 text-xl font-semibold text-[#3a6e6d] text-center">Limited Market Visibility</h4>
              <p className="text-black text-center">Difficulty in accessing real-time market data and trends, leading to missed opportunities and inefficient decision-making.</p>
              <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#3a6e6d]/20 to-[#3a6e6d]/40 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>

            {/* 2nd item */}
            <div className="group relative flex h-full flex-col items-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-up" data-aos-delay="200">
              <div className="relative mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#3a6e6d]/10 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-[#3a6e6d]/5 before:transition-transform before:duration-300 group-hover:before:scale-110">
                <svg className="h-8 w-8 fill-current text-[#3a6e6d]" viewBox="0 0 32 32">
                  <path d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm1.604 20.804l-6.391-6.391a.8.8 0 0 1 1.131-1.131L16 16.938l3.656-3.656a.8.8 0 0 1 1.131 1.131l-4.322 4.322a.8.8 0 0 1-1.131 0z" />
                </svg>
              </div>
              <h4 className="mb-2 text-xl font-semibold text-[#3a6e6d] text-center">Complex Supply Chain</h4>
              <p className="text-black text-center">Multiple intermediaries and manual processes causing delays, increased costs, and reduced efficiency in the supply chain.</p>
              <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#3a6e6d]/20 to-[#3a6e6d]/40 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>

            {/* 3rd item */}
            <div className="group relative flex h-full flex-col items-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-up" data-aos-delay="300">
              <div className="relative mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#3a6e6d]/10 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-[#3a6e6d]/5 before:transition-transform before:duration-300 group-hover:before:scale-110">
                <svg className="h-8 w-8 fill-current text-[#3a6e6d]" viewBox="0 0 32 32">
                  <path d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm7.07 24.316l-3.07-3.07a.8.8 0 0 1 1.131-1.131l3.07 3.07a.8.8 0 0 1-1.131 1.131zm-2.14-9.316h-4.8v4.8a.8.8 0 0 1-1.6 0v-4.8H9.73a.8.8 0 0 1 0-1.6h4.8V8.6a.8.8 0 0 1 1.6 0v4.8h4.8a.8.8 0 0 1 0 1.6z" />
                </svg>
              </div>
              <h4 className="mb-2 text-xl font-semibold text-[#3a6e6d] text-center">Payment Challenges</h4>
              <p className="text-black text-center">Traditional payment methods leading to delayed settlements, increased risk, and cash flow management issues.</p>
              <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#3a6e6d]/20 to-[#3a6e6d]/40 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          </div>

          {/* Additional Issues */}
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:mt-20" data-aos="fade-up" data-aos-delay="400">
            {/* 4th item */}
            <div className="group relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3a6e6d]/10 mr-4 group-hover:bg-[#3a6e6d]/20 transition-colors duration-300">
                  <svg className="h-6 w-6 fill-current text-[#3a6e6d]" viewBox="0 0 24 24">
                    <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm4.504 14.001l-3.503 3.503-3.503-3.503c-.393-.393-1.031-.393-1.424 0-.393.393-.393 1.031 0 1.424l4.215 4.215c.393.393 1.031.393 1.424 0l4.215-4.215c.393-.393.393-1.031 0-1.424-.393-.393-1.031-.393-1.424 0z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-[#3a6e6d] group-hover:translate-x-1 transition-transform duration-300">Limited Digital Adoption</h4>
              </div>
              <p className="text-black pl-16">Resistance to technological change and digital transformation, resulting in operational inefficiencies and reduced competitiveness.</p>
            </div>

            {/* 5th item */}
            <div className="group relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3a6e6d]/10 mr-4 group-hover:bg-[#3a6e6d]/20 transition-colors duration-300">
                  <svg className="h-6 w-6 fill-current text-[#3a6e6d]" viewBox="0 0 24 24">
                    <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm1.504 14.001h-3.008c-.556 0-1.001.445-1.001 1.001s.445 1.001 1.001 1.001h3.008c.556 0 1.001-.445 1.001-1.001s-.445-1.001-1.001-1.001z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-[#3a6e6d] group-hover:translate-x-1 transition-transform duration-300">Data Management</h4>
              </div>
              <p className="text-black pl-16">Inefficient handling of large volumes of data, leading to poor inventory management and forecasting capabilities.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
