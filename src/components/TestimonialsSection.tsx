import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Lucas Sommer",
      rating: 5,
      text: "Ambiente muito bom tanto para profissional que queira atender tanto quanto para quem procurar um artista tatuador ou bodypiercer.",
      date: "Há 5 meses"
    },
    {
      id: 2,
      name: "Halan Medina",
      rating: 5,
      text: "Simplesmente o melhor estúdio de tatuagem de Porto Alegre. Me trataram super bem, muito queridos e o espaço é super bem cuidado, recomendo muito (fora os vídeos do instagram que são muito engraçados)",
      date: "Há 4 meses"
    },
    {
      id: 3,
      name: "Maria Clara",
      rating: 5,
      text: "O estúdio é muito acolhedor e dá pra ver como todo mundo ali ama o que faz e faz bem. Todos são artistas suuuuuper talentosos!",
      date: "Há 5 meses"
    },
    {
      id: 4,
      name: "Kaylane Rezende",
      rating: 5,
      text: "Estúdio dahora, atendimento excelente, tatuadores bom de papo e de trampo. Só alegrias nesse estúdio!",
      date: "Há 1 semana"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            O que nossos <span className="gradient-text">clientes</span> dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista. 
            Veja o que eles têm a dizer sobre nossa arte e atendimento.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-6 hover:shadow-lg transition-shadow duration-300 relative">
              <Quote className="h-8 w-8 text-primary/20 absolute top-4 right-4" />
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              {/* Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              {/* Author */}
              <div className="border-t pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.date}</div>
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Google Reviews Button */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/search?q=estudio+pesadelo&oq=estudio+pesadelo&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGEAyBggCEEUYPDIGCAMQRRg8MgYIBBBFGDzSAQg0NTg3ajBqNKgCALACAQ&sourceid=chrome&ie=UTF-8#lrd=0x95197958b70b62eb:0xd2e23c1ba8e791e8,1,,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mb-4 px-6 py-3 rounded-full font-semibold transition-all bg-primary text-white hover:bg-primary/90 shadow-md"
            style={{ textDecoration: "none" }}
          >
            Veja mais avaliações no Google
          </a>
          <div className="flex items-center justify-center space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="font-bold text-lg">5.0</span>
            <span className="text-muted-foreground">(+40 avaliações)</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;