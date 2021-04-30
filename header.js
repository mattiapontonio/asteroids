import './nav.js'
customElements.define(
    'header-wc',
    class extends HTMLElement {
        get api_key() {
            return new URLSearchParams(location.search).get('api_key')
        }
        connectedCallback() {
            this.innerHTML = `<header>
            <img src="asteroid.svg" alt="Icon" width="64" height="auto" />
            <h1>Asteroids</h1>
            <div>
                <button onclick="history.back()">back</button>
                <button onclick="history.forward()">forward</button>
            </div>
                <details>
                    <summary>nav</summary>
                    <nav-wc></nav-wc>
                </details>
        </header>`
        }
    }
)