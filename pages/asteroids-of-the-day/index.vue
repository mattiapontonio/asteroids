<template>
    <div>
        <asteroids-of-the-day
            v-bind:date="date"
            v-bind:items="items"
            v-bind:response="response"
            v-bind:api-key="apiKey"
        />
        <div>{{response.status}}</div>
        <div>{{response.statusText}}</div>
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            response: {},
        }
    },
    async asyncData(context) {
        return { 
            date: context.query.date,
            apiKey: context.query.api_key
        }
    },
    async fetch(context) { 
        this.response = await fetch(`https://http://localhost:3000/neo/rest/v1/feed?date=${context.query.date}&api_key=${context.query.api_key}`)
        .then(body => {
            console.dir(body)
            const {near_earth_objects} = body
            if (body.near_earth_objects) {
                console.dir(body.near_earth_objects)
                if (body.near_earth_objects[this.date]) {
                    console.dir(body.near_earth_objects[this.date])
                    if (Array.isArray(body.near_earth_objects[this.date])) {
                        console.dir(body.near_earth_objects[this.date])
                        this.items = near_earth_objects[this.date]
                        .map(function (e, i, a) {
                            return {
                                id: e.id,
                                x: e.close_approach_data[0].relative_velocity.kilometers_per_second,
                                y: e.close_approach_data[0].miss_distance.kilometers,
                                d: e.estimated_diameter.kilometers.estimated_diameter_max
                            }
                        })
                        .map(function (e, i, a) {
                            return {
                                id: e.id,
                                style: {
                                    left: scale(e.x,min(a.map(e=>e.x)),max(a.map(e=>e.x)))*100+"%",
                                    bottom: scale(e.y,min(a.map(e=>e.y)),max(a.map(e=>e.y)))*100+"%",
                                    width: scale(e.d,min(a.map(e=>e.d)),max(a.map(e=>e.d)))*100+"px",
                                    height: scale(e.d,min(a.map(e=>e.d)),max(a.map(e=>e.d)))*100+"px"
                                }
                            }
                        });
                        this.rows = [
                            {
                                coordinate: 'x',
                                value: 'Relative velocity',
                                min: Math.min.apply(null, near_earth_objects[this.date].map(e=>e.close_approach_data[0].relative_velocity.kilometers_per_second)),
                                max:  Math.max.apply(null, near_earth_objects[this.date].map(e=>e.close_approach_data[0].relative_velocity.kilometers_per_second)),
                                uom: 'km/s',
                                dir: '➡'
                            },
                            {
                                coordinate: 'y',
                                value: 'Miss distance',
                                min: Math.min.apply(null, near_earth_objects[this.date].map(e=>e.close_approach_data[0].miss_distance.kilometers)),
                                max:  Math.max.apply(null, near_earth_objects[this.date].map(e=>e.close_approach_data[0].miss_distance.kilometers)),
                                uom: 'au',
                                dir: '⬆'
                            },
                            {
                                coordinate: 'd',                                        
                                min: Math.min.apply(null, near_earth_objects[this.date].map(e=>e.estimated_diameter.kilometers.estimated_diameter_max)),
                                max:  Math.max.apply(null, near_earth_objects[this.date].map(e=>e.estimated_diameter.kilometers.estimated_diameter_max))
                            }
                        ];
                    }
                }
            }
        })
        .catch(error => {
            console.dir(error)
            this.errored = true
            this.error = error
        })
        .finally(() => this.loading = false)
    }
}
</script>