<template>
    <article>
        <h2>Brightest of the week</h2>
        <h3>Magnitude <span>(h)</span></h3>
        <p>{{start_date}}</p>
        <p>{{end_date}}</p>
        <p>{{items.length}}</p>
        <table>
            <tbody>
                <tr>
                    <td>
                        <div class="rombo-1"></div>
                    </td>
                    <td>Filled area</td>
                    <td>magnitude</td>
                </tr>
                <tr>
                    <td>
                        <div class="rombo-2"></div>
                    </td>
                    <td>Empty area</td>
                    <td>brightness</td>
                </tr>
            </tbody>
        </table>
<<<<<<< HEAD
        <div>{{response.statusText}}</div>
        <asteroids v-bind:asteroids="items"/>
        <button v-on:click="get">get</button>
=======
        <section v-if="errored" class="errored">
            <p>{{error}}</p>
        </section>
        <section v-else>
            <div v-if="loading" class="loading"></div>
            <asteroids
                v-else
                v-bind:asteroids="items"
            />
        </section>
>>>>>>> develop-3
    </article>
</template>
<script>
    import Vue from 'vue';
    import get from '../plugins/methods/get.js';
    import Asteroids from './Asteroids.vue';
    export default {
        name: 'brightest',
        components: {
            Asteroids
        },
        data: function () {
            return {
<<<<<<< HEAD
                response: {},
                loading: false,
                error: false
            }
        },
        computed: {
            near_earth_objects: function () {
                return this?.body?.near_earth_objects || {}
            },
            items: function () {
                return Object
                    .values(this.near_earth_objects)
                    .flat(1)
                    .sort((a, b) => a.absolute_magnitude_h - b.absolute_magnitude_h)
                    .slice(0, 5)
                    .reverse()
                    .map((e, i, a) => {
                        const absolute_magnitude_hs = a.map(e => e.absolute_magnitude_h);
                        const scale = Vue.filter('scale');
                        const min = Vue.filter('min');
                        const max = Vue.filter('max');
                        e.scale = scale(e.absolute_magnitude_h, min(absolute_magnitude_hs), max(absolute_magnitude_hs));
                        return e;
                    });
            },
            url: function () {
                const url = new URL(window.location.origin);
                url.pathname = 'neo/rest/v1/feed';
                url.searchParams.set('start_date', this.start_date);
                url.searchParams.set('end_date', this.end_date);
                return url;
            },
        },
        methods: {
            get
=======
                data: new Array(),
                items: new Array(),
                loading: new Boolean(),
                errored: new Boolean(),
            }
        },
        methods: {
            get() {
                const formatted = Vue.filter('formatted');
                const start = formatted(this.start);
                const end = formatted(this.end);
                const date = formatted(this.date);
                const url = new URL("https://api.nasa.gov");
                console.log(date, start, end);
                console.assert(this.date >= this.start);
                console.assert(this.date <= this.end);
                url.pathname = 'neo/rest/v1/feed';
                url.searchParams.set('start_date', date);
                url.searchParams.set('end_date', date);
                url.searchParams.set('api_key', api_key.value);
                this.loading = true;
                this.errored = false;
                axios
                .get(url)
                .then(response => {
                    if(response.status==200){
                        this.items = Object.values(response.data.near_earth_objects)
                        .flat(1)
                        .sort((a, b) => a.absolute_magnitude_h - b.absolute_magnitude_h)
                        .slice(0, 5)
                        .reverse()
                        .map((e, i, a) => {
                            const absolute_magnitude_hs = a.map(e => e.absolute_magnitude_h);
                            const scale = Vue.filter('scale');
                            const min = Vue.filter('min');
                            const max = Vue.filter('max');
                            e.scale = scale(e.absolute_magnitude_h, min(absolute_magnitude_hs), max(absolute_magnitude_hs));
                            return e;
                        });
                    };
                    this.loading = false;
                })
                .catch(error => {
                    console.error(error);
                    this.errored = true;
                    this.error = error;
                })
                .finally(() => this.loading = false);
            }
>>>>>>> develop-3
        },
        mounted() {
            this.get()
        }
    }

</script>
<style>

</style>
