import { LitElement, html, css } from 'lit-element';

export class BsAlert extends LitElement {
  static get properties() {
    return {
      type: {
        type: String,
      },
    };
  }

  static get styles() {
    return [
      css`
        :host {
          display: block;
        }

        :host {
          position: relative;
          padding: 0.75rem 1.25rem;
          margin-bottom: 1rem;
          border: 1px solid transparent;
          border-radius: 0.25rem;

          color: #155724;
          background-color: #d4edda;
          border-color: #c3e6cb;
        }
      `,
    ];
  }

  constructor() {
    super();
    this.type = 'success';
  }

  render() {
    return html`
      <p>A paragraph ${this.type}</p>
    `;
  }
}

customElements.define('bs-alert', BsAlert);
