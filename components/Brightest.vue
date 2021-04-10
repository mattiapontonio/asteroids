<template>
    <article>
        <h2>Brightest of the week</h2>
        <h3>Magnitude <span>(h)</span></h3>
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
            <p>{{error}}</p>
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
    import axios from 'axios';
    import Asteroids from './Asteroids.vue';
    const date = new Date();
    export default {
        name: 'brightest',
        components: {
            Asteroids
        },
        props: {
            start: {
                type: Date,
                default: ()=>date
            },
            end: {
                type: Date,
                default: ()=>date
            },
            date: {
                type: Date,
                default: ()=>date
            }
        },
        data: function () {
            return {
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
                url.searchParams.set('api_key', "DEMO_KEY");
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
