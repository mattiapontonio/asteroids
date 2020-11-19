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
                    <asteroid
                        v-for="(item, i) in items"
                        v-bind:key="i"
                        v-bind="item"
                        v-bind="items"
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
            Loading
        },
        methods: {
            get: function() {
                this.loading = true
                this.error = false
                fetch(this.url)
                .then(response => {
                    console.log(response)
                    this.response = response
                    this.loading = false
                    return response.json()
                })
                .then(body => {
                    this.body = body
                })
                .catch(error => {
                    this.error = error
                })
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
            response: {
                set: function (response) {
                    console.log(response)
                    const {ok,bodyUsed}=response
                    if (ok) {
                        if (bodyUsed) {
                            response.json().then(body => {
                                this.body = body
                            })
                        }
                    }
                }
            },
            body: {
                set: function (body) {
                    const {near_earth_objects} = this.body
                    if (near_earth_objects) {
                        if (items) {
                            if (Array.isArray(items)) {
                                this.near_earth_objects_of_today = near_earth_objects[this.date]
                            }
                        }
                    }
                }
            },
            length: function() {
                return this.items.length
            },
            items: function() {
                return this.near_earth_objects_of_today.map(function (e, i, a) {
                    return {
                        id: e.id,
                        velocity: e?.close_approach_data[0]?.relative_velocity?.kilometers_per_second,
                        distance: e?.close_approach_data[0]?.miss_distance.astronomical,
                        diameter: e?.estimated_diameter?.kilometers?.estimated_diameter_max
                    }
                })
            },
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
                near_earth_objects_of_today: []
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
</style>
