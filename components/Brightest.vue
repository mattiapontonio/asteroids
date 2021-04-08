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
        <div>{{response.statusText}}</div>
        <asteroids v-bind:asteroids="items"/>
        <button v-on:click="get">get</button>
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
        },
        mounted() {
            this.get()
        }
    }

</script>
<style>

</style>
