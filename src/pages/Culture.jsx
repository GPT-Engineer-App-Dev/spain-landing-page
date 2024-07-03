import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const culturalElements = [
  {
    name: "Flamenco",
    description: "A passionate and expressive dance form originating from Andalusia.",
    image: "/placeholder.svg",
  },
  {
    name: "La Tomatina",
    description: "An annual tomato-throwing festival held in Buñol.",
    image: "/placeholder.svg",
  },
  {
    name: "Running of the Bulls",
    description: "A traditional event held during the San Fermín festival in Pamplona.",
    image: "/placeholder.svg",
  },
  {
    name: "Spanish Art",
    description: "Spain is home to famous artists like Picasso, Dalí, and Goya.",
    image: "/placeholder.svg",
  },
];

const Culture = () => {
  return (
    <div className="space-y-10">
      <h1 className="text-4xl font-bold text-center">Spanish Culture</h1>
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {culturalElements.map((element) => (
          <Card key={element.name}>
            <CardHeader>
              <CardTitle>{element.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <AspectRatio ratio={16 / 9}>
                <img src={element.image} alt={element.name} className="object-cover w-full h-full" />
              </AspectRatio>
              <p className="mt-2">{element.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default Culture;