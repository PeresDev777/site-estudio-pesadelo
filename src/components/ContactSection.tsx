import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, MapPin, Clock, Phone, Instagram, Mail } from "lucide-react";

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5551989671717?text=Olá! Gostaria de agendar uma consulta para tatuagem.",
      "_blank"
    );
  };

  const handleLocationClick = () => {
    window.open(
      "https://maps.google.com/?q=Av.+Alberto+Bins+546+Centro+Histórico+Porto+Alegre",
      "_blank"
    );
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Entre em <span className="gradient-text">Contato</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pronto para dar vida à sua ideia? Entre em contato conosco e vamos criar 
            juntos sua próxima obra de arte.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Contact Info */}
          <div className="space-y-8">

            {/* WhatsApp CTA */}
            <Card className="p-8 bg-gradient-to-r from-green-50 to-green-100 border-green-200">
              <div className="flex items-center mb-4">
                <MessageCircle className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold">Agende pelo WhatsApp</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                A forma mais rápida de agendar sua consulta. Tire suas dúvidas e 
                receba um orçamento personalizado.
              </p>
              <Button
                variant="whatsapp"
                size="lg"
                onClick={handleWhatsAppClick}
                className="w-full"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chamar no WhatsApp
              </Button>
            </Card>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                <MapPin className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-bold mb-2">Localização</h3>
                <p className="text-muted-foreground mb-4">
                  Av. Alberto Bins, 536 - Sala 501<br />
                  Centro Histórico - Porto Alegre/RS<br />
                  CEP: 90030-140
                </p>
                <button
                  onClick={handleLocationClick}
                  className="text-primary hover:text-primary/80 font-semibold text-sm"
                >
                  Ver no mapa →
                </button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                <Clock className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-bold mb-2">Horário de Funcionamento</h3>
                <div className="text-muted-foreground space-y-1">
                  <p>Segunda a Domingo: 08h às 22h</p>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                <Phone className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-bold mb-2">Telefone</h3>
                <p className="text-muted-foreground">
                  (51) 98967-1717<br />
                  <span className="text-sm">Ligações e WhatsApp</span>
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                <Mail className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-bold mb-2">E-mail</h3>
                <p className="text-muted-foreground">
                  contato@pesadelo.com.br<br />
                  <span className="text-sm">Respondemos em até 24h</span>
                </p>
              </Card>
            </div>

            {/* Social Media */}
            <Card className="p-6">
              <h3 className="font-bold mb-4">Nos siga nas redes sociais</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/estudiopesadelo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full hover:scale-110 transition-transform duration-300"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                Acompanhe nossos trabalhos mais recentes e bastidores do estúdio
              </p>
            </Card>

          </div>

          {/* Mapa interativo */}
          <div className="relative">
            <Card className="overflow-hidden flex flex-col items-center">
              <div
                className="
                  w-full rounded-lg overflow-hidden
                  bg-muted flex items-center justify-center
                  aspect-square
                  sm:aspect-video
                  border-0
                "
                style={{
                  maxWidth: 600,
                  margin: "0 auto",
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.3174479145528!2d-51.22385892370375!3d-30.027749330503838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951979a7f58edb5f%3A0xe75bc9213b82b169!2sAv.%20Alberto%20Bins%2C%20536%20-%20Centro%20Hist%C3%B3rico%2C%20Porto%20Alegre%20-%20RS%2C%2090030-140!5e0!3m2!1spt-BR!2sbr!4v1752719026542!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa - Av. Alberto Bins"
                ></iframe>
              </div>
              <Button
                variant="outline_hero"
                onClick={handleLocationClick}
                className="mt-4"
              >
                Ver no Google Maps
              </Button>
            </Card>
            {/* Bloco flutuante removido */}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;