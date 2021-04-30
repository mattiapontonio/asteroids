export default customElements.define(
    'package-version',
    class extends HTMLElement {
        connectedCallback() {
            fetch('./package.json')
                .then((response) => response.json())
                .then((data) => (this.innerText = data.version))
        }
    }
)