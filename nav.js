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
                <a href="/index.html">Index</a>
                <a href="/bubble-chart.html?&date=${new Date().toISOString().split("T")[0]}">Bubble chart</a>
                <a href="/apod.html">Astronomy Picture of the Day</a>
                <a href="/asteroid.html?&id=2408752">Asteroid</a>
                <a href="/browse.html">Browse</a>
                <a href="/feed.html">Feed</a>
                <a href="https://api.nasa.gov/#signUp">Signup</a>
                <a href="/login.html">Login</a>
                <a href="/logout.html">Logout</a>
                <a href="/settings.html">Settings</a>
            </nav>`
        }
    }
)