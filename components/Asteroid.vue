<template>
    <div
        v-bind:style="{
            top,
            left
        }"
        @focus="show = true"
        @blur="show = false"
        tabindex=0
        class="asteroid"
        errored="errored"
    >
        <bubble
            style="{transform: 'translate(-50%, -50%)'}"
            v-bind:data="data"
        />
        <tooltip
            v-bind:show="show"
            v-bind:data="data"
        />
    </div>
</template>
<script>
    import Bubble from './Bubble.vue';
    import Tooltip from './Tooltip.vue';
    import get from '../plugins/methods/get.js';
    export default {
        name: 'asteroid',
        components: {
            Bubble,
            Tooltip
        },
        data: function () {
            return {
                show: false,
                data: {},
                x: 0,
                y: 0,
                d: 0
            }
        },
        methods: {
            get: function() {
                this.loading = true
                this.error = false
                fetch(this.url)
                .then(response => {
                    this.response = response
                    return response.json()
                })
                .then(data => {
                    console.dir(data)
                    this.data = data
                })
                .catch(error => {
                    console.dir(error)
                    this.errored = true
                    this.error = error
                })
                .finally(() => this.loading = false)
            }
        },
        computed: {
            url: function(){
                const url = new URL(window.location.origin);
                url.pathname = `neo/rest/v1/neo/${this.id}`;
                return url;
            },
            top: function(){
                return 100 - (this.x * 100) + '%';
            },
            left: function(){
                return this.y * 100 + '%';
            },
            x: function(){
                return scale(...[
                    this.velocity,
                    min(this.items.map(function (e, i, a) {
                        return e.velocity
                    })),
                    max(this.items.map(function (e, i, a) {
                        return e.velocity
                    }))
                ])
            },
            y: function(){
                return scale(...[
                    this.distance,
                    min(a.map(function (e, i, a) {
                        return e.distance
                    })),
                    max(a.map(function (e, i, a) {
                        return e.distance
                    }))
                ])
            },
            d: function(){
                return scale(...[
                    this.diameter,
                    min(a.map(function (e, i, a) {
                        return e.diameter
                    })),
                    max(a.map(function (e, i, a) {
                        return e.diameter
                    }))
                ])
            }
        },
        mounted() {
            this.get();
        },
        props: {
            items: {
                type: Array,
                required: true
            },
            velocity: {
                type: Number,
                required: true
            },
            distance: {
                type: Number,
                required: true
            },
            diameter: {
                type: Number,
                required: true
            }
        }
    }

</script>
<style>
    .asteroid:focus .bubble{
        border-color:red;
    }
    .asteroid[errored] .bubble{
        border-color:red;
    }
</style>