<template>
    <section>
        <h2>Brightest of the week</h2>
        <loader v-if="loading" class="loading"></loader>
        <div class="error" v-if="error" v-text="error.message"></div>
        <table v-if="near_earth_objects">
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
            <tbody v-for="(e, i) in items" v-bind:key="i">
                <tr>
                    <td rowspan="3">
                        <rhombus v-bind:value="e.scale" />
                    </td>
                    <th>Name</th>
                    <td>{{e.name}}</td>
                </tr>
                <tr>
                    <th>Diameter</th>
                    <td>{{e.estimated_diameter.kilometers.estimated_diameter_max}}</td>
                </tr>
                <tr>
                    <th>Magnitude</th>
                    <td>{{e.absolute_magnitude_h}}</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>
                        <h3>Magnitude <span>(h)</span></h3>
                        <p>{{start_date}}</p>
                        <p>{{end_date}}</p>
                        <p>{{items.length}}</p>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>
<script>
    import Vue from 'vue';
    import Loader from './Loader.vue';
    import Rhombus from './Rhombus.vue';
    export default {
        name: 'brightest',
        components: {
            Loader,
            Rhombus
        },
        data: function () {
            return {
                data: new Array(),
                items: new Array(),
                loading: new Boolean(),
                error: new Boolean(),
                near_earth_objects: undefined
            }
        },
        methods: {
            get() {
                const url = new URL("https://api.nasa.gov");
                url.pathname = 'neo/rest/v1/feed';
                url.searchParams.set('start_date', this.$route.query.start_date);
                url.searchParams.set('end_date', this.$route.query.end_date);
                url.searchParams.set('api_key', this.$route.query.api_key);
                this.loading = true;
                fetch(url)
                .then(response => {
                    this.response = response;
                    this.loading = false;
                    if(response.status==200){
                        response.json().then(data => {
                            Object.assign(this, data);
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
                        });
                    } else if(response.status==400) {
                        response.json().then(data => {
                            this.error = {
                            message: data.error_message
                            };
                        })
                    } else if(response.status==403) {
                        response.json().then(data => {
                            Object.assign(this, data);
                        })
                    }
                })
                .catch(error => {
                    console.error(error);
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
