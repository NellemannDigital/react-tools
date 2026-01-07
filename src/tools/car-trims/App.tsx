import React from "react";
import { Slider, type Car, type Trim } from "./Slider";

interface Props {
  car: Car;
}

const App: React.FC<Props> = ({ car }) => {
  return <Slider car={car} />;
};

export default App;
export type { Car, Trim };
