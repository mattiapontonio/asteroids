customElements.define(
    'bubble-chart',
    class extends HTMLElement {
        constructor() {
            super();
            addEventListener("popstate", this.connectedCallback);
        }
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
                        const items = data.near_earth_objects[this.date].map(function(e) {
                            return {
                                id: e.id,
                                x: e.close_approach_data[0].relative_velocity
                                    .kilometers_per_second,
                                y: e.close_approach_data[0].miss_distance.kilometers,
                                r: e.estimated_diameter.kilometers.estimated_diameter_max,
                            }
                        })
                        Object.assign(svg, {
                            id: 'svg',
                        })
                        for (const iterator of items) {
                            const id = iterator.id;
                            const circles = [
                                document.createElementNS(
                                    'http://www.w3.org/2000/svg',
                                    'circle'
                                ),
                                document.createElementNS(
                                    'http://www.w3.org/2000/svg',
                                    'circle'
                                ),
                            ]
                            const a = document.createElementNS(
                                'http://www.w3.org/2000/svg',
                                'a'
                            )
                            const cx =
                                ((100 - 0) *
                                    (iterator.x - Math.min(...items.map(function(z) {
                                        return z.x
                                    })))) /
                                (Math.max(...items.map(function(z) {
                                        return z.x
                                    })) -
                                    Math.min(...items.map(function(z) {
                                        return z.x
                                    }))) +
                                '%'
                            const cy =
                                ((100 - 0) *
                                    (iterator.y - Math.min(...items.map(function(z) {
                                        return z.y
                                    })))) /
                                (Math.max(...items.map(function(z) {
                                        return z.y
                                    })) -
                                    Math.min(...items.map(function(z) {
                                        return z.y
                                    }))) +
                                '%'
                            const r =
                                ((10 - 5) *
                                    (iterator.r -
                                        Math.min(
                                            ...items.map(function(z) {
                                                return z.r
                                            })
                                        ))) /
                                (Math.max(
                                        ...items.map(function(z) {
                                            return z.r
                                        })
                                    ) -
                                    Math.min(
                                        ...items.map(function(z) {
                                            return z.r
                                        })
                                    )) +
                                5 +
                                '%'
                            a.setAttribute('href', `/asteroid.html?id=${id}&api_key=${this.api_key}`)
                            a.id = id
                            circles[0].setAttribute('cx', cx)
                            circles[0].setAttribute('cy', cy)
                            circles[0].setAttribute('r', r)
                            circles[1].setAttribute('cx', cx)
                            circles[1].setAttribute('cy', cy)
                            circles[1].setAttribute('r', 1)
                            a.append(...circles)
                            svg.append(a)
                        }
                        this.append(svg)
                    })
                }
            })
        }
    }
)