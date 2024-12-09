import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import Spotlight from "@/components/spotlight";

export default function roadmap() {
    return (
        <section className="relative flex items-center justify-center min-h-screen py-12 ">
            <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
                {/* Background Shape */}
                <div className="absolute top-0 left-0 right-0 z-0 overflow-hidden">
                    <Image src={BlurredShapeGray} alt="Background Shape" className="w-full h-auto" />
                </div>

                <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
                    {/* Section Header */}
                    <div className="mx-auto max-w-3xl pb-6 text-center md:pb-12">
                        <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                            Our Roadmap: Beginning from Jogja
                        </h2>
                        <p className="text-lg bg-gradient-to-r from-indigo-200/65 to-indigo-500/65 bg-clip-text text-transparent">
                            Expanding from one of the fastest-growing Horeca industries in Jogja, scaling to other regions, and replicating the success across similar wholesale verticals.
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="relative flex items-center justify-center">
                        {/* Curved Line */}
                        <div className="absolute top-1/2 left-0 right-0 z-0 h-1 bg-indigo-400/50 rounded-full max-w-full -mt-5"></div>

                        {/* Timeline Points */}
                        <div className="flex items-center justify-between w-full max-w-6xl space-x-6">
                            {/* Phase 1: Start in Jogja */}
                            <div
                                className="relative flex flex-col items-center justify-center"
                                data-aos="fade-up"
                                data-aos-duration="1500"
                            >
                                <div className="w-8 h-8 rounded-full bg-indigo-600 border-4 border-indigo-800 absolute top-0 transform translate-y-[-50%]"></div>
                                <div className="w-2 h-3 rounded-full bg-indigo-600 absolute top-1/2 -mt-6"></div>
                                <div className="text-center mt-4">
                                    <h3 className="font-semibold text-xl text-indigo-500">Phase 1: Begin in Jogja</h3>
                                    <p className="text-sm text-indigo-200/65 pt-14">
                                        Launching operations in Jogja, one of the fastest-growing Horeca markets in Indonesia, providing a solid foundation for expansion.
                                    </p>
                                </div>
                            </div>

                            {/* Phase 2: Scaling to Other Regions */}
                            <div
                                className="relative flex flex-col items-center justify-center"
                                data-aos="fade-up"
                                data-aos-duration="1500"
                                data-aos-delay="500"
                            >
                                <div className="w-8 h-8 rounded-full bg-green-600 border-4 border-green-800 absolute top-0 transform translate-y-[-50%]"></div>
                                <div className="w-2 h-3 rounded-full bg-green-600 absolute top-1/2 -mt-6"></div>
                                <div className="text-center mt-4">
                                    <h3 className="font-semibold text-xl text-green-600">Phase 2: Scaling Nationwide</h3>
                                    <p className="text-sm text-indigo-200/65 pt-14">
                                        Expanding into other regions, leveraging our proven model to cater to the growing Horeca demands across Indonesia.
                                    </p>
                                </div>
                            </div>

                            {/* Phase 3: Replication in Similar Wholesale Markets */}
                            <div
                                className="relative flex flex-col items-center justify-center"
                                data-aos="fade-up"
                                data-aos-duration="1500"
                                data-aos-delay="1000"
                            >
                                <div className="w-8 h-8 rounded-full bg-purple-600 border-4 border-purple-800 absolute top-0 transform translate-y-[-50%]"></div>
                                <div className="w-2 h-3 rounded-full bg-purple-600 absolute top-1/2 -mt-6"></div>
                                <div className="text-center mt-4">
                                    <h3 className="font-semibold text-xl text-purple-600">Phase 3: Replicating in Wholesale</h3>
                                    <p className="text-sm text-indigo-200/65 pt-14">
                                        Applying our success model to similar wholesale verticals, creating a sustainable and scalable business in other markets.
                                    </p>
                                </div>
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
