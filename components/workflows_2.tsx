import Image from "next/image";
import WorflowImg01 from "@/public/images/workflow-01.png";
import WorflowImg02 from "@/public/images/workflow-02.png";
import WorflowImg03 from "@/public/images/workflow-03.png";
import Spotlight from "@/components/spotlight";

export default function Workflows_2() {
  return (
    <section className="relative flex items-center justify-center min-h-screen px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="pb-8 md:pb-10"> {/* Reduced padding */}
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-8 text-center md:pb-10"> {/* Reduced padding */}
            <div className="border-t py-6 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-8"></div> {/* Reduced py */}
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent leading-tight md:text-4xl">
              The Framework
            </h2>
          </div>

          {/* Spotlight items */}
          <div className="flex justify-center w-full">
            <Spotlight className="grid justify-center max-w-sm gap-4 mx-auto lg:max-w-none lg:grid-cols-1"> {/* Reduced gap */}
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
                    className="inline-flex mt-1" // Added margin-top for slight spacing
                    src="/images/framework_img.png"
                    width={450}
                    height={400}
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
