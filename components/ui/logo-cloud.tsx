export default function LogoCloud() {
    const localLogos = [
        { src: "/assets/companies/1.png", alt: "NIMS Group", invert: true },
        { src: "/assets/companies/2.png", alt: "Golden Cosmos" },
        { src: "/assets/companies/3.png", alt: "Techno Alliance" },
        { src: "/assets/companies/4.png", alt: "SEED" },
        { src: "/assets/companies/5.png", alt: "TOSS Academy" },
        { src: "/assets/companies/7.png", alt: "IMPRINT" },
        { src: "/assets/companies/8.png", alt: "Uni Design" },
        { src: "/assets/companies/9.png", alt: "EduCraft" },
        { src: "/assets/companies/10.png", alt: "EMKE Garage", invert: true },
        { src: "/assets/companies/image 711.png", alt: "Loyaltri" },
    ];

    return (
        <section className="bg-white py-24 relative overflow-hidden">
            <div className="mx-auto max-w-6xl px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-accent font-bold tracking-widest uppercase text-xs mb-4 block">Our Ecosystem</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                        Powering Progress with a Network of Excellence
                    </h2>
                </div>
                
                {/* Local Ecosystem Logos */}
                <div className="mx-auto flex flex-wrap items-center justify-center gap-x-12 gap-y-10 md:gap-x-16">
                    {localLogos.map((logo, index) => (
                        <img 
                            key={index}
                            className={`h-12 md:h-16 w-auto opacity-70 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer object-contain ${logo.invert ? 'brightness-0' : ''}`} 
                            src={logo.src} 
                            alt={logo.alt} 
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
