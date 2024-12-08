import Image from "next/image";
import WorflowImg01 from "@/public/images/workflow-01.png";
import WorflowImg02 from "@/public/images/workflow-02.png";
import WorflowImg03 from "@/public/images/workflow-03.png";
import Spotlight from "@/components/spotlight";

export default function Workflows_3() {
  return (
    <section className="relative flex items-center justify-center min-h-screen px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-6">
            <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-10"></div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Flow
            </h2>
          </div>

          {/* Spotlight items */}
          <div className="flex justify-center w-full">
            <Spotlight className="grid justify-center max-w-sm gap-6 mx-auto lg:max-w-none lg:grid-cols-1">
              {/* Card */}
              <a
                className="group relative overflow-hidden bg-gray-800 rounded-2xl p-px h-full"
                href="#0"
              >
                <div className="relative z-20 overflow-hidden rounded-[inherit] bg-gray-950">
                  {/* Arrow */}
                  <div
                    className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={9}
                      height={8}
                      fill="none"
                    >
                      <path
                        fill="#F4F4F5"
                        d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                      />
                    </svg>
                  </div>
                  {/* Image */}
                  <Image
                    className="inline-flex"
                    src="/images/flow_img.png"
                    width={1920}
                    height={1080}
                    alt="Workflow 01"
                  />
                </div>
              </a>
            </Spotlight>
          </div>
        </div>
      </div>
    </section>
  );
}
