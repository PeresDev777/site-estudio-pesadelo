import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import ComingSoonSection from "@/components/ComingSoonSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <section id="home">
          <HeroSection />
        </section>
        
        <section id="about">
          <AboutSection />
        </section>
        
        <section id="gallery">
          <GallerySection />
        </section>
        
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        
        <section id="team">
          <TeamSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
        
        <ComingSoonSection />
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-black mb-4">
                <span className="text-white">ESTÚDIO</span>{" "}
                <span className="gradient-text">PESADELO</span>
              </h3>
              <p className="text-white/80 mb-4">
                Espaço de arte e revolução.
              </p>
              <p className="text-white/60 text-sm">
                © 2025 Estúdio Pesadelo. Todos os direitos reservados.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Contato</h4>
              <div className="space-y-2 text-white/80 text-sm">
                <p>Av. Alberto Bins, 536 - Sala 501 - Centro Histórico</p>
                <p>Porto Alegre/RS - CEP: 90030-140</p>
                <p>(51) 98967-1717</p>
                <p>contato@pesadelo.com.br</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Funcionamento</h4>
              <div className="space-y-2 text-white/80 text-sm">
                <p>Segunda a Domingo: 08h às 22h</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
