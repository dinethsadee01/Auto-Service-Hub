import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      {/* TODO: Replace with actual exterior photo of Bethara Engineering Service workshop */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=1920&q=80"
          alt="Vehicle service workshop"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-lemon-lime/30 bg-lemon-lime/10 px-4 py-1.5 text-xs font-medium text-lemon-lime backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-lemon-lime animate-pulse" />
            Trusted Auto Service in Pannipitiya
          </div>

          {/* Heading */}
          <h1
            className="animate-fade-up text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ animationDelay: "0.1s" }}
          >
            Expert Vehicle <span className="text-lemon-lime">Service & Auto</span> Engineering
          </h1>

          {/* Subheading */}
          <p
            className="animate-fade-up mt-6 max-w-xl text-base leading-relaxed text-graphite-100/80 sm:text-lg"
            style={{ animationDelay: "0.2s" }}
          >
            From professional car wash to precision engineering - <span className="text-lemon-lime">Bethara</span> delivers
            comprehensive automotive solutions you can rely on. Quality service,
            genuine parts, expert care.
          </p>

          {/* CTAs */}
          <div
            className="animate-fade-up mt-8 flex flex-wrap gap-4"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              onClick={() => scrollTo("#services")}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 gap-2 text-base h-12"
            >
              Our Services
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              onClick={() => scrollTo("#contact")}
              variant="outline"
              size="lg"
              className="rounded-full px-8 border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white text-base h-12"
            >
              Contact Us
            </Button>
          </div>

          {/* Stats row */}
          <div
            className="animate-fade-up mt-14 grid grid-cols-3 gap-6 max-w-md"
            style={{ animationDelay: "0.4s" }}
          >
            {[
              { value: "10+", label: "Years Experience" },
              { value: "5000+", label: "Happy Customers" },
              { value: "4", label: "Service Areas" },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="text-2xl font-bold text-lemon-lime sm:text-3xl">
                  {stat.value}
                </p>
                <p className="text-xs text-graphite-300 sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("#services")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/50 transition-colors hover:text-white"
        aria-label="Scroll to services"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </button>
    </section>
  );
}
