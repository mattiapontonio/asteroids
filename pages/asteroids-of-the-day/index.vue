<template>
    <div>
        <div v-if="response.ok">
            <asteroids-of-the-day
                v-bind:date="date"
                v-bind:items="items"
            />
        </div>
        <div v-else>
            <div>{{response.status}}</div>
            <div>{{response.statusText}}</div>
            <form>
                <label for="api_key">api_key</label>
                <input 
                    type="text" 
                    id="api_key" 
                    name="api_key"
                    value="DEMO_KEY" 
                    required>
                <label for="start_date">start_date</label>
                <input 
                    id="start_date" 
                    type="date"
                    name="start_date" 
                    value="2021-04-25"
                    required>
                <label for="start_date">start_date</label>
                <input 
                    id="end_date" 
                    type="date"
                    name="end_date" 
                    value="2021-04-25"
                    required>
                <button type="submit" value="Submit">Submit</button>
            </form>
        </div>
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
        const url = new URL(window.location);
        url.pathname = 'neo/rest/v1/feed';
        url.searchParams.set('date', context.query.date);
        url.searchParams.set('api_key', context.query.api_key);
        fetch(url)
        .then(response => {
            this.response = response;
            return response.json()
        })
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