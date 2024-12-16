import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import Spotlight from "@/components/spotlight";

export default function our_distinct() {
    return (
        <section className="relative flex items-center justify-center py-6">
            <div className="border-t py-6 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-8">
                {/* Background Shape */}
                <div className="absolute top-0 left-0 right-0 z-0 overflow-hidden opacity-50">
                    <Image src={BlurredShapeGray} alt="Background Shape" className="w-full h-auto" />
                </div>

                <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
                    {/* Section Header */}
                    <div className="mx-auto max-w-3xl pb-6 text-center md:pb-8">
                        <div className="inline-flex items-center gap-3 pb-2 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-[#3a6e6d] after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-[#3a6e6d]">
                            <span className="inline-flex text-[#3a6e6d] font-semibold">
                                What Sets Us Apart
                            </span>
                        </div>
                        <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#3a6e6d,#3a6e6d,#3a6e6d)] bg-[length:200%_auto] bg-clip-text pb-3 font-nacelle text-3xl font-semibold text-transparent md:text-5xl">
                            Our Distinct Values
                        </h2>
                        <p className="text-lg text-black">
                            We stand apart with our collaborative approach and technology-driven operations to ensure transparency and efficiency.
                        </p>
                    </div>

                    {/* Values Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {/* Value 1: Collaborative Approach */}
                        <div
                            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                            data-aos="fade-up"
                            data-aos-duration="1500"
                        >
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 mb-4 rounded-full bg-[#3a6e6d]/10 flex items-center justify-center">
                                    <svg className="w-8 h-8 text-[#3a6e6d]" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-semibold text-[#3a6e6d] mb-3">Collaborative Approach</h3>
                                <p className="text-black text-center">
                                    We believe in working together with partners, customers, and stakeholders to create synergies that drive shared success.
                                </p>
                            </div>
                        </div>

                        {/* Value 2: Technology for Transparency */}
                        <div
                            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                            data-aos="fade-up"
                            data-aos-duration="1500"
                            data-aos-delay="300"
                        >
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 mb-4 rounded-full bg-[#3a6e6d]/10 flex items-center justify-center">
                                    <svg className="w-8 h-8 text-[#3a6e6d]" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-semibold text-[#3a6e6d] mb-3">Technology for Transparency</h3>
                                <p className="text-black text-center">
                                    Leveraging cutting-edge technology to provide real-time transparency and improve operational effectiveness, enabling better decision-making.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
