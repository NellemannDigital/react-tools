import ReactDOM from 'react-dom/client';
import Style from './style.css?inline';
import App, { type Car } from './App'

class CarListElement extends HTMLElement {
  async connectedCallback() {
    const carIdAttr = this.getAttribute('car-id')
    let url = 'https://tools-kiaonline.test/api/cars'

    if (carIdAttr) {
      const ids = carIdAttr.split(',').map(id => id.trim())
      url += '?ids=' + ids.join(',')
    }

    try {
      const res = await fetch(url);
      const data = await res.json();

      const cars: Car[] = data.map((car: any) => ({
        id: car.id,
        name: car.name,
        primaryImage: car.primary_image
      }));

      const shadow = this.attachShadow({ mode: 'open' });

      const style = document.createElement('style');
      style.textContent = Style;
      shadow.appendChild(style);

      const mount = document.createElement('div');
      shadow.appendChild(mount);

      ReactDOM.createRoot(mount).render(<App cars={cars} />)
    } catch (error) {
      console.error('Failed to load cars:', error)
      throw error
    }
  }
}

customElements.define('car-list', CarListElement)
