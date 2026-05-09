import { Shield, Users, Clock, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const stats = [
  { icon: Clock, value: "10+", label: "Years in Business" },
  { icon: Users, value: "5,000+", label: "Happy Customers" },
  { icon: Shield, value: "100%", label: "Genuine Parts" },
  { icon: Award, value: "4-in-1", label: "Service Areas" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1 text-xs font-medium">
            About Us
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Built on <span className="text-gradient">Trust & Quality</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            {/* TODO: Replace with actual team photo or workshop overview photo of Bethara */}
            <div className="relative overflow-hidden rounded-2xl">
              <img src="https://images.unsplash.com/photo-1632823471565-1ecdf5c6d7b6?w=800&q=80" alt="Bethara Engineering Service team at work" className="h-72 sm:h-96 w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite/60 to-transparent" />
            </div>
            {/* TODO: Replace with actual portrait photo of Mr. Chaminda Perera */}
            <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-5">
              <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-primary">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" alt="Mr. Chaminda Perera" className="h-full w-full object-cover" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Mr. Chaminda Perera</p>
                <p className="text-sm text-muted-foreground">Founder & Lead Engineer</p>
                <p className="mt-1 text-xs text-primary font-medium">10+ Years of Automotive Excellence</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Your Neighborhood's Trusted Auto Care Partner</h3>
              <Separator className="my-4 w-16 bg-primary" />
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Bethara Engineering Service has been serving the Pannipitiya community for over a decade, providing reliable and affordable automotive solutions. Founded by Mr. Chaminda Perera, our workshop has grown from a small garage to a full-service automotive center.</p>
              <p>We specialize in four key areas - <strong className="text-foreground">car wash</strong>, <strong className="text-foreground">auto parts</strong>, <strong className="text-foreground">auto service</strong>, and <strong className="text-foreground">precision engineering</strong> - all under one roof.</p>
              <p>Whether you need a quick wash, routine maintenance, a hard-to-find part, or custom engineering work, Bethara is your one-stop destination.</p>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-6">
              {["Expert Technicians", "Genuine Parts Only", "Honest Pricing", "Customer First"].map((value) => (
                <div key={value} className="flex items-center gap-2 rounded-lg bg-primary/5 px-3 py-2.5 border border-primary/10">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="group flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-primary/30 hover:shadow-lg">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <stat.icon className="h-5 w-5" />
              </div>
              <p className="text-2xl font-bold text-foreground sm:text-3xl">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
