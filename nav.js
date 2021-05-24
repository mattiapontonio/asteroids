export default customElements.define(
    'nav-wc',
    class extends HTMLElement {
        get api_key() {
            return sessionStorage.getItem('api_key')
        }
        connectedCallback() {
            this.innerHTML = `
            <nav>
            <ul>
                <li><a href="/index.html">Index</a></li>
                <li><a href="/bubble-chart.html?&date=${new Date().toISOString().split("T")[0]}">Bubble chart</a></li>
                <li><a href="/apod.html">Astronomy Picture of the Day</a></li>
                <li><a href="/asteroid.html?&id=2408752">Asteroid</a></li>
                <li><a href="/browse.html">Browse</a></li>
                <li><a href="/feed.html">Feed</a></li>
                <li><a href="https://api.nasa.gov/#signUp">Signup</a></li>
                <li><a href="/login.html">Login</a></li>
                <li><a href="/logout.html">Logout</a></li>
                <li><a href="/settings.html">Settings</a></li>
            </ul>
            </nav>`
        }
    }
)