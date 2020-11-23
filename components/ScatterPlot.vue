<template>
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
        <error v-if="error"></error>
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
        <div v-if="response.ok">
            <section class="scatter-plot">
                <h3>Scatter plot</h3>
                <div class="container">
                    <bubble
                        v-for="(item, i) in items"
                        v-bind:key="i"
                        v-bind:style="item.style"
                    />
                </div>
            </section>
        </div>
        <div v-else>
            <div v-if="response.status === 403">
                <form>
                    <label for="api_key">api_key</label>
                    <input type="text" id="api_key" name="api_key" required>
                    <label for="date">date</label>
                    <input id="date" type="date" :value="date" name="date">
                    <button type="submit" value="Submit">Submit</button>
                </form>
            </div>
            <div v-else>
                <div>{{response.status}}</div>
                <div>{{response.statusText}}</div>
            </div>
        </div>
    </div>
</template>
<script>
    import Asteroid from './Asteroid.vue'
    import Error from './Error.vue'
    import Bubble from './Bubble.vue'
    import get from '../plugins/methods/get.js'
    import Vue from 'vue'
    import Loading from './Loading.vue'
    const scale = Vue.filter('scale')
    const min=Vue.filter('min')
    const max=Vue.filter('max')
    //new (Date.bind(null, 2011, 11, 24))
    export default {
        name: 'scatter-plot',
        components: {
            Asteroid,
            Error,
            Loading,
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
            }
        }
    }

</script>
<style>
.loading {
    background: rgba(10,30,26,0.5);
	background-size: 400% 400%;
    justify-self: stretch;
    align-self: stretch;
    flex-grow: 1;
    left:0;
    top:0;
    min-height: 128px;
    align-items: center;
    justify-content: center;
    display: flex;
}

.scatter-plot .bubble {
    position: absolute;
}
</style>
