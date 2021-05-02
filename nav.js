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
                <a href="/index.html"><img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/home/v11/24px.svg"/>index</a>
                <a href="/bubble-chart.html?&date=${new Date().toISOString().split("T")[0]}">Bubble chart</a>
                <a href="/apod.html">Astronomy Picture of the Day</a>
                <a href="/asteroid.html?&id=2408752">asteroid</a>
                <a href="/browse.html">Browse</a>
                <a href="/feed.html">Feed</a>
                <a href="https://api.nasa.gov/#signUp"><img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/settings/v14/24px.svg"/>signup</a>
                <a href="/login.html"><img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/login/v10/24px.svg"/>login</a>
                <a href="/logout.html"><img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/logout/v10/24px.svg"/>logout</a>
                <a href="/settings.html"><img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/settings/v14/24px.svg"/>settings</a>
            </nav>`
        }
    }
)