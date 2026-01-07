import ReactDOM from 'react-dom/client';
import Style from './style.css?inline';
import App from './App';

class AppElement extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    style.textContent = Style;
    shadow.appendChild(style);

    const mount = document.createElement('div');
    shadow.appendChild(mount);

    ReactDOM.createRoot(mount).render(<App />);
  }
}

customElements.define('tool-one', AppElement);
