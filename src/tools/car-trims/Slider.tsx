import * as React from "react";
import { Card, CardContent } from "../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";

export interface Car {
  id: number;
  name: string;
  trims: Trim[];
}

export interface Trim {
  id: number;
  name: string;
}

interface Props {
  car: Car;
}

export const Slider: React.FC<Props> = ({ car }) => {
  if (!car.trims || car.trims.length === 0) return null;

  return (
    <section className="my-12 sm:my-24">
      <div className="mx-auto px-4 sm:px-6 max-w-7xl">
        <h2 className="mb-6 font-bold text-black text-2xl sm:text-3xl">
          Udstyrsvarianter
        </h2>

        <div className="relative overflow-hidden">
          <Carousel opts={{
              align: "start",
            }} className="group">
            <CarouselContent className="flex gap-4">
              {car.trims.map((trim) => (
                <CarouselItem
                  key={trim.id}
                  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3"
                >
                  <Card className="p-6 border border-gray-500 rounded-xl">
                    <CardContent className="p-0">
                      <h3 className="font-bold text-xl">{trim.name}</h3>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation Buttons */}
            <CarouselPrevious className="hidden top-1/2 left-0 z-10 absolute group-hover:flex bg-white shadow-md p-2 rounded-lg -translate-y-1/2">
              ‹
            </CarouselPrevious>
            <CarouselNext className="hidden top-1/2 right-0 z-10 absolute group-hover:flex bg-white shadow-md p-2 rounded-lg -translate-y-1/2">
              ›
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
