import Spotlight from "@/components/spotlight";

export default function our_position() {
    return(
        <section className="relative flex items-center justify-center py-6">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="border-t py-6 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-8">
                {/* Section header */}
                <div className="mx-auto max-w-3xl pb-4 text-center md:pb-6">
                    <div className="inline-flex items-center gap-3 pb-2 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-[#3a6e6d] after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-[#3a6e6d]">
                    </div>
                    <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#3a6e6d,#3a6e6d,#3a6e6d)] bg-[length:200%_auto] bg-clip-text pb-3 font-nacelle text-3xl font-semibold text-transparent md:text-5xl">
                        Our Position
                    </h2>
                </div>
                {/* Spotlight items */}
                <Spotlight className="mx-auto max-w-sm flex items-center justify-center gap-4 lg:max-w-lg lg:flex-row">
                    <div
                    className="group relative h-full overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
                    data-aos="fade"
                    data-aos-once="false"
                    data-aos-duration="1500"
                    >
                    <div className="relative z-20 h-full p-8">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 mb-4 rounded-full bg-[#3a6e6d]/10 flex items-center justify-center">
                                <svg className="w-8 h-8 text-[#3a6e6d]" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zm5.99 7.176A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-semibold text-center text-[#3a6e6d] mb-4">
                                Not just a distributor
                            </h3>
                            <p className="text-lg text-black text-center">
                                We position ourselves as a marketplace to deliver and source materials of specific Horeka vertical needs, creating value beyond traditional distribution.
                            </p>
                        </div>
                    </div>
                    </div>
                </Spotlight>
                </div>
            </div>
        </section>
    );
}