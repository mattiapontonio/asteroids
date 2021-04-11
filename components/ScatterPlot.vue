<template>
        <svg
            class="scatter-plot"
            viewBox="0 0 200 100"
            preserveAspectRatio="xMidYMid meet" 
        >
        <g>
            <line v-for="i in 10" :key="i" :x1="i*10" y1="0" :x2="i*10" y2="100%" />
            <line v-for="i in 10" :key="i" x1="0" :y1="i*10" x2="100%" :y2="i*10" />
        </g>
        <g v-for="(item, i) in items" v-bind:key="i">
            <circle
                :id="'circle'+i"
                :cx="(()=>{
                    const g = items.map(z=>z.close_approach_data[0].relative_velocity.kilometers_per_second);
                    return `${100*(g[i]-Math.min(...g))/(Math.max(...g)-Math.min(...g))}%`;
                })()"
                :cy="(()=>{
                    const g = items.map(z=>z.close_approach_data[0].miss_distance.kilometers);
                    return `${100*(g[i]-Math.min(...g))/(Math.max(...g)-Math.min(...g))}%`;
                })()"
                :r="10"
                class="bubble"
            />
            <use :href="'#circle'+i" r="1" />
        </g>
        </svg>
</template>
<script>
    import Asteroid from './Asteroid.vue'
    import Bubble from './Bubble.vue'
    import Vue from 'vue'
    const scale = Vue.filter('scale')
    const min=Vue.filter('min')
    const max=Vue.filter('max')
    export default {
        name: 'scatter-plot',
        components: {
            Asteroid,
            Bubble
        },
        computed: {
            url: function() {
                const url = new URL(location)
                url.pathname = 'neo/rest/v1/feed'
                return url
            },
            length: function() {
                return this.items.length
            }
        },
        data: function () {
            return {
                body: {},
                loading: false,
                error: false,
                rows: []
            }
        },
        props: {
            "date": {
                type: String,
                required: true
            },
            "items": {
                type: Array,
                required: true,
                default: function () {
                    return []
                }
            },
            "response": {
                type: Object,
                required: true,
                default: function () {
                    return {}
                }
            },
            error: {
                type: String
            }
        }
    }

</script>
<style>
</style>
