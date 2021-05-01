customElements.define(
    'selector-wc',
    class extends HTMLElement {
        constructor() {
            super()
            this.form = 'form'
        }
        get api_key() {
            return sessionStorage.getItem('api_key')
        }
        get start_date() {
            return new URLSearchParams(location.search).get('start_date')
        }
        get end_date() {
            return new URLSearchParams(location.search).get('end_date')
        }
        get date() {
            return new URLSearchParams(location.search).get('date')
        }
        connectedCallback() {
            fetch(
                `https://api.nasa.gov/neo/rest/v1/feed?api_key=${this.api_key}&start_date=${this.start_date}&end_date=${this.end_date}`
            ).then((response) => {
                if (response.status == 200) {
                    response.json().then(({ near_earth_objects }) => {
                        for (const key in near_earth_objects) {
                            const input = document.createElement('input')
                            const label = document.createElement('label')
                            Object.assign(input, {
                                type: 'radio',
                                name: 'date',
                                id: key,
                                value: key,
                                checked: key == this.date,
                                onchange: function() {
                                    const url = new URL(window.location);
                                    url.searchParams.set('date', this.value);
                                    window.history.pushState({}, '', url);
                                },
                            })
                            Object.assign(label, {
                                htmlFor: key,
                                innerText: new Date(key).toLocaleDateString(
                                    navigator.language, {
                                        weekday: 'long',
                                        year: 'numeric',
                                        month: 'numeric',
                                        day: 'numeric',
                                    }
                                )
                            })
                            this.append(input, label)
                        }
                    })
                }
            })
        }
    }
)