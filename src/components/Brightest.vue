<template>
    <div style="
                padding: 0 16px;
    border-left: 2px solid white;">
        <h2>Brightest of the week</h2>
        <h3>Magnitude <span>(h)</span></h3>
        <div>
            <div style="    
            display: flex;
            align-items: center;">
                <div style="
                    width: 10px;
                    height:10px; 
                    box-sizing: border-box;
                    transform:rotate(45deg); 
                    background-color: transparent;
                    border: 1px solid white;
                "></div>
                <div style="margin-left: 8px;">Filled area: magnitude</div>
            </div>
            <div style="    
            display: flex;
            align-items: center;
            margin-top:8px;">
                <div style="
                    width: 10px;
                    height:10px; 
                    box-sizing: border-box;
                    transform:rotate(45deg); 
                    background-color: white;
                    border: 1px solid white;
                "></div>
                <div style="margin-left: 8px;">Empty area: brightness</div>
            </div>
        </div>
        <section v-if="errored">
            <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
        </section>
        <section v-else>
            <div v-if="loading">Loading...</div>
            <asteroids
                v-else
                v-bind:asteroids="items"
            />
        </section>
    </div>
</template>
<script>
    import Vue from 'vue';
    import axios from 'axios';
    import Asteroids from './Asteroids.vue';
    export default {
        name: 'brightest',
        components:{
            Asteroids
        },
        props: {
            start_date: {
                type: Date
            },
            end_date: {
                type: Date
            }
        },
        data: function () {
            return {
                data: new Array(),
                loading: new Boolean(),
                errored: new Boolean(),
            }
        },
        computed: {
            items: function () {
                return Object.values(this.data).flat(1).sort((a, b) => a.absolute_magnitude_h - b.absolute_magnitude_h).slice(0, 5).reverse().map((e, i, a) => {
                    const absolute_magnitude_hs = a.map(e => e.absolute_magnitude_h);
                    const scale = Vue.filter('scale');
                    const min = Vue.filter('min');
                    const max = Vue.filter('max');
                    e.scale = scale(e.absolute_magnitude_h, min(absolute_magnitude_hs), max(absolute_magnitude_hs));
                    return e;
                });
            }
        },
        methods: {
            get() {
                const formatted = Vue.filter('formatted');
                const start_date = formatted(this.start_date);
                const end_date = formatted(this.end_date);
                const date = formatted(this.date);
                console.log(date, start_date, end_date);
                console.assert(date >= start_date && date <= end_date);
                const url = new URL('https://api.nasa.gov/neo/rest/v1/feed');
                url.searchParams.set('start_date', start_date);
                url.searchParams.set('end_date', end_date);
                url.searchParams.set('api_key', process.env.VUE_APP_API_KEY);
                this.loading = true;
                this.errored = false;
                axios.get(url).then(response => {
                    this.data = response.data.near_earth_objects;
                    this.loading = false;
                }).catch(error => {
                    console.error(error);
                    this.errored = true;
                }).finally(() => this.loading = false);
            }
        },
        mounted() {
            this.get()
        }
    }

</script>
