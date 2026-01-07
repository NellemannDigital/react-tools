export interface Car {
  id: number
  name: string
  primaryImage?: { url: string; name: string }
}

interface Props {
    cars: Car[]
}

export default function CarList({ cars }: Props) {
  return (
    <>
      <main className="bg-white text-gray-900">
        <div className="mx-auto px-4 py-12 max-w-6xl">

          <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {cars.map(car => (
              <article
                key={car.id}
                className="border overflow-hidden transition"
              >
                <div className="flex justify-center items-center bg-gray-100 h-48">
                  {car.primaryImage ? (
                    <img
                      src={car.primaryImage.url}
                      alt={car.name}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span className="text-gray-400">Ingen billede tilgængelig</span>
                  )}
                </div>

                <div className="flex flex-col justify-between bg-gray-50 p-6">
                  <header>
                    <h2 className="mb-2 font-semibold text-xl">{car.name}</h2>
                  </header>
                  <div className="flex gap-3 mt-4">
                    <a
                      href="#"
                      className="flex-1 bg-black py-2 font-medium text-white text-center transition"
                    >
                      Se detaljer
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
