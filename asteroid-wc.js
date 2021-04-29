customElements.define(
    'bubble-chart',
    class extends HTMLElement {
        get api_key() {
            return new URLSearchParams(location.search).get('api_key')
        }
        get date() {
            return new URLSearchParams(location.search).get('date')
        }
        connectedCallback() {
            fetch(
                `https://api.nasa.gov/neo/rest/v1/feed?api_key=${this.api_key}&start_date=${this.date}`
            ).then((response) => {
                if (response.status == 200) {
                    response.json().then((data) => {
                        const svg = document.createElementNS(
                            'http://www.w3.org/2000/svg',
                            'svg'
                        )
                        Object.assign(svg, {
                            id: 'svg',
                        })
                        svg.classList.add('MfPnrltCwM')
                        for (const iterator of data.near_earth_objects[this.date]) {
                            const circle = document.createElementNS('circle')
                            Object.assign(svg, {
                                id: iterator.id,
                            })
                            svg.append(circle)
                        }
                        this.append(svg)
                    })
                }
            })
        }
    }
)