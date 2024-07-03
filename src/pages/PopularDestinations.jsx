import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const destinations = [
  {
    name: "Barcelona",
    description: "A vibrant city known for its art, architecture, and beaches.",
    image: "/placeholder.svg",
  },
  {
    name: "Madrid",
    description: "The capital city, famous for its royal palace, museums, and nightlife.",
    image: "/placeholder.svg",
  },
  {
    name: "Seville",
    description: "A historic city known for its flamenco dancing and Gothic cathedral.",
    image: "/placeholder.svg",
  },
  {
    name: "Valencia",
    description: "A city famous for its futuristic buildings and the annual Las Fallas festival.",
    image: "/placeholder.svg",
  },
  {
    name: "Granada",
    description: "Home to the Alhambra, a stunning palace and fortress complex.",
    image: "/placeholder.svg",
  },
];

const PopularDestinations = () => {
  return (
    <div className="space-y-10">
      <h1 className="text-4xl font-bold text-center">Popular Destinations in Spain</h1>
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {destinations.map((destination) => (
          <Card key={destination.name}>
            <CardHeader>
              <CardTitle>{destination.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <AspectRatio ratio={16 / 9}>
                <img src={destination.image} alt={destination.name} className="object-cover w-full h-full" />
              </AspectRatio>
              <p className="mt-2">{destination.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default PopularDestinations;