export default customElements.define(
    'nav-wc',
    class extends HTMLElement {
        get api_key() {
            return sessionStorage.getItem('api_key')
        }
        connectedCallback() {
            this.innerHTML = `
            <nav>
                <h2>Navigation</h2> 
                <a href="/index.html?api_key=${this.api_key}"><img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/home/v11/24px.svg"/>index</a>
                <a href="/bubble-chart.html?api_key=${this.api_key}">bubble-chart</a>
                <a href="/apod.html?api_key=${this.api_key}">apod</a>
                <a href="/asteroid.html?api_key=${this.api_key}">asteroid</a>
                <a href="https://api.nasa.gov/#signUp"><img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/settings/v14/24px.svg"/>signup</a>
                <a href="/login.html?api_key=${this.api_key}"><img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/login/v10/24px.svg"/>login</a>
                <a href="/logout.html?api_key=${this.api_key}"><img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/logout/v10/24px.svg"/>logout</a>
                <a href="/settings.html?api_key=${this.api_key}"><img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/settings/v14/24px.svg"/>settings</a>
            </nav>`
        }
    }
)