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
                        for (const iterator of data.near_earth_objects[this.date]) {
                            const circle = document.createElementNS(
                                'http://www.w3.org/2000/svg',
                                'circle'
                            );
                            const a = document.createElementNS(
                                'http://www.w3.org/2000/svg',
                                'a'
                            );
                            circle.id = iterator.id;
                            a.setAttribute("href", `/asteroid?id=${iterator.id}`);
                            circle.setAttribute("cx", ((100 - 0) * (iterator.close_approach_data[0].relative_velocity.kilometers_per_second - Math.min.apply(this, data.near_earth_objects[this.date].map(function(z) {
                                return z.close_approach_data[0].relative_velocity.kilometers_per_second
                            })))) / (Math.max.apply(this, data.near_earth_objects[this.date].map(function(z) {
                                return z.close_approach_data[0].relative_velocity.kilometers_per_second
                            })) - Math.min.apply(this, data.near_earth_objects[this.date].map(function(z) {
                                return z.close_approach_data[0].relative_velocity.kilometers_per_second
                            }))) + '%');
                            circle.setAttribute("cy", ((100 - 0) * (iterator.close_approach_data[0].miss_distance.kilometers - Math.min.apply(this, data.near_earth_objects[this.date].map(function(z) {
                                return z.close_approach_data[0].miss_distance.kilometers
                            })))) / (Math.max.apply(this, data.near_earth_objects[this.date].map(function(z) {
                                return z.close_approach_data[0].miss_distance.kilometers
                            })) - Math.min.apply(this, data.near_earth_objects[this.date].map(function(z) {
                                return z.close_approach_data[0].miss_distance.kilometers
                            }))) + '%')
                            circle.setAttribute("r", ((10 - 5) * (iterator.estimated_diameter.kilometers.estimated_diameter_max - Math.min.apply(this, data.near_earth_objects[this.date].map(function(z) {
                                return z.estimated_diameter.kilometers.estimated_diameter_max
                            })))) / (Math.max.apply(this, data.near_earth_objects[this.date].map(function(z) {
                                return z.estimated_diameter.kilometers.estimated_diameter_max
                            })) - Math.min.apply(this, data.near_earth_objects[this.date].map(function(z) {
                                return z.estimated_diameter.kilometers.estimated_diameter_max
                            }))) + 5 + '%')
                            a.append(circle)
                            svg.append(a)
                        }
                        this.append(svg)
                    })
                }
            })
        }
    }
)