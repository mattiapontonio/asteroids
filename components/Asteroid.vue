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
            v-bind:style="{
                transform
            }"
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
                data: {}
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
            transform: function() {
                return `translateX(${100 - (this.x * 100) + '%'}) translateY(${this.y * 100 + '%'}) scale(${this.d})`
            }
        },
        mounted() {
            this.get();
        },
        props: {
            x: {
                type: Number,
                required: true
            },
            y: {
                type: Number,
                required: true
            },
            d: {
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