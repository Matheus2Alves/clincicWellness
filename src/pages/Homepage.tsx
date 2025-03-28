
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
              Your Journey to Wellness Begins Here
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mb-8 text-foreground/80">
              Experience holistic care that nurtures your body, mind, and spirit at Wellness Haven Clinic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-wellness-green hover:bg-wellness-green/90 text-white">
                <Link to="/services">
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-wellness-green text-wellness-green hover:bg-wellness-green/10">
                <Link to="/team">Meet Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Welcome to Wellness Haven</h2>
            <p className="text-lg text-muted-foreground mb-8">
              At Wellness Haven, we believe in a comprehensive approach to wellness. Our experienced team is dedicated to providing exceptional care in a tranquil environment, helping you achieve optimal health and balance.
            </p>
            <div className="flex justify-center">
              <Button asChild variant="link" className="text-wellness-green">
                <Link to="/about">Learn more about us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-muted">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Featured Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Podiatry */}
            <div className="bg-background rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 bg-[url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=500')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">Podiatry Services</h3>
                <p className="text-muted-foreground mb-4">Comprehensive foot care treatments to keep you moving comfortably and confidently.</p>
                <Button asChild variant="outline" className="w-full border-wellness-green text-wellness-green hover:bg-wellness-green/10">
                  <Link to="/services">Learn More</Link>
                </Button>
              </div>
            </div>
            
            {/* Nail Care */}
            <div className="bg-background rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 bg-[url('https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=500')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">Nail Care</h3>
                <p className="text-muted-foreground mb-4">Professional nail treatments focusing on both beauty and health for your hands and feet.</p>
                <Button asChild variant="outline" className="w-full border-wellness-green text-wellness-green hover:bg-wellness-green/10">
                  <Link to="/services">Learn More</Link>
                </Button>
              </div>
            </div>
            
            {/* Eyelash */}
            <div className="bg-background rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 bg-[url('https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?q=80&w=500')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">Eyelash Services</h3>
                <p className="text-muted-foreground mb-4">Enhance your natural beauty with our premium eyelash extensions and treatments.</p>
                <Button asChild variant="outline" className="w-full border-wellness-green text-wellness-green hover:bg-wellness-green/10">
                  <Link to="/services">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-wellness-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Wellness Journey?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our team of experts is here to guide you toward balance and well-being. Book your consultation today.
          </p>
          <Button asChild size="lg" className="bg-white text-wellness-green hover:bg-white/90">
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
