<template>
    <div>
        <error v-if="error"></error>
        <loading v-if="loading"></loading>
        <div>{{response.statusText}}</div>
        <div class="scatter-plot">
            <section v-bind="near_earth_objects" class="container">
                <asteroid
                    v-for="(item, i) in items"
                    v-bind:key="i"
                    v-bind="item"
                />
                <span class="max" coordinate="x">{{maxX}}</span>
                <span class="min" coordinate="x">{{minX}}</span>
                <span class="max" coordinate="y">{{maxY}}</span>
                <span class="min" coordinate="y">{{minY}}</span>
            </section>
        </div>
    </div>
</template>
<script>
    import Asteroid from './Asteroid.vue';
    import Error from './Error.vue';
    import get from '../plugins/methods/get.js';
    import Vue from 'vue';
    import Loading from './Loading.vue';
  import datetime from '../plugins/computed/datetime.js';
  import start_date from '../plugins/computed/start_date.js';
  import end_date from '../plugins/computed/end_date.js';
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
            get,
        },
        computed: {
            url: function() {
                const url = new URL(window.location.origin);
                url.pathname = 'neo/rest/v1/feed';
                url.searchParams.set('start_date', this.start_date);
                url.searchParams.set('end_date', this.end_date);
                return url;
            },
      datetime,
      start_date,
      end_date,
            near_earth_objects: function () {
                return this?.body?.near_earth_objects || {}
            },
            items: function () {
                return this?.near_earth_objects?.[this.date]
                ?.map(function (e, i, a) {
                    return Object
                    .assign({}, {
                        id: e.id,
                        "velocity": e?.close_approach_data[0]?.relative_velocity?.kilometers_per_second,
                        "distance": e?.close_approach_data[0]?.miss_distance.astronomical,
                        "diameter": e?.estimated_diameter?.kilometers?.estimated_diameter_max
                    })
                })
                .map(function (e, i, a) {
                    return Object
                    .assign(e, {
                        x: scale(...[
                            e.velocity, 
                            min(a.map(function (e, i, a) {
                                return e.velocity
                            })), 
                            max(a.map(function (e, i, a) {
                                return e.velocity
                            }))
                        ]),
                        y: scale(...[
                            e.distance, 
                            min(a.map(function (e, i, a) {
                                return e.distance
                            })), 
                            max(a.map(function (e, i, a) {
                                return e.distance
                            }))
                        ]),
                        d: scale(...[
                            e.diameter, 
                            min(a.map(function (e, i, a) {
                                return e.diameter
                            })), 
                            max(a.map(function (e, i, a) {
                                return e.diameter
                            }))
                        ]),
                    });
                });
            }
        },
        mounted() {
            this.get();
        },
        data: function () {
            return {
                response: new Response()
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
