export default customElements.define(
    'nav-wc',
    class extends HTMLElement {
        get api_key() {
            return new URLSearchParams(location.search).get('api_key')
        }
        connectedCallback() {
            this.innerHTML = `
            <nav>
                <a href="/index.html?api_key=${this.api_key}">index</a>
                <a href="/bubble-chart.html?api_key=${this.api_key}"">bubble-chart</a>
                <a href="/apod.html?api_key=${this.api_key}"">apod</a>
                <a href="/asteroid.html?api_key=${this.api_key}"">asteroid</a>
                <a href="/login.html?api_key=${this.api_key}"">
                <img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/login/v10/24px.svg"/>
                login</a>
            </nav>`
        }
    }
)