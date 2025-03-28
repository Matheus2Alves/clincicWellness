
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const ServicesPage = () => {
  return (
    <div className="container-custom py-12 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-foreground">Nosso serviços</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
         Descubra nossa ampla gama de serviços de bem-estar projetados para melhorar sua saúde e bem-estar.
        </p>
      </div>

      <Tabs defaultValue="podiatry" className="w-full max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="podiatry">Podologia</TabsTrigger>
          <TabsTrigger value="nail">Cuidado com as unhas</TabsTrigger>
          <TabsTrigger value="eyelash">Serviço de cílios</TabsTrigger>
        </TabsList>
        
        {/* Podiatry Services */}
        <TabsContent value="podiatry">
          <div className="grid gap-8">
            <div className="bg-muted rounded-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Podologia</h2>
              <p className="text-muted-foreground mb-8">
              Nossos serviços especializados de podologia se concentram no diagnóstico, tratamento e prevenção de distúrbios do pé e do tornozelo.
              </p>
              
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Tratamentos de cuidados com os pés</CardTitle>
                    <CardDescription>Soluções completas para a saúde dos pés</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-wellness-green shrink-0 mt-0.5" />
                        <span>Avaliações do pé diabético</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-wellness-green shrink-0 mt-0.5" />
                        <span>Tratamento para lesões nos pés</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-wellness-green shrink-0 mt-0.5" />
                        <span>Tratamentos para fungos nas unhas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-wellness-green shrink-0 mt-0.5" />
                        <span>Remoção de calos e calosidades</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Avaliações Ortopédicas</CardTitle>
                    <CardDescription>Soluções personalizadas para uma função ideal do pé</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-wellness-green shrink-0 mt-0.5" />
                        <span>Avaliações biomecânicas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-wellness-green shrink-0 mt-0.5" />
                        <span>Órteses personalizadas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-wellness-green shrink-0 mt-0.5" />
                        <span>Análise da marcha</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-wellness-green shrink-0 mt-0.5" />
                        <span>Recomendações de calçados</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Consultas de saúde das unhas</CardTitle>
                    <CardDescription>cuidados especializados para unhas saudáveis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                    Nossas consultas sobre saúde das unhas oferecem avaliações abrangentes e planos de cuidados personalizados para tratar diversas condições das unhas e promover a saúde geral delas.
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
              <h2 className="text-2xl font-bold mb-6 text-foreground">Serviços de cuidados com as unhas</h2>
              <p className="text-muted-foreground mb-8">
              Nossos serviços de cuidados com as unhas combinam beleza estética com tratamentos focados na saúde para garantir que suas unhas tenham a melhor aparência e toque possível.
              </p>
              
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Manicures</CardTitle>
                    <CardDescription>Cuidados premium para mãos e unhas</CardDescription>
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
                    <CardTitle>Tratamentos para unhas</CardTitle>
                    <CardDescription>Soluções terapêuticas para a saúde das unhas</CardDescription>
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
                    <CardTitle>Consultas de saúde das unhas</CardTitle>
                    <CardDescription>Conselhos de especialistas para o cuidado ideal das unhas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                    Nossas consultas sobre saúde das unhas oferecem aconselhamento personalizado e planos de tratamento para abordar suas preocupações específicas com as unhas e promover a saúde das unhas a longo prazo.
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
              <h2 className="text-2xl font-bold mb-6 text-foreground">Serviços de cílios</h2>
              <p className="text-muted-foreground mb-8">
              Realce sua beleza natural com nossos serviços premium de cílios, projetados para acentuar seus olhos e simplificar sua rotina de beleza.
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
