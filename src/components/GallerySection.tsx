import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import tattoo1 from "@/assets/tattoo-1.jpg";
import tattoo2 from "@/assets/tattoo-2.jpg";
import tattoo3 from "@/assets/tattoo-3.jpg";
import tattoo4 from "@/assets/tattoo-4.jpg";
import tattoo5 from "@/assets/tattoo-5.jpg";
import tattoo6 from "@/assets/tattoo-6.jpg";
import tattoo7 from "@/assets/tattoo-7.jpg";
import tattoo8 from "@/assets/tattoo-8.jpg";
import tattoo9 from "@/assets/tattoo-9.jpg";
import tattoo10 from "@/assets/tattoo-10.jpg";
import tattoo11 from "@/assets/tattoo-11.jpg";
import tattoo12 from "@/assets/tattoo-12.jpg";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const tattoos = [
    {
      id: 1,
      image: tattoo1,
      title: "Tattoo Na Mão Muito Foda",
      category: "Não lembro o nome desse estilo",
    },
    {
      id: 2,
      image: tattoo2,
      title: "Aranha Com Cybertribal",
      category: "Colorida",
    },
    {
      id: 3,
      image: tattoo3,
      title: "Salve pra Dani Pizarro",
      category: "Não sei o nome desse estilo tb mas foda kkk",
    },
    {
      id: 4,
      image: tattoo4,
      title: "Demônio Foda",
      category: "Blackwork",
    },
    {
      id: 5,
      image: tattoo5,
      title: "Geométrica Minimalista",
      category: "Geométrica",
    },
    {
      id: 6,
      image: tattoo6,
      title: "Geométrica Minimalista",
      category: "Geométrica",
    },
    {
      id: 7,
      image: tattoo7,
      title: "Geométrica Minimalista",
      category: "Geométrica",
    },
    {
      id: 8,
      image: tattoo8,
      title: "Geométrica Minimalista",
      category: "Geométrica",
    },
    {
      id: 9,
      image: tattoo9,
      title: "Geométrica Minimalista",
      category: "Geométrica",
    },
    {
      id: 10,
      image: tattoo10,
      title: "Geométrica Minimalista",
      category: "Geométrica",
    },
    {
      id: 11,
      image: tattoo11,
      title: "Geométrica Minimalista",
      category: "Geométrica",
    },
    {
      id: 12,
      image: tattoo12,
      title: "Geométrica Minimalista",
      category: "Geométrica",
    },
  ];

  return (
    <section className="py-20 bg-secondary/5">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Nosso <span className="gradient-text">Portfólio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Confira um pouco do que os meninos pesadelo estão aprontando, essa
            turminha da pesada sabe o que faz!
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tattoos.map((tattoo) => (
            <div
              key={tattoo.id}
              className="group relative overflow-hidden rounded-xl bg-card shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(tattoo.image)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={tattoo.image}
                  alt={tattoo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <ZoomIn className="h-8 w-8 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">{tattoo.title}</h3>
                  <p className="text-sm text-white/80">{tattoo.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/estudiopesadelo/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-hero px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-block"
          >
            Ver Galeria Completa
          </a>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={selectedImage}
            alt="Tatuagem ampliada"
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
