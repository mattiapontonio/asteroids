<template>
    <article>
        <h2>Brightest of the week</h2>
        <h3>Magnitude <span>(h)</span></h3>
        <p>{{start_date}}</p>
        <p>{{end_date}}</p>
        <p>{{items.length}}</p>
        <response v-bind="response"></response>
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
        <p v-if="errored" class="errored" v-text="error"></p>
        <section v-else>
            <div v-if="loading" class="loading"></div>
            <asteroids
                v-else
                v-bind:items="items"
            />
        </section>
    </article>
</template>
<script>
    import Vue from 'vue';
    import Asteroids from './Asteroids.vue';
    export default {
        name: 'brightest',
        components: {
            Asteroids
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
                url.pathname = 'neo/rest/v1/feed';
                url.searchParams.set('start_date', date);
                url.searchParams.set('end_date', date);
                url.searchParams.set('api_key', api_key.value);
                this.loading = true;
                this.errored = false;
                fetch(url)
                .then(response => {
                    this.response = response;
                    this.loading = false;
                    if(response.status==200){
                        response.json().then(data => {
                            this.items = Object.values(data.near_earth_objects)
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
                        })
                    };
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

</style>
