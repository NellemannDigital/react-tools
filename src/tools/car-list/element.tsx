import ReactDOM from "react-dom/client";
import Style from "./style.css?inline";
import App from "./App";
import { fetchCars } from "./data";

class CarListElement extends HTMLElement {
  async connectedCallback() {
    const carIds = this.getAttribute("car-id");
    const categoryAttr = this.getAttribute("category")?.toLowerCase();

    const ids = carIds
      ? carIds.split(",").map((id) => id.trim())
      : undefined;

    try {
      const cars = await fetchCars(ids);

      const categoryMap: Record<string, string> = {
        "EV": "Elbiler",
        "Elektrisk": "Elbiler", 
        "Elektrificerede modeller": "Elbiler",
        "Bybiler": "Bybiler",
        "Familiebiler": "Familiebiler",
        "SUV": "SUV",
        "Premium": "Premium",
        "GT": "GT",
      };

      const rawCategories = cars.flatMap(car => car.categories);

      const categories = Array.from(
        new Map(
          rawCategories.map(cat => {
            const mappedName = categoryMap[cat] || cat;
            const info = { name: mappedName }; 
            return [
              info.name,
              { 
                ...info, 
                selected: categoryAttr ? info.name.toLowerCase() === categoryAttr : false
              }
            ];
          })
        ).values()
      );


      const shadow = this.attachShadow({ mode: "open" });

      const style = document.createElement("style");
      style.textContent = Style;
      shadow.appendChild(style);

      const mount = document.createElement("div");
      shadow.appendChild(mount);

      ReactDOM.createRoot(mount).render(<App cars={cars} categories={categories} />);
    } catch (error) {
      console.error("Failed to load cars:", error);
    }
  }
}

customElements.define("car-list", CarListElement);
