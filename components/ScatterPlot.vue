<template>
    <div class="scatter-plot">
        <section v-if="errored" class="errored">
            <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
        </section>
        <div v-else-if="loading" class="loading" style="position:absolute; width:100%; height:100%;"></div>
        <section v-else class="container">
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
</template>
<script>
    import Asteroid from './Asteroid.vue';
    import get from '../plugins/get.js';
    /*
    
                .map(function (e, i, a) {
                    return Object
                    .assign(e, {
                        "x": this
                            .scale(
                                e.velocity, 
                                this.min(function (e, i, a) {
                                    return e.velocity
                                }), 
                                this.max(function (e, i, a) {
                                    return e.velocity
                                })
                            ),
                        "y": this
                            .scale(
                                e.distance, 
                                this.min(function (e, i, a) {
                                    return e.distance
                                }), 
                                this.max(function (e, i, a) {
                                    return e.distance
                                })
                            ),
                        "d": this
                            .scale(
                                e.diameter, 
                                this.min(function (e, i, a) {
                                    return e.diameter
                                }), 
                                this.max(function (e, i, a) {
                                    return e.diameter
                                })
                            ),
                    });
                });
    */
    export default {
        name: 'scatter-plot',
        components: {
            Asteroid
        },
        data: function () {
            return {
                data: {
                    near_earth_objects: {}
                }
            }
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
            date: function () {
                const url = new URL(location);
                return url.searchParams.get('date')
            },
            start_date: function () {
                const url = new URL(location);
                return url.searchParams.get('start_date');
            },
            end_date: function () {
                const url = new URL(location);
                return url.searchParams.get('end_date');
            },
            items: function () {
                return this.data?.near_earth_objects?.[this.date]
                ?.map(function (e, i, a) {
                    return Object
                    .assign(e, {
                        "velocity": e?.close_approach_data[0]?.relative_velocity?.kilometers_per_second,
                        "distance": e?.close_approach_data[0]?.miss_distance.astronomical,
                        "diameter": e?.estimated_diameter?.kilometers?.estimated_diameter_max
                    })
                })
            },
            scale: function () {
                return Vue.filter('scale')
            },
            min: function () {
                return Vue.filter('min')
            },
            max: function () {
                return Vue.filter('max')
            },
        },
        mounted() {
            this.get();
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
.loading:before{
    content: 'Loading...';
}
</style>
