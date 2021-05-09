customElements.define(
    'login-wc',
    class extends HTMLElement {
        get api_key() {
            return sessionStorage.getItem('api_key')
        }
        connectedCallback() {
            this.innerHTML = `<form id="form" action="${document.referrer}" onsubmit="sessionStorage.setItem('api_key', api_key.value)">
            <label for="api_key">API key</label>
            <input type="text" id="api_key" name="api_key" placeholder="DEMO_KEY" required value="${this.api_key}" />
            <button type="submit">Submit</button>
        </form>`
        }
    }
)