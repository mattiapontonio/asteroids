<template>
<<<<<<< HEAD
    <div>
        <loader v-if="loading"></loader>
        <table>
            <tr>
                <th>date</th>
            </tr>
            <tr>
                <td>{{date}}</td>
            </tr>
        </table>
        <table>
            <tr>
                <th>Coordinate</th>
                <th>Value</th>
                <th>Max</th>
                <th>Min</th>
                <th>unit of measure</th>
                <th>Direction</th>
            </tr>
            <tr v-for="(row, i) in rows">
                <td>{{row.coordinate}}</td>
                <td>{{row.value}}</td>
                <td>{{row.max}}</td>
                <td>{{row.min}}</td>
                <td>{{row.uom}}</td>
                <td>{{row.dir}}</td>
            </tr>
        </table>
        <table>
            <tr>
                <th>Loading</th>
            </tr>
            <tr>
                <td>{{loading}}</td>
            </tr>
        </table>
        <table>
            <tr>
                <th>Length</th>
            </tr>
            <tr>
                <div>{{length}}</div>
            </tr>
        </table>
        <section class="scatter-plot">
            <h3>Scatter plot</h3>
            <div class="container">
                <bubble
                    v-for="(item, i) in items"
                    v-bind:key="i"
                    v-bind:style="item.style"
                />
            </div>
=======
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
>>>>>>> develop-3
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
