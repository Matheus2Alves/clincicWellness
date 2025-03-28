
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Award, Users } from "lucide-react";

const AboutPage = () => {
  const testimonials = [
    {
      quote: "The team at Wellness Haven truly changed my life. Their holistic approach to foot care helped me resolve issues I've had for years.",
      author: "Sarah Johnson",
      role: "Client since 2020"
    },
    {
      quote: "I've never experienced such attentive and personalized care. The nail treatments here are not just about beauty – they focus on health too.",
      author: "Michael Chen",
      role: "Client since 2021"
    },
    {
      quote: "The eyelash extensions I received were perfect for my needs. The technician took the time to understand exactly what I wanted.",
      author: "Emma Rodriguez",
      role: "Client since 2019"
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[50vh] bg-gradient-to-r from-wellness-teal/30 to-wellness-green/30 flex items-center">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551228813-1b53eba36442?q=80&w=1920')] bg-cover bg-center opacity-20"></div>
          <div className="container-custom relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">About Us</h1>
            <p className="text-lg md:text-xl max-w-2xl text-foreground/80">
              Learn about our mission, values, and commitment to your wellness journey.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-8">
              At Wellness Haven, our mission is to provide exceptional, holistic wellness services that improve our clients' quality of life. We believe in treating the whole person—not just symptoms—and empowering individuals to take an active role in their well-being.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-wellness-teal/20 flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-wellness-green" />
                </div>
                <h3 className="text-xl font-bold mb-2">Compassionate Care</h3>
                <p className="text-muted-foreground">We treat every client with empathy, respect, and personalized attention.</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-wellness-teal/20 flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-wellness-green" />
                </div>
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-muted-foreground">We maintain the highest standards in all our services and continuously improve our skills.</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-wellness-teal/20 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-wellness-green" />
                </div>
                <h3 className="text-xl font-bold mb-2">Community</h3>
                <p className="text-muted-foreground">We value building lasting relationships with our clients and the broader community.</p>
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
              <h2 className="text-3xl font-bold mb-6 text-foreground">Our History</h2>
              <p className="text-muted-foreground mb-4">
                Wellness Haven Clinic was founded in 2015 by a group of healthcare professionals who shared a vision of creating a wellness center that addresses multiple aspects of personal health and beauty.
              </p>
              <p className="text-muted-foreground mb-4">
                What began as a small clinic with just three practitioners has grown into a comprehensive wellness center with a team of specialized professionals. Throughout our growth, we've maintained our commitment to personalized care and holistic approaches.
              </p>
              <p className="text-muted-foreground">
                Today, we're proud to be a trusted destination for podiatry, nail care, and eyelash services, known for our expertise, friendly atmosphere, and dedication to our clients' well-being.
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
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Integrity",
                description: "We act with honesty and adhere to the highest ethical standards in all our practices."
              },
              {
                title: "Client-Centered",
                description: "We put our clients' needs first, creating personalized experiences and solutions."
              },
              {
                title: "Education",
                description: "We believe in empowering our clients through education about their health and self-care."
              },
              {
                title: "Innovation",
                description: "We stay at the forefront of wellness practices, continuously learning and improving."
              },
              {
                title: "Inclusivity",
                description: "We create a welcoming environment where everyone feels respected and valued."
              },
              {
                title: "Balance",
                description: "We promote harmony between physical health, mental well-being, and aesthetic goals."
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
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Clients Say</h2>
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
          <h2 className="text-3xl font-bold mb-6 text-foreground">Our Certifications</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            We maintain the highest standards of practice through ongoing education and professional certifications.
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