<template>
    <div class="scatter-plot">
        <section v-if="errored" class="errored">
            <p>{{error}}</p>
        </section>
        <div v-else-if="loading" class="loading" style="position:absolute; width:100%; height:100%;"></div>
        <section
            v-else
            class="container"
        >
            <asteroid
                v-for="(item, i) in items"
                v-bind:data="{
                    ...item
                }"
                v-bind:key="i"
                style="position: absolute;"
                v-bind:x="item.x"
                v-bind:y="item.y"
                v-bind:d="item.d"
            />
            <span class="max" coordinate="x">{{maxX}}</span>
            <span class="min" coordinate="x">{{minX}}</span>
            <span class="max" coordinate="y">{{maxY}}</span>
            <span class="min" coordinate="y">{{minY}}</span>
        </section>
    </div>
</template>
<script>
    import Asteroid from './Asteroid.vue'
    import Bubble from './Bubble.vue'
    import get from '../plugins/methods/get.js'
    import Vue from 'vue'
    const scale = Vue.filter('scale')
    const min=Vue.filter('min')
    const max=Vue.filter('max')
    //new (Date.bind(null, 2011, 11, 24))
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
