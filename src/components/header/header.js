import { html, LitElement } from "lit";
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import nav from "./nav.json" with { type: "json" };

class HeaderComponent extends LitElement {

  render() {
    return html`
      <style>
      :host {
        header {
          color: red;
        }
      }
      </style>
      <header>
        <nav>
          <ul>
            ${nav.items.map((item) => unsafeHTML(`<li>${item}</li>`))}
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define("app-header", HeaderComponent);
