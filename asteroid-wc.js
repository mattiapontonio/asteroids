customElements.define(
    'asteroid-wc',
    class extends HTMLElement {
        get api_key() {
            return new URLSearchParams(location.search).get('api_key')
        }
        get id() {
            return new URLSearchParams(location.search).get('id')
        }
        connectedCallback() {
            fetch(`http://www.neowsapp.com/rest/v1/neo/${this.id}?api_key=${this.api_key}`)
                .then((response) => {
                    if (response.status == 200) {
                        response.json().then((data) => {
                            const table = document.createElement("table");
                            Object.entries(data).forEach(function([a, b]) {
                                const row = table.insertRow();
                                row.insertCell().innerText = JSON.stringify(a, undefined, 2);
                                row.insertCell().innerText = JSON.stringify(b, undefined, 2);
                            })
                            this.append(table);
                        })
                    }
                })
        }
    }
)