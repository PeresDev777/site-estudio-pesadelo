import { Badge, Heart, Shield, Zap } from "lucide-react";
import artistImage from "@/assets/fundo-about.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Sobre o <span className="gradient-text">Estúdio Pesadelo</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Fundado em 2024 (ou era 2023? me corrige aí), o Estúdio Pesadelo nasceu da paixão pela arte e pela expressão pessoal através da tatuagem. 
                Nossa missão é transformar suas ideias em obras de arte únicas e atemporais.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Combinamos técnicas tradicionais com tecnologia moderna, garantindo não apenas beleza estética, 
                mas também segurança e qualidade em cada trabalho realizado. (blablabla descrição genérica pai kkkk da pra escrever oq quiser ai)
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Segurança Total</h3>
                  <p className="text-sm text-muted-foreground">
                    Materiais descartáveis e esterilização rigorosa
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Técnicas Modernas</h3>
                  <p className="text-sm text-muted-foreground">
                    Equipamentos de última geração
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Paixão pela Arte</h3>
                  <p className="text-sm text-muted-foreground">
                    Cada tatuagem é única e personalizada
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Badge className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Experiência</h3>
                  <p className="text-sm text-muted-foreground">
                    Profissionais treinados e especializados para seu melhor atendimento
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={artistImage} 
                alt="Artista principal do Ink Masters"
                className="w-full h-[600px] object-cover transform scale-105 hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-8 -left-8 bg-card border border-border rounded-xl p-6 shadow-2xl max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Badge className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-bold text-lg">Certificado</div>
                  <div className="text-sm text-muted-foreground">ANVISA & Vigilância Sanitária</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;