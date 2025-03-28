
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Dr. Sophia Chen",
      role: "Lead Podiatrist",
      bio: "Dr. Chen has over 15 years of experience in podiatric medicine. She specializes in diabetic foot care and orthotic assessments.",
      qualifications: ["Doctor of Podiatric Medicine", "Board Certified in Foot Surgery", "Member of the American Podiatric Medical Association"],
      specialties: ["Diabetic Foot Care", "Sports Injuries", "Orthotic Therapy"],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600"
    },
    {
      name: "Emma Rodriguez",
      role: "Senior Nail Technician",
      bio: "Emma brings creativity and precision to her nail treatments. With 8 years in the industry, she's known for her attention to detail and knowledge of nail health.",
      qualifications: ["Certified Nail Technician", "Advanced Nail Art Specialist", "Medical Pedicure Certified"],
      specialties: ["Nail Reconstruction", "Therapeutic Manicures", "Nail Health Restoration"],
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600"
    },
    {
      name: "Olivia Thompson",
      role: "Eyelash Specialist",
      bio: "Olivia is passionate about enhancing natural beauty through her expert eyelash services. She's been transforming clients' looks for over 6 years.",
      qualifications: ["Certified Lash Technician", "Volume Lash Specialist", "Lash Lifting Expert"],
      specialties: ["Volume Eyelash Extensions", "Lash Lifting and Tinting", "Natural Lash Enhancement"],
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=600"
    },
    {
      name: "Dr. James Wilson",
      role: "Podiatrist",
      bio: "Dr. Wilson focuses on holistic foot health and preventative care. His gentle approach and thorough knowledge make him a favorite among clients.",
      qualifications: ["Doctor of Podiatric Medicine", "Certified in Wound Care", "Sports Medicine Specialist"],
      specialties: ["Biomechanical Assessment", "Wound Management", "Preventative Foot Care"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600"
    },
    {
      name: "Maria Sanchez",
      role: "Nail Health Specialist",
      bio: "Maria specializes in addressing nail health concerns and creating treatment plans for nail restoration. She's been in the field for 10 years.",
      qualifications: ["Advanced Nail Technician", "Medical Nail Technician", "Certification in Fungal Nail Treatments"],
      specialties: ["Fungal Nail Treatment", "Problematic Nail Restoration", "Preventative Nail Care"],
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600"
    },
    {
      name: "Lisa Kim",
      role: "Eyelash Artist",
      bio: "Lisa has a background in cosmetology and specializes in custom eyelash extensions that complement each client's unique features.",
      qualifications: ["Certified Eyelash Technician", "Cosmetology License", "Advanced Training in Lash Extensions"],
      specialties: ["Custom Lash Designs", "Hybrid Extensions", "Safe Removal Techniques"],
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600"
    }
  ];

  return (
    <div className="container-custom py-12 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-foreground">Our Team</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Meet our dedicated team of professionals committed to providing exceptional care and service.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-64 overflow-hidden">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-1 text-foreground">{member.name}</h2>
              <p className="text-wellness-green font-medium mb-4">{member.role}</p>
              
              <p className="text-muted-foreground mb-4">{member.bio}</p>
              
              <div className="mb-4">
                <h3 className="text-sm font-bold uppercase tracking-wider mb-2 text-foreground/70">Qualifications</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {member.qualifications.map((qual, i) => (
                    <li key={i}>{qual}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-2 text-foreground/70">Specialties</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {member.specialties.map((specialty, i) => (
                    <li key={i}>{specialty}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 mr-1" />
                  <span>Contact</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 mr-1" />
                  <span>Schedule</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
