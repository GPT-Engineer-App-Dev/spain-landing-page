import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const dishes = [
  {
    name: "Paella",
    description: "A traditional rice dish originating from Valencia.",
    image: "/placeholder.svg",
  },
  {
    name: "Tapas",
    description: "Small savory dishes typically served with drinks.",
    image: "/placeholder.svg",
  },
  {
    name: "Churros",
    description: "Fried dough pastries often enjoyed with chocolate sauce.",
    image: "/placeholder.svg",
  },
  {
    name: "Gazpacho",
    description: "A cold soup made from tomatoes, peppers, and cucumbers.",
    image: "/placeholder.svg",
  },
];

const Cuisine = () => {
  return (
    <div className="space-y-10">
      <h1 className="text-4xl font-bold text-center">Spanish Cuisine</h1>
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {dishes.map((dish) => (
          <Card key={dish.name}>
            <CardHeader>
              <CardTitle>{dish.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <AspectRatio ratio={16 / 9}>
                <img src={dish.image} alt={dish.name} className="object-cover w-full h-full" />
              </AspectRatio>
              <p className="mt-2">{dish.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default Cuisine;