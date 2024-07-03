import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="space-y-10">
      <section className="text-center">
        <AspectRatio ratio={16 / 9}>
          <img src="/placeholder.svg" alt="Spain" className="object-cover w-full h-full" />
        </AspectRatio>
        <h1 className="text-4xl font-bold mt-4">Welcome to Spain</h1>
        <p className="mt-2 text-lg">
          Discover the rich history, diverse culture, and beautiful landscapes of Spain.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Popular Destinations</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Explore the most popular tourist destinations in Spain.</p>
            <Button asChild>
              <Link to="/popular-destinations">Learn More</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Culture</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Immerse yourself in the vibrant culture of Spain.</p>
            <Button asChild>
              <Link to="/culture">Learn More</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cuisine</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Discover the delicious cuisine of Spain.</p>
            <Button asChild>
              <Link to="/cuisine">Learn More</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Index;