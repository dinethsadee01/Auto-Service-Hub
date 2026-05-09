import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "077 735 5750",
    href: "tel:+94777355750",
    description: "Call us anytime",
  },
  {
    icon: Mail,
    label: "Email",
    value: "la.aura353@gmail.com",
    href: "mailto:la.aura353@gmail.com",
    description: "Send us a message",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "790 Pannipitiya Rd, Pannipitiya 10230",
    href: "https://maps.app.goo.gl/uiqgpd6BRkxCQ1z28",
    description: "Visit our workshop",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon – Sun: 8 AM – 5 PM",
    href: undefined,
    description: "Open every day",
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with a backend service (e.g., Formspree, EmailJS) for form submission
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  /* WhatsApp uses developer number for testing: 0707835673 → +94707835673 */
  const whatsappLink = "https://wa.me/94707835673?text=Hi%20Bethara%20Engineering%20Service%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.";

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1 text-xs font-medium">
            Get in Touch
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Contact <span className="text-gradient">Us</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
            Have a question or need a service? Reach out to us - we're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Contact Info + Map */}
          <div className="lg:col-span-3 space-y-6">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {contactInfo.map((info) => (
                <Card key={info.label} className="border-border/50 hover:border-primary/30 transition-all">
                  <CardContent className="flex items-start gap-4 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground">{info.description}</p>
                      <p className="font-semibold text-sm text-foreground mt-0.5">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} target={info.label === "Location" ? "_blank" : undefined} rel="noopener noreferrer" className="text-sm text-primary hover:underline break-all">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Google Map */}
            <div className="overflow-hidden rounded-xl border border-border">
              <iframe
                title="Bethara Engineering Service Location"
                src="https://maps.google.com/maps?q=790+Pannipitiya+Rd+Pannipitiya+10230&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>

            {/* WhatsApp Button */}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full rounded-xl bg-[#25D366] p-4 text-white font-semibold transition-all hover:bg-[#20BD5A] hover:shadow-lg">
              <img src="src\assets\whatsapp-white-icon.webp" alt="WhatsApp" className="h-6 w-6" />
              Chat with us on WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-1">Send us a Message</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Fill out the form and we'll get back to you as soon as possible.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
                    <Input id="contact-name" placeholder="Your full name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                    <Input id="contact-phone" type="tel" placeholder="07X XXX XXXX" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                    <Input id="contact-email" type="email" placeholder="your@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                    <Textarea id="contact-message" placeholder="Tell us about your vehicle and what service you need..." rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
                  </div>
                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full gap-2 h-11">
                    <Send className="h-4 w-4" />
                    Send Message
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    We typically respond within a few hours during business hours.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
