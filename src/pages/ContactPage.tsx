
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
        title: "Inquiry Sent",
        description: "Thank you for your message. We'll respond shortly.",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Contact & Location</h1>
            <p className="text-lg md:text-xl max-w-2xl text-foreground/80">
              Get in touch with us or visit our clinic. We're here to help you on your wellness journey.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-foreground">Get In Touch</h2>
              
              <div className="grid gap-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex space-x-4">
                      <div className="w-12 h-12 rounded-full bg-wellness-teal/20 flex items-center justify-center shrink-0">
                        <MapPin className="h-6 w-6 text-wellness-green" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Our Location</h3>
                        <p className="text-muted-foreground">123 Wellness Street</p>
                        <p className="text-muted-foreground">Cityville, State 12345</p>
                        <p className="text-muted-foreground">United States</p>
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
                        <h3 className="font-bold mb-1">Phone</h3>
                        <p className="text-muted-foreground">+1 (123) 456-7890</p>
                        <p className="text-muted-foreground">+1 (123) 456-7891</p>
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
                        <p className="text-muted-foreground">contact@wellnesshaven.com</p>
                        <p className="text-muted-foreground">info@wellnesshaven.com</p>
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
                        <h3 className="font-bold mb-1">Operating Hours</h3>
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
              <h2 className="text-3xl font-bold mb-8 text-foreground">Send Us a Message</h2>
              
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        placeholder="Enter your name" 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        placeholder="Enter your email" 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        placeholder="Enter your phone number" 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        placeholder="How can we help you?" 
                        rows={5} 
                        required 
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-wellness-green hover:bg-wellness-green/90 text-white" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                    
                    <p className="text-xs text-muted-foreground text-center">
                      This form is for general inquiries only, not for booking appointments.
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
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Find Us</h2>
          <div className="rounded-lg overflow-hidden h-[400px] shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425872447971!3d40.71926084516649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQzJzA5LjMiTiA3NMKwMDAnMDcuOSJX!5e0!3m2!1sen!2sus!4v1621521090750!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Wellness Haven Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
