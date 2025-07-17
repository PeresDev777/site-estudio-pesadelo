import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Palette, Gift, Bell } from "lucide-react";

const ComingSoonSection = () => {
  const products = [
    {
      icon: Palette,
      title: "Pomadas e Cremes",
      description: "Produtos para cuidados pós-tatuagem"
    },
    {
      icon: ShoppingBag,
      title: "Acessórios",
      description: "Itens exclusivos do estúdio"
    },
    {
      icon: Gift,
      title: "Roupas",
      description: "camisa do inter e do gremio kkkkk"
    }
  ];

  return (
    <section className="py-20 bg-secondary/5">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <ShoppingBag className="h-4 w-4 mr-2" />
              Em breve
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Nossa <span className="gradient-text">Loja Online</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Em breve você poderá adquirir produtos exclusivos para cuidados com sua tatuagem, 
              acessórios do estúdio e muito mais. Tudo com a qualidade Pesadelo.
            </p>
          </div>

          {/* Coming Soon Products */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {products.map((product, index) => (
              <Card 
                key={index} 
                className="p-8 text-center hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <product.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{product.title}</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-primary-glow/5 border-primary/20">
            <div className="flex items-center justify-center mb-6">
              <Bell className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold">Seja o primeiro a saber</h3>
            </div>
            
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Cadastre-se para receber uma notificação exclusiva quando nossa loja online 
              estiver disponível. Você também receberá um desconto especial de lançamento!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="hero" className="whitespace-nowrap">
                <Bell className="mr-2 h-4 w-4" />
                Me avisar
              </Button>
            </div>

            <p className="text-xs text-muted-foreground mt-4">
              Prometemos não enviar spam. Apenas as novidades mais importantes!
            </p>
          </Card>

          {/* Timeline */}
          <div className="mt-16 text-center">
            <h4 className="text-lg font-semibold mb-6 text-muted-foreground">
              Previsão de lançamento: <span className="text-primary">algum dia sla kkkk</span>
            </h4>
            
            <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span>Desenvolvimento</span>
              </div>
              <div className="w-8 h-px bg-border"></div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-primary rounded-full mr-2 animate-pulse"></div>
                <span>Testes</span>
              </div>
              <div className="w-8 h-px bg-border"></div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-muted rounded-full mr-2"></div>
                <span>Lançamento</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection;