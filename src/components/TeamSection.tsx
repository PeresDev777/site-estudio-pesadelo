import { Instagram } from "lucide-react";
import { Card } from "@/components/ui/card";
import kevinImage from "@/assets/artists/kevin.jpg";
import maronezImage from "@/assets/artists/maronez.jpg";
import vitoImage from "@/assets/artists/vito.jpg";

const TeamSection = () => {
  const team = [
    {
      id: 1,
      name: "Kevin",
      role: "Fundador & Tatuador",
      specialties: ["Darkwork", "Ornamental", "Anime"],
      image: kevinImage,
      instagram: "@kevinblackart",
      description: "Menor bom treinado nas trincheiras das tatuagens tatua tudo que tu quiser até tua mãe porra"
    },
    {
      id: 2,
      name: "Maronez",
      role: "Tatuador",
      specialties: ["Cybertribal", "Depois me diz", "Oq mais botar aqui kkk"],
      image: maronezImage,
      instagram: "@maronezzzz",
      description: "Esse é o Maronez, o PSICOPATA do cybertribal slc ele é referência nesse assunto. Além de ser muito bom no cybertribal e nas tattoos em geral mlk amassa nos conteúdos no instagram"
    },
    {
      id: 3,
      name: "Vito",
      role: "Tatuador",
      specialties: ["Ser mt chave", "Ser ref", "*insira estilo de tattoo*"],
      image: vitoImage,
      instagram: "@vito.tts",
      description: "Mlk mil grau chaviando tudo no estudio slc familia, guri bom e novo. Manda muito nos conteúdos também"
    }
  ];

  return (
    <section className="py-20 bg-secondary/5">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Nossa <span className="gradient-text">Equipe</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça os artistas talentosos que transformam suas ideias em realidade. 
            Cada um com seu estilo único e anos de experiência. (depois da pra adicionar a gang toda)
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <Card key={member.id} className="overflow-hidden hover:shadow-2xl transition-shadow duration-300 group h-full flex flex-col">
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {/* Instagram Icon Button */}
                <div className="absolute top-4 right-4">
                  <a 
                    href={`https://instagram.com/${member.instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-primary hover:scale-110 transition-all duration-300"
                  >
                    <Instagram className="h-5 w-5 text-white" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between min-h-[420px]">
                <div>
                  <h3 className="font-bold text-xl mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {member.description}
                  </p>
                  {/* Specialties */}
                  <div className="mb-4">
                    <p className="text-sm font-semibold mb-2">Especialidades:</p>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, index) => (
                        <span 
                          key={index}
                          className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Instagram Handle (bottom) */}
                <div className="flex items-center text-sm text-muted-foreground mt-auto">
                  <Instagram className="h-4 w-4 mr-2" />
                  <span>{member.instagram}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="text-center mt-16 p-8 bg-card rounded-2xl border">
          <h3 className="text-2xl font-bold mb-4">Quer fazer parte da nossa equipe?</h3>
          <p className="text-muted-foreground mb-6">
            Estamos sempre em busca de novos talentos. Se você é um tatuador experiente e 
            compartilha nossa paixão pela arte, entre em contato conosco.
          </p>
          <a 
            href="https://linkbio.co/estudiopesadelo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn-outline-hero px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Enviar Portfólio
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
