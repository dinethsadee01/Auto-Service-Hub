import { Droplets, Cog, Wrench, Settings } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: Droplets,
    title: "Car Wash",
    badge: "Popular",
    description:
      "Professional exterior and interior cleaning using industry-grade equipment. We ensure your vehicle looks showroom-fresh every visit.",
    features: ["Exterior Wash", "Interior Cleaning", "Wax & Polish", "Detailing"],
    /* TODO: Replace with actual photo of car wash service at Bethara */
    image:
      "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&q=80",
  },
  {
    icon: Cog,
    title: "Auto Parts",
    badge: "Genuine",
    description:
      "Wide selection of genuine and OEM auto parts for all major vehicle brands. Quality parts at competitive prices with expert guidance.",
    features: ["Engine Parts", "Brake Systems", "Filters & Fluids", "Electrical"],
    /* TODO: Replace with actual photo of auto parts display at Bethara */
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80",
  },
  {
    icon: Wrench,
    title: "Auto Service",
    badge: "Full Service",
    description:
      "Comprehensive vehicle servicing and maintenance by certified mechanics. From routine checkups to complex repairs, we've got you covered.",
    features: ["Full Servicing", "Diagnostics", "Repairs", "Tune-ups"],
    /* TODO: Replace with actual photo of mechanic working at Bethara */
    image:
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&q=80",
  },
  {
    icon: Settings,
    title: "Engineering",
    badge: "Precision",
    description:
      "Precision engineering and fabrication services. Custom machining, welding, and mechanical solutions for automotive and industrial needs.",
    features: ["Fabrication", "Welding", "Machining", "Custom Work"],
    /* TODO: Replace with actual photo of engineering/fabrication work at Bethara */
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge
            variant="secondary"
            className="mb-4 rounded-full px-4 py-1 text-xs font-medium"
          >
            What We Offer
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Complete Automotive{" "}
            <span className="text-gradient">Solutions</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
            From a sparkling car wash to precision engineering - we provide
            end-to-end automotive care under one roof.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group overflow-hidden border border-border/50 bg-card hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <Badge className="bg-primary/90 text-primary-foreground text-xs backdrop-blur-sm">
                    {service.badge}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-sm leading-relaxed mt-2">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1.5">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
