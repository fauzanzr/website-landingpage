import Spotlight from "@/components/spotlight";

export default function our_position() {
    return(
        <section className="relative flex items-center justify-center min-h-screen">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
                {/* Section header */}
                <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
                    <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                        Our Position
                    </h2>
                </div>
                {/* Spotlight items */}
                <Spotlight className="mx-auto max-w-sm flex items-center justify-center gap-6 lg:max-w-lg lg:flex-row">
                    <a
                    className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
                    data-aos="fade"
                    data-aos-once="false"
                    data-aos-duration="2000"
                    >
                    <div className="relative z-20 h-full p-5 pt-8 pb-9 overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                        {/* Content */}
                        <div className="p-6">
                        <h3 className="mb-1 font-nacelle text-[1.50rem] font-semibold text-center inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                            Not just a distributor, but as a marketplace to deliver and source materials of specific Horeka vertical needs.
                        </h3>
                        </div>
                    </div>
                    </a>
                </Spotlight>
                </div>
            </div>
        </section>
    );
}