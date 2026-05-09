import { Wrench, Phone, Mail, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Car Wash",
  "Auto Parts",
  "Auto Service",
  "Engineering",
];

export function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-graphite-950 text-graphite-100 dark:bg-graphite-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Wrench className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-lg font-bold text-white">Bethara</p>
                <p className="text-[10px] font-medium uppercase tracking-widest text-graphite-300">
                  Engineering Service
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-graphite-300">
              Your trusted partner for comprehensive vehicle service, auto parts,
              car wash, and precision engineering solutions in Pannipitiya.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-lemon-lime">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-graphite-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-lemon-lime">
              Our Services
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-graphite-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-lemon-lime">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-lime-moss" />
                <span className="text-sm text-graphite-300">
                  790 Pannipitiya Rd, Pannipitiya 10230
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-lime-moss" />
                <a
                  href="tel:+94777355750"
                  className="text-sm text-graphite-300 transition-colors hover:text-white"
                >
                  077 735 5750
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-lime-moss" />
                <a
                  href="mailto:la.aura353@gmail.com"
                  className="text-sm text-graphite-300 transition-colors hover:text-white"
                >
                  la.aura353@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-graphite-500/30" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-graphite-400">
            © {new Date().getFullYear()} Bethara Engineering Service. All rights reserved.
          </p>
          <p className="text-xs text-graphite-400">
            790 Pannipitiya Rd, Pannipitiya 10230 · Sri Lanka
          </p>
        </div>
      </div>
    </footer>
  );
}
