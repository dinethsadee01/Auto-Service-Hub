import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { GallerySection } from "@/components/sections/gallery";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="bethara-theme">
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Navbar />
        <main>
          <HeroSection />
          <ServicesSection />
          <GallerySection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
