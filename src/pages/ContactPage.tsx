
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Enviado",
        description: "Obrigado por nos enviar uma mensagem",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[40vh] bg-gradient-to-r from-wellness-teal/30 to-wellness-green/30 flex items-center">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1920')] bg-cover bg-center opacity-20"></div>
          <div className="container-custom relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Contato e localização</h1>
            <p className="text-lg md:text-xl max-w-2xl text-foreground/80">
            Entre em contato conosco ou visite nossa clínica. Estamos aqui para ajudar você em sua jornada de bem-estar.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-foreground">Entre em contato</h2>
              
              <div className="grid gap-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex space-x-4">
                      <div className="w-12 h-12 rounded-full bg-wellness-teal/20 flex items-center justify-center shrink-0">
                        <MapPin className="h-6 w-6 text-wellness-green" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Nossa localização</h3>
                        <p className="text-muted-foreground">Avenida Padre Anchieta, 176 - sala 1</p>
                        <p className="text-muted-foreground">Jordanópolis, São Bernarndo do Campo - SP</p>
                        <p className="text-muted-foreground">Brasil</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex space-x-4">
                      <div className="w-12 h-12 rounded-full bg-wellness-teal/20 flex items-center justify-center shrink-0">
                        <Phone className="h-6 w-6 text-wellness-green" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Telefone</h3>
                        <p className="text-muted-foreground">+5511444444444</p>
                        <p className="text-muted-foreground">+5511949494444</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex space-x-4">
                      <div className="w-12 h-12 rounded-full bg-wellness-teal/20 flex items-center justify-center shrink-0">
                        <Mail className="h-6 w-6 text-wellness-green" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Email</h3>
                        <p className="text-muted-foreground">seu@emailaqui</p>
                        <p className="text-muted-foreground">seu@emailaqui</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex space-x-4">
                      <div className="w-12 h-12 rounded-full bg-wellness-teal/20 flex items-center justify-center shrink-0">
                        <Clock className="h-6 w-6 text-wellness-green" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Horário de funcionamento</h3>
                        <p className="text-muted-foreground">Monday - Friday: 9AM - 7PM</p>
                        <p className="text-muted-foreground">Saturday: 9AM - 5PM</p>
                        <p className="text-muted-foreground">Sunday: Closed</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-foreground">Nos envie uma mensagem</h2>
              
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Seu nome</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        placeholder="Insira seu nome" 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Endereço de E-mail</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        placeholder="Insira seu email" 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Número</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        placeholder="Insira seu número" 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Sua mensagem</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        placeholder="Como posso te ajudar ?" 
                        rows={5} 
                        required 
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-wellness-green hover:bg-wellness-green/90 text-white" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Enviando.." : "Mensagem enviada"}
                    </Button>
                    
                    <p className="text-xs text-muted-foreground text-center">
                    Este formulário é apenas para consultas gerais, não para agendamento de consultas.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-muted">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Onde estamos</h2>
          <div className="rounded-lg overflow-hidden h-[400px] shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4538.671873050489!2d-46.57178582384966!3d-23.684053678715735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4366a6037f7b%3A0x851e99099862775!2sEspa%C3%A7o%20Aline%20Alves%20%7C%20Podologia!5e1!3m2!1sen!2sbr!4v1743195460219!5m2!1sen!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="preguiça"
              title="Espaço Aline Alves"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
