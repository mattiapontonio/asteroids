import './nav.js'
customElements.define(
    'header-wc',
    class extends HTMLElement {
        get api_key() {
            return sessionStorage.getItem('api_key')
        }
        connectedCallback() {
            this.innerHTML = `<header>
            <button onclick="history.back()" title="back"><img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/arrow_back/v12/24px.svg"/></button>
            <button onclick="history.forward()" title="forward"><img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/arrow_forward/v11/24px.svg"/></button>
            <img src="asteroid.svg" alt="Icon" width="32" height="auto" />
            <details>
                <summary>Navigation</summary>
                <nav-wc></nav-wc>
            </details>
            <a href="/settings.html?api_key=${this.api_key}"><img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/settings/v14/24px.svg"/>settings</a>
        </header>`
        }
    }
)