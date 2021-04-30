import "./package-version.js"
customElements.define(
    'footer-wc',
    class extends HTMLElement {
        get "X-RateLimit-Remaining" () {
            return sessionStorage.getItem('X-RateLimit-Remaining')
        }
        get "X-RateLimit-Limit" () {
            return sessionStorage.getItem('X-RateLimit-Limit')
        }
        get api_key() {
            return new URLSearchParams(location.search).get('api_key')
        }
        connectedCallback() {
            this.innerHTML = `<footer>
            <table> 
                <tbody>
                    <tr>
                        <th>GitHub</th>
                        <td><a href="https://github.com/mattiapontonio/asteroids">asteroids</a></td>
                    </tr>
                    <tr>
                        <th>Version</th>
                        <td><package-version /></td>
                    </tr>
                    <tr>
                        <th>Credits</th>
                        <td>Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></td>
                    </tr>
                    <tr>
                        <th>X-RateLimit-Limit</th>
                        <td>${this['X-RateLimit-Limit']}</td>
                    </tr>
                    <tr>
                        <th>X-RateLimit-Remaining</th>
                        <td>${this['X-RateLimit-Remaining']}</td>
                    </tr>
                    <tr>
                        <th>API key</th>
                        <td>${this.api_key}</td>
                    </tr>
                </tbody>
            </table>
        </footer>`
        }
    }
)