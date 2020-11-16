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
                        <div style="
                    width: 10px;
                    height:10px; 
                    box-sizing: border-box;
                    transform:rotate(45deg); 
                    background-color: transparent;
                    border: 1px solid white;
                "></div>
                    </td>
                    <td>Filled area</td>
                    <td>magnitude</td>
                </tr>
                <tr>
                    <td>
                        <div style="
                    width: 10px;
                    height:10px; 
                    box-sizing: border-box;
                    transform:rotate(45deg); 
                    background-color: white;
                    border: 1px solid white;
                "></div>
                    </td>
                    <td>Empty area</td>
                    <td>brightness</td>
                </tr>
            </tbody>
        </table>
        <section v-if="errored">
            <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
        </section>
        <section v-else>
            <div v-if="loading" class="loading"></div>
            <asteroids
                v-else
                v-bind:asteroids="items"
            />
        </section>
    </article>
</template>
<script>
    import Vue from 'vue';
    import get from '../plugins/get.js';
    import Asteroids from './Asteroids.vue';
    const date = new Date();
    export default {
        name: 'brightest',
        components: {
            Asteroids
        },
        data: function () {
            return {
                data: {
                    near_earth_objects: {}
                },
                loading: new Boolean(),
                errored: new Boolean(),
            }
        },
        computed: {
            items: function () {
                return Object.values(this.data.near_earth_objects)
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
            start_date: function () {
                const url = new URL(location);
                return url.searchParams.get('start_date');
            },
            end_date: function () {
                const url = new URL(location);
                return url.searchParams.get('end_date');
            }
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
    aside {
        padding: 0 16px;
        border-left: 0px solid white;
    }

    @media (max-width: 800px) {
        aside {
            border-left-width: 0;
        }
    }

</style>
