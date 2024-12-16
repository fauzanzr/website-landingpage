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
              Main Issues
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
                  <path d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm1.604 20.804l-6.391-6.391a.8.8 0 0 1 1.131-1.131L16 16.938l3.656-3.656a.8.8 0 0 1 1.131 1.131l-4.322 4.322a.8.8 0 0 1-1.131 0z" />
                </svg>
              </div>
              <h4 className="mb-2 text-xl font-semibold text-[#3a6e6d] text-center">Uncertain and unpredictable market demands</h4>
              <p className="text-black text-center"></p>
              <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#3a6e6d]/20 to-[#3a6e6d]/40 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>

            {/* 2nd item */}
            <div className="group relative flex h-full flex-col items-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-up" data-aos-delay="200">
              <div className="relative mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#3a6e6d]/10 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-[#3a6e6d]/5 before:transition-transform before:duration-300 group-hover:before:scale-110">
                <svg className="h-8 w-8 fill-current text-[#3a6e6d]" viewBox="0 0 32 32">
                  <path d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm1.604 20.804l-6.391-6.391a.8.8 0 0 1 1.131-1.131L16 16.938l3.656-3.656a.8.8 0 0 1 1.131 1.131l-4.322 4.322a.8.8 0 0 1-1.131 0z" />
                </svg>
              </div>
              <h4 className="mb-2 text-xl font-semibold text-[#3a6e6d] text-center">Speed of fulfillment and rapid delivery requirements</h4>
              <p className="text-black text-center"></p>
              <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#3a6e6d]/20 to-[#3a6e6d]/40 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>

            {/* 3rd item */}
            <div className="group relative flex h-full flex-col items-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-up" data-aos-delay="300">
              <div className="relative mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#3a6e6d]/10 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-[#3a6e6d]/5 before:transition-transform before:duration-300 group-hover:before:scale-110">
                <svg className="h-8 w-8 fill-current text-[#3a6e6d]" viewBox="0 0 32 32">
                  <path d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm1.604 20.804l-6.391-6.391a.8.8 0 0 1 1.131-1.131L16 16.938l3.656-3.656a.8.8 0 0 1 1.131 1.131l-4.322 4.322a.8.8 0 0 1-1.131 0z" />
                </svg>
              </div>
              <h4 className="mb-2 text-xl font-semibold text-[#3a6e6d] text-center">Competitive price or tight price war </h4>
              <p className="text-black text-center"></p>
              <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#3a6e6d]/20 to-[#3a6e6d]/40 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
