
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HomePage = () => {
  return (
    <div className="flex flex-col animate-fade-in">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[70vh] md:h-[80vh] bg-gradient-to-r from-wellness-teal/30 to-wellness-green/30 flex items-center">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1920')] bg-cover bg-center opacity-20"></div>
          <div className="container-custom relative z-10 flex flex-col items-start">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground max-w-3xl mb-4">
            Sua jornada para o bem-estar começa aqui
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mb-8 text-foreground/80">
            Experimente cuidados holísticos que nutrem seu corpo, mente e espírito no Espaço Aline Alves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-wellness-green hover:bg-wellness-green/90 text-white">
                <Link to="/services">
                  Conheça os serviços
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-wellness-green text-wellness-green hover:bg-wellness-green/10">
                <Link to="/team">Conheça nosso time</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Bem-vinda(o) ao Espaço Aline Alves</h2>
            <p className="text-lg text-muted-foreground mb-8">
            No Espaço Aline Alves, acreditamos em uma abordagem abrangente ao bem-estar. Nossa equipe experiente se dedica a fornecer cuidados excepcionais em um ambiente tranquilo, ajudando você a atingir saúde e equilíbrio ideais.
            </p>
            <div className="flex justify-center">
              <Button asChild variant="link" className="text-wellness-green">
                <Link to="/about">Saiba mais sobre a clínica</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-muted">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Nossos serviços</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Podiatry */}
            <div className="bg-background rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 bg-[url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=500')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">Podologia</h3>
                <p className="text-muted-foreground mb-4">Tratamentos abrangentes para os pés para que você possa se movimentar com conforto e confiança.</p>
                <Button asChild variant="outline" className="w-full border-wellness-green text-wellness-green hover:bg-wellness-green/10">
                  <Link to="/services">Saiba mais</Link>
                </Button>
              </div>
            </div>
            
            {/* Nail Care */}
            <div className="bg-background rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 bg-[url('https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=500')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">Cuidados com as unhas</h3>
                <p className="text-muted-foreground mb-4">Tratamentos profissionais para unhas com foco na beleza e na saúde das suas mãos e pés.</p>
                <Button asChild variant="outline" className="w-full border-wellness-green text-wellness-green hover:bg-wellness-green/10">
                  <Link to="/services">Saiba mais</Link>
                </Button>
              </div>
            </div>
            
            {/* Eyelash */}
            <div className="bg-background rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 bg-[url('https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?q=80&w=500')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">Serviços de cílios</h3>
                <p className="text-muted-foreground mb-4">Realce sua beleza natural com nossas extensões e tratamentos de cílios premium.</p>
                <Button asChild variant="outline" className="w-full border-wellness-green text-wellness-green hover:bg-wellness-green/10">
                  <Link to="/services">Saiba mais</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-wellness-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para começar sua jornada de bem-estar?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
          Nossa equipe de especialistas está aqui para guiá-lo em direção ao equilíbrio e bem-estar. Agende sua consulta hoje.
          </p>
          <Button asChild size="lg" className="bg-white text-wellness-green hover:bg-white/90">
            <Link to="/contact">Fale com a gente</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
