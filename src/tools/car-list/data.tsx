import type { Car } from "./App";


export const fetchCars = async (ids?: string[]): Promise<Car[]> => {
  let url = "https://gjfoo0mnzi.sharedwithexpose.com/api/cars";

  if (ids && ids.length > 0) {
    url += "?ids=" + ids.join(",");
  }

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch cars");
  }

  const { data: cars } = await res.json();

  return cars;
};