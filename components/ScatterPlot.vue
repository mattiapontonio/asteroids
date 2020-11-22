<template>
    <div>
        <table>
            <tr>
                <th>datetime</th>
                <th>start_date</th>
                <th>end_date</th>
            </tr>
            <tr>
                <td>{{datetime}}</td>
                <td>{{start_date}}</td>
                <td>{{end_date}}</td>
            </tr>
        </table>
        <table>
            <tr>
                <th>Coordinate</th>
                <th>Value</th>
                <th>Max</th>
                <th>Min</th>
                <th>unit of measure</th>
                <th>Direction</th>
            </tr>
            <tr v-for="(row, i) in rows">
                <td>{{row.coordinate}}</td>
                <td>{{row.value}}</td>
                <td>{{row.max}}</td>
                <td>{{row.min}}</td>
                <td>{{row.uom}}</td>
                <td>{{row.dir}}</td>
            </tr>
        </table>
        <error v-if="error"></error>
        <table>
            <tr>
                <th>Loading</th>
            </tr>
            <tr>
                <td>{{loading}}</td>
            </tr>
        </table>
        <table>
            <tr>
                <th>Length</th>
            </tr>
            <tr>
                <div>{{length}}</div>
            </tr>
        </table>
        <div v-if="response.ok">
            <section class="scatter-plot">
                <h3>Scatter plot</h3>
                <div class="container">
                    <bubble
                        v-for="(item, i) in items"
                        v-bind:key="i"
                        v-bind:style="{ 
                            transform: `translate(${item.x},${item.y}) scale(${item.d})`
                        }"
                    />
                </div>
            </section>
        </div>
        <div v-else>
            <div v-if="response.status === 403">
                <form action="/" method="get">
                    <label for="api_key">api_key</label>
                    <input type="text" id="api_key" name="api_key" required>
                    <button type="submit" value="Submit">Submit</button>
                </form>
            </div>
            <div v-else>
                <div>{{response.status}}</div>
                <div>{{response.statusText}}</div>
            </div>
        </div>
        <loader v-if="loading"></loader>
        <button v-on:click="get">get</button>
    </div>
</template>
<script>
    import Asteroid from './Asteroid.vue'
    import Error from './Error.vue'
    import Bubble from './Bubble.vue'
    import get from '../plugins/methods/get.js'
    import Vue from 'vue'
    import Loading from './Loading.vue'
  import datetime from '../plugins/computed/datetime.js'
  import start_date from '../plugins/computed/start_date.js'
  import end_date from '../plugins/computed/end_date.js'
    const scale = Vue.filter('scale')
    const min=Vue.filter('min')
    const max=Vue.filter('max')
    //new (Date.bind(null, 2011, 11, 24))
    export default {
        name: 'scatter-plot',
        components: {
            Asteroid,
            Error,
            Loading,
            Bubble
        },
        methods: {
            get: function() {
                this.loading = true
                this.error = false
                fetch(this.url)
                .then(response => {
                    this.response = response
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
                                console.log(near_earth_objects[this.date])
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
                                        x: scale(e.x,min(a.map(e=>e.x)),max(a.map(e=>e.x)))*100+"%",
                                        y: scale(e.y,min(a.map(e=>e.y)),max(a.map(e=>e.y)))*100+"%",
                                        d: scale(e.d,min(a.map(e=>e.d)),max(a.map(e=>e.d)))
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
        },
        computed: {
            datetime,
            start_date,
            end_date,
            url: function() {
                const url = new URL(location)
                url.pathname = 'neo/rest/v1/feed'
                return url
            },
            length: function() {
                return this.items.length
            },
            date: function() {
                return this.datetime.substring(0, 10)
            }
        },
        mounted() {
            this.get()
        },
        data: function () {
            return {
                response: new Response(),
                body: {},
                loading: false,
                error: false,
                items: [],
                rows: []
            }
        }
    }

</script>
<style>
.loading {
    background: rgba(10,30,26,0.5);
	background-size: 400% 400%;
    justify-self: stretch;
    align-self: stretch;
    flex-grow: 1;
    left:0;
    top:0;
    min-height: 128px;
    align-items: center;
    justify-content: center;
    display: flex;
}

    .bubble {
        width: 100px;
        height: 100px;
        transform-origin: center center;
    }
</style>
