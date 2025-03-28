
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Award, Users } from "lucide-react";

const AboutPage = () => {
  const testimonials = [
    {
      quote: "A equipe do Espaço Aline Alves realmente mudou minha vida. Sua abordagem holística para o cuidado dos pés me ajudou a resolver problemas que eu tinha há anos.",
      author: "Batata",
      role: "Cliente desde 2019"
    },
    {
      quote: "A equipe do Espaço Aline Alves realmente mudou minha vida. Sua abordagem holística para o cuidado dos pés me ajudou a resolver problemas que eu tinha há anos.",
      author: "Michael",
      role: "Cliente desde 2021"
    },
    {
      quote: "A equipe do Espaço Aline Alves realmente mudou minha vida. Sua abordagem holística para o cuidado dos pés me ajudou a resolver problemas que eu tinha há anos.",
      author: "Emmanuel",
      role: "Cliente desde 2019"
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[50vh] bg-gradient-to-r from-wellness-teal/30 to-wellness-green/30 flex items-center">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551228813-1b53eba36442?q=80&w=1920')] bg-cover bg-center opacity-20"></div>
          <div className="container-custom relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Sobre nós</h1>
            <p className="text-lg md:text-xl max-w-2xl text-foreground/80">
            Saiba mais sobre nossa missão, valores e comprometimento com sua jornada de bem-estar.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Nossa missão</h2>
            <p className="text-lg text-muted-foreground mb-8">
            No Espaço Aline Alves, nossa missão é fornecer serviços de bem-estar excepcionais e holísticos que melhorem a qualidade de vida dos nossos clientes. Acreditamos em tratar a pessoa como um todo — não apenas os sintomas — e em capacitar os indivíduos a assumir um papel ativo em seu bem-estar.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-wellness-teal/20 flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-wellness-green" />
                </div>
                <h3 className="text-xl font-bold mb-2">Cuidado Compassivo</h3>
                <p className="text-muted-foreground">Tratamos cada cliente com empatia, respeito e atenção personalizada.</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-wellness-teal/20 flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-wellness-green" />
                </div>
                <h3 className="text-xl font-bold mb-2">Excelência</h3>
                <p className="text-muted-foreground">Mantemos os mais altos padrões em todos os nossos serviços e melhoramos continuamente nossas habilidades.</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-wellness-teal/20 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-wellness-green" />
                </div>
                <h3 className="text-xl font-bold mb-2">Comunidade</h3>
                <p className="text-muted-foreground">Valorizamos a construção de relacionamentos duradouros com nossos clientes e a comunidade em geral.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-muted">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Nossa história</h2>
              <p className="text-muted-foreground mb-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo atque esse, aut voluptatibus consequatur autem quis ipsum eligendi laboriosam fugit, corrupti incidunt necessitatibus quia quo ex, maxime animi explicabo possimus.
              </p>
              <p className="text-muted-foreground mb-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi sed esse unde molestias dolores vel modi quos obcaecati id nesciunt iste similique sapiente, veniam quibusdam, consectetur consequatur ullam quis ipsum?
              </p>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quas beatae, dolor quam magnam vero obcaecati illum, doloremque voluptas nemo quia, aliquam ducimus atque! Similique culpa numquam ex optio eaque.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=900')] bg-cover bg-center"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Nossos principais valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Integridade",
                description: "Agimos com honestidade e aderimos aos mais altos padrões éticos em todas as nossas práticas."
              },
              {
                title: "Integridade",
                description: "Agimos com honestidade e aderimos aos mais altos padrões éticos em todas as nossas práticas."
              },
              {
                title: "Integridade",
                description: "Agimos com honestidade e aderimos aos mais altos padrões éticos em todas as nossas práticas.."
              },
              {
                title: "Integridade",
                description: "Agimos com honestidade e aderimos aos mais altos padrões éticos em todas as nossas práticas."
              },
              {
                title: "Integridade",
                description: "Agimos com honestidade e aderimos aos mais altos padrões éticos em todas as nossas práticas."
              },
              {
                title: "Integridade",
                description: "Agimos com honestidade e aderimos aos mais altos padrões éticos em todas as nossas práticas."
              }
            ].map((value, index) => (
              <Card key={index} className="border-wellness-teal/30">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-wellness-green text-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">O que nossos clintes dizem</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
                <p className="text-lg mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm opacity-80">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-background">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Nossas certificações</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Mantemos os mais altos padrões de prática por meio de educação contínua e certificações profissionais.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "American Podiatric Medical Association",
              "International Pedicure Association",
              "National Association of Nail Professionals",
              "Professional Beauty Association",
              "American Lash Association",
              "International Spa Association",
              "Allied Health Professionals Network",
              "Wellness Therapy Council"
            ].map((cert, index) => (
              <div key={index} className="p-4 border rounded-lg border-border flex items-center justify-center h-32">
                <p className="text-sm font-medium text-center">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;