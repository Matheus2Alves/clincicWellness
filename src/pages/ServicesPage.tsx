
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const ServicesPage = () => {
  return (
    <div className="container-custom py-12 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-foreground">Our Services</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover our comprehensive range of wellness services designed to enhance your health and well-being.
        </p>
      </div>

      <Tabs defaultValue="podiatry" className="w-full max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="podiatry">Podiatry</TabsTrigger>
          <TabsTrigger value="nail">Nail Care</TabsTrigger>
          <TabsTrigger value="eyelash">Eyelash</TabsTrigger>
        </TabsList>
        
        {/* Podiatry Services */}
        <TabsContent value="podiatry">
          <div className="grid gap-8">
            <div className="bg-muted rounded-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Podiatry Services</h2>
              <p className="text-muted-foreground mb-8">
                Our specialized podiatry services focus on diagnosing, treating, and preventing disorders of the foot and ankle.
              </p>
              
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Foot Care Treatments</CardTitle>
                    <CardDescription>Comprehensive solutions for foot health</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-wellness-green shrink-0 mt-0.5" />
                        <span>Diabetic foot assessments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-wellness-green shrink-0 mt-0.5" />
                        <span>Treatment for foot injuries</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-wellness-green shrink-0 mt-0.5" />
                        <span>Fungal nail treatments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-wellness-green shrink-0 mt-0.5" />
                        <span>Corn and callus removal</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Orthotic Assessments</CardTitle>
                    <CardDescription>Custom solutions for optimal foot function</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-wellness-green shrink-0 mt-0.5" />
                        <span>Biomechanical assessments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-wellness-green shrink-0 mt-0.5" />
                        <span>Custom orthotics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-wellness-green shrink-0 mt-0.5" />
                        <span>Gait analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-wellness-green shrink-0 mt-0.5" />
                        <span>Footwear recommendations</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Nail Health Consultations</CardTitle>
                    <CardDescription>Expert care for healthy nails</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Our nail health consultations provide comprehensive assessment and personalized care plans to address various nail conditions and promote overall nail health.
                    </p>
                    <ul className="space-y-2 grid md:grid-cols-2 gap-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-wellness-green shrink-0 mt-0.5" />
                        <span>Ingrown nail treatment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-wellness-green shrink-0 mt-0.5" />
                        <span>Fungal infection diagnosis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-wellness-green shrink-0 mt-0.5" />
                        <span>Preventative care advice</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-wellness-green shrink-0 mt-0.5" />
                        <span>Nail hygiene education</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </TabsContent>
        
        {/* Nail Care Services */}
        <TabsContent value="nail">
          <div className="grid gap-8">
            <div className="bg-muted rounded-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Nail Care Services</h2>
              <p className="text-muted-foreground mb-8">
                Our nail care services combine aesthetic beauty with health-focused treatments to ensure your nails look and feel their best.
              </p>
              
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Manicures</CardTitle>
                    <CardDescription>Premium hand and nail care</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-wellness-green shrink-0 mt-0.5" />
                        <span>Classic manicures</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-wellness-green shrink-0 mt-0.5" />
                        <span>Gel manicures</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-wellness-green shrink-0 mt-0.5" />
                        <span>Luxury hand treatments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-wellness-green shrink-0 mt-0.5" />
                        <span>Nail art and design</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Nail Treatments</CardTitle>
                    <CardDescription>Therapeutic solutions for nail health</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-wellness-green shrink-0 mt-0.5" />
                        <span>Nail strengthening</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-wellness-green shrink-0 mt-0.5" />
                        <span>Cuticle repair</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-wellness-green shrink-0 mt-0.5" />
                        <span>Nail reconstruction</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-wellness-green shrink-0 mt-0.5" />
                        <span>Anti-fungal treatments</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Nail Health Consultations</CardTitle>
                    <CardDescription>Expert advice for optimal nail care</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Our nail health consultations provide personalized advice and treatment plans to address your specific nail concerns and promote long-term nail health.
                    </p>
                    <ul className="space-y-2 grid md:grid-cols-2 gap-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-wellness-green shrink-0 mt-0.5" />
                        <span>Nail condition assessment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-wellness-green shrink-0 mt-0.5" />
                        <span>Personalized care plans</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-wellness-green shrink-0 mt-0.5" />
                        <span>Product recommendations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-wellness-green shrink-0 mt-0.5" />
                        <span>Nutritional advice for nail health</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </TabsContent>
        
        {/* Eyelash Services */}
        <TabsContent value="eyelash">
          <div className="grid gap-8">
            <div className="bg-muted rounded-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Eyelash Services</h2>
              <p className="text-muted-foreground mb-8">
                Enhance your natural beauty with our premium eyelash services, designed to accentuate your eyes and simplify your beauty routine.
              </p>
              
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Eyelash Extensions</CardTitle>
                    <CardDescription>Customized lash enhancements</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-wellness-green shrink-0 mt-0.5" />
                        <span>Classic lash extensions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-wellness-green shrink-0 mt-0.5" />
                        <span>Volume lash sets</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-wellness-green shrink-0 mt-0.5" />
                        <span>Hybrid lash extensions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-wellness-green shrink-0 mt-0.5" />
                        <span>Maintenance and fills</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Lash Lifting</CardTitle>
                    <CardDescription>Natural lash enhancement</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-wellness-green shrink-0 mt-0.5" />
                        <span>Lash lift treatments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-wellness-green shrink-0 mt-0.5" />
                        <span>Keratin lash lifts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-wellness-green shrink-0 mt-0.5" />
                        <span>Lash nourishing treatments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-wellness-green shrink-0 mt-0.5" />
                        <span>Post-treatment care</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Lash Tinting</CardTitle>
                    <CardDescription>Color enhancement for your natural lashes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Our lash tinting services use premium, safe dyes to enhance the color of your natural lashes, creating the appearance of mascara without the daily application.
                    </p>
                    <ul className="space-y-2 grid md:grid-cols-2 gap-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-wellness-green shrink-0 mt-0.5" />
                        <span>Lash tinting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-wellness-green shrink-0 mt-0.5" />
                        <span>Brow tinting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-wellness-green shrink-0 mt-0.5" />
                        <span>Lash and brow combo treatments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-wellness-green shrink-0 mt-0.5" />
                        <span>Aftercare advice</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ServicesPage;
