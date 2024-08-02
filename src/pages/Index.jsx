import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Paw } from "lucide-react";

const dogBreeds = [
  {
    name: "Labrador Retriever",
    description: "Friendly, outgoing, and high-spirited companions who have more than enough affection to go around for a family looking for a medium-to-large dog.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Labrador_on_Quantock_%282175262184%29.jpg/640px-Labrador_on_Quantock_%282175262184%29.jpg"
  },
  {
    name: "German Shepherd",
    description: "Smart, confident, courageous, and steady; a true dog lover's dog. German Shepherd Dogs will be gentle family pets and steadfast guardians.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/German_Shepherd_-_DSC_0346_%2810096362833%29.jpg/640px-German_Shepherd_-_DSC_0346_%2810096362833%29.jpg"
  },
  {
    name: "Golden Retriever",
    description: "Intelligent, friendly, and devoted. Golden Retrievers are serious workers at hunting and field work, as guides for the blind, and in search-and-rescue.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Golden_Retriever_Dukedestiny01_drvd.jpg/640px-Golden_Retriever_Dukedestiny01_drvd.jpg"
  }
];

const Index = () => {
  const [selectedBreed, setSelectedBreed] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Discover Dog Breeds</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dogBreeds.map((breed) => (
            <Card key={breed.name} className="overflow-hidden">
              <CardHeader>
                <CardTitle>{breed.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <img src={breed.image} alt={breed.name} className="w-full h-48 object-cover mb-4 rounded-md" />
                <CardDescription>{breed.description.slice(0, 100)}...</CardDescription>
              </CardContent>
              <CardFooter>
                <Button onClick={() => setSelectedBreed(breed)} className="w-full">
                  <Paw className="mr-2 h-4 w-4" /> Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        {selectedBreed && (
          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>{selectedBreed.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <img src={selectedBreed.image} alt={selectedBreed.name} className="w-full h-64 object-cover mb-4 rounded-md" />
                <CardDescription>{selectedBreed.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button onClick={() => setSelectedBreed(null)} variant="outline" className="w-full">
                  Close
                </Button>
              </CardFooter>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
