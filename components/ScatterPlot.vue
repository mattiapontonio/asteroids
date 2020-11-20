<template>
    <div>
        <error v-if="error"></error>
        <loading v-if="loading"></loading>
        <table>
            <tr>
                <th>Loading</th>
                <th>Length</th>
            </tr>
            <tr>
                <td>{{loading}}</td>
                <div>{{length}}</div>
            </tr>
        </table>
        <div v-if="response.ok">
            <div class="scatter-plot">
                <section class="container">
                    <bubble
                        v-for="(item, i) in items"
                        v-bind:key="i"
                        v-bind:style="{ 
                            transform: `translate(${item.x},${item.y}) scale(${item.d})`
                        }"
                    />
                </section>
                <span class="max" coordinate="x">{{maxX}}</span>
                <span class="min" coordinate="x">{{minX}}</span>
                <span class="max" coordinate="y">{{maxY}}</span>
                <span class="min" coordinate="y">{{minY}}</span>
            </div>
        </div>
        <div v-else>
            <div>{{response.status}}</div>
            <div>{{response.statusText}}</div>
        </div>
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
                const url = new URL(window.location.origin)
                url.pathname = 'neo/rest/v1/feed'
                url.searchParams.set('start_date', this.start_date)
                url.searchParams.set('end_date', this.end_date)
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
                items: []
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
