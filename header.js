import './nav.js'
customElements.define(
    'header-wc',
    class extends HTMLElement {
        get api_key() {
            return sessionStorage.getItem('api_key')
        }
        connectedCallback() {
            this.innerHTML = `<header>
            <div>
            <button onclick="history.back()" title="back">Back</button>
            <button onclick="history.forward()" title="forward">Forward</button>
            </div>
            <img src="asteroid.svg" alt="Icon" width="32" height="auto" />
            <details>
                <summary>Navigation</summary>
                <nav-wc></nav-wc>
            </details>
        </header>`
        }
    }
)