import { Button } from "../../components/ui/button"

export interface Car {
  id: number
  name: string
  categories: string
  primary_image?: { url: string; name: string }
}

export type Category = {
  name: string;
  selected: boolean;
};

interface Props {
    cars: Car[],
    categories: Category[];
}

export default function CarList({ cars, categories }: Props) {
  return (
    <>
      <main className="bg-white text-gray-900">
        <div className="mx-auto px-4 py-12 max-w-6xl">

        <div className="flex flex-wrap gap-2 sm:gap-3">
            {categories.map((category) => (
              <Button variant="outline" className={category.selected ? 'bg-black' : ''}>{category.name}</Button>
            ))}
          </div>

          <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {cars.map(car => (
              <article
                key={car.id}
                className="border border-kia-gray-100 overflow-hidden transition"
              >
                <div className="flex justify-center items-center bg-kia-gray-50 h-48">
                  {car.primary_image ? (
                    <img
                      src={car.primary_image.url}
                      alt={car.name}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span className="text-gray-400">Ingen billede tilgængelig</span>
                  )}
                </div>

                <div className="flex flex-col justify-between bg-white p-6">
                  <header>
                    <h2 className="mb-2 font-semibold text-kia-black text-xl">{car.name}</h2>
                  </header>
                  <div className="flex gap-3 mt-4">
                    <a
                      href="#"
                      className="flex-1 bg-kia-black py-2 text-white text-center transition"
                    >
                      Læs mere
                    </a>
                    <a
                      href="#"
                      className="flex-1 py-2 border border-black font-medium text-black text-center transition"
                    >
                      Book prøvetur
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {cars.length === 0 && (
            <p className="mt-12 text-gray-500 text-center">
              Ingen biler fundet.
            </p>
          )}
        </div>
      </main>
    </>
  )
}
