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
            return sessionStorage.getItem('api_key')
        }
        get language() {
            return new Intl.DisplayNames(navigator.language, { type: 'language' }).of(navigator.language)
        }
        connectedCallback() {
            this.innerHTML = `<footer>
            <table> 
                <tbody>
                    <tr>
                        <th>Version</th>
                        <td><package-version /></td>
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
                    <tr>
                        <th>Language</th>
                        <td>${this.language}</td>
                    </tr>
                    <tr>
                        <th>GitHub</th>
                        <td><a href="https://github.com/mattiapontonio/asteroids">asteroids</a></td>
                    </tr>
                    <tr>
                        <th>Credits</th>
                        <td>Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></td>
                    </tr>
                    <tr>
                        <th>Coder</th>
                        <td><a href="https://it.linkedin.com/in/mattia-pontonio">Mattia Pontonio</a></td>
                    </tr>
                </tbody>
            </table>
<button onclick="navigator.share({
  title: this.ownerDocument.title,
  text: 'text',
  url: this.ownerDocument.URL,
})">Share</button>
        </footer>`;
        }
    }
)
