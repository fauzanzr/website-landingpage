import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import Spotlight from "@/components/spotlight";

export default function our_distinct() {
    return (
        <section className="relative flex items-center justify-center min-h-screen py-1">
            <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
                {/* Background Shape */}
                <div className="absolute top-0 left-0 right-0 z-0 overflow-hidden">
                    <Image src={BlurredShapeGray} alt="Background Shape" className="w-full h-auto" />
                </div>

                <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
                    {/* Section Header */}
                    <div className="mx-auto max-w-3xl pb-6 text-center md:pb-12">
                        <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                            Our Distinct Values
                        </h2>
                        <p className="text-lg text-gray-700 font-light">
                            We stand apart with our collaborative approach and technology-driven operations to ensure transparency and efficiency.
                        </p>
                    </div>

                    {/* Values Section */}
                    <div className="flex flex-wrap gap-12 justify-center">
                        {/* Value 1: Collaborative Approach */}
                        <div
                            className="w-full md:w-5/12 bg-indigo-600 text-white rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300"
                            data-aos="fade-up"
                            data-aos-duration="1500"
                        >
                            <div className="mb-6 text-center">
                                <h3 className="text-2xl font-semibold mb-2">Collaborative Approach</h3>
                                <p className="text-lg font-light">
                                    We believe in working together with partners, customers, and stakeholders to create synergies that drive shared success.
                                </p>
                            </div>
                        </div>

                        {/* Value 2: Technology for Transparency and Operational Effectiveness */}
                        <div
                            className="w-full md:w-5/12 bg-green-600 text-white rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300"
                            data-aos="fade-up"
                            data-aos-duration="1500"
                            data-aos-delay="500"
                        >
                            <div className="mb-6 text-center">
                                <h3 className="text-2xl font-semibold mb-2">Technology for Transparency</h3>
                                <p className="text-lg font-light">
                                    Leveraging cutting-edge technology to provide real-time transparency and improve operational effectiveness, enabling better decision-making.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Background Shape (second part) */}
                    <div className="absolute bottom-0 left-0 right-0 z-0 overflow-hidden">
                        <Image src={BlurredShape} alt="Background Shape" className="w-full h-auto" />
                    </div>
                </div>
            </div>
        </section>
    );
}
