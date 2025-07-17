import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";
import logo from "../assets/logo-nobg.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 50);
      setShowNav(currentY < lastScrollY || currentY < 10);
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const openMenu = () => {
    setIsMenuOpen(true);
    setIsAnimating(true);
  };

  const closeMenu = () => {
    setIsAnimating(false);
    setTimeout(() => setIsMenuOpen(false), 300);
  };

  // Função de scroll suave
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "backdrop-blur-[1px] shadow-md opacity-100 py-2"
          : "bg-transparent opacity-90 py-4"
      } ${showNav ? "translate-y-0" : "-translate-y-full"}`}
      style={isScrolled ? { backgroundImage: "var(--gradient-primary)" } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-14 rounded-xl" />
          <div className="hidden md:flex space-x-6 font-bold text-white">
            <button onClick={() => scrollTo("inicio")}>Início</button>
            <button onClick={() => scrollTo("sobre")}>Sobre</button>
            <button onClick={() => scrollTo("galeria")}>Galeria</button>
            <button onClick={() => scrollTo("equipe")}>Equipe</button>
            <button onClick={() => scrollTo("contato")}>Contato</button>
          </div>
        </div>

        <div className="hidden md:flex">
          <a
            href="https://wa.me/5551989671717"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" className="bg-white text-[#790d0d] font-semibold">
              <MessageCircle className="mr-2 h-4 w-4" />
              Agendar
            </Button>
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={isMenuOpen ? closeMenu : openMenu}>
            {isMenuOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
          </button>
        </div>
      </div>

      { (isMenuOpen || isAnimating) && (
        <div
          className={`fixed left-0 right-0 top-16 z-40 transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen && isAnimating ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } md:hidden flex flex-col space-y-4 px-6 py-4 font-semibold text-white`}
          style={{ backgroundImage: "var(--gradient-primary)" }}
          onTransitionEnd={() => { if (!isMenuOpen) setIsAnimating(false); }}
        >
          <button onClick={() => scrollTo("inicio")}>Início</button>
          <button onClick={() => scrollTo("sobre")}>Sobre</button>
          <button onClick={() => scrollTo("galeria")}>Galeria</button>
          <button onClick={() => scrollTo("equipe")}>Equipe</button>
          <button onClick={() => scrollTo("contato")}>Contato</button>
          <a
            href="https://wa.me/5551989671717"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="w-full"
          >
            <Button variant="ghost" className="bg-white text-[#790d0d] w-full font-semibold flex items-center justify-center">
              <MessageCircle className="mr-2 h-4 w-4" />
              Agendar
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
