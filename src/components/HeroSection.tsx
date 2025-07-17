import { Button } from "@/components/ui/button";
import { MessageCircle, Star } from "lucide-react";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5551989671717?text=Olá! Gostaria de agendar uma consulta para tatuagem.",
      "_blank"
    );
  };

  const handleGalleryClick = () => {
    document.getElementById("gallery")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with lighter blur */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-[2px] scale-105"
        style={{ backgroundImage: `url('/fundo-hero.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="fade-in-up">
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="text-white">ESTÚDIO</span>{" "}
            <span className="gradient-text">PESADELO</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
            Espaço de arte e revolução.
          </p>
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
            insira aqui uma descrição muito foda do estúdio nightmare
            kkkkkkkkk
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in-scale">
          <Button
            variant="hero"
            size="lg"
            onClick={handleWhatsAppClick}
            className="text-lg px-8 py-4 min-w-[200px]"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Agendar Consulta
          </Button>

          <Button
            variant="outline_hero"
            size="lg"
            onClick={handleGalleryClick}
            className="text-lg px-8 py-4 min-w-[200px] text-white border-white hover:bg-white hover:text-primary"
          >
            <Star className="mr-2 h-5 w-5" />
            Conheça Nossa Arte
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
