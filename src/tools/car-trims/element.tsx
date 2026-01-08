import ReactDOM from "react-dom/client";
import Style from "./style.css?inline";
import App, { type Car, type Trim } from "./App";

class CarTrimsElement extends HTMLElement {
  private root?: ReactDOM.Root;

  async connectedCallback() {
    if (this.root) return; // undgå dobbelt-mount

    const carId = this.getAttribute("car-id");
    if (!carId) {
      console.warn("<car-trims> mangler car-id attribute");
      return;
    }

    const url = `https://tools-kiaonline.test/api/cars/${carId}`;

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data = await res.json();

      const car: Car = {
        id: data.id,
        name: data.name,
        trims: (data.trims ?? []).map((trim: any): Trim => ({
          id: trim.id,
          name: trim.name
        })),
      };

      const shadow = this.shadowRoot ?? this.attachShadow({ mode: "open" });

      if (!shadow.querySelector("style")) {
        const style = document.createElement("style");
        style.textContent = Style;
        shadow.appendChild(style);
      }

      const mount =
        (shadow.querySelector("#root") as HTMLDivElement) ??
        (() => {
          const el = document.createElement("div");
          el.id = "root";
          shadow.appendChild(el);
          return el;
        })();

      this.root = ReactDOM.createRoot(mount);
      this.root.render(<App car={car} />);
    } catch (error) {
      console.error("Failed to load car:", error);

      const shadow = this.shadowRoot ?? this.attachShadow({ mode: "open" });
      shadow.innerHTML = `<p style="color:red;">Kunne ikke indlæse bil</p>`;
    }
  }

  disconnectedCallback() {
    this.root?.unmount();
    this.root = undefined;
  }
}

customElements.define("car-trims", CarTrimsElement);
