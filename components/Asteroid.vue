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
                data: {}
            }
        },
        methods: {
            get
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
            }
        },
        mounted() {
            this.get();
        }
    }

</script>
<style>
    .asteroid:focus .bubble{
        border-color:red;
    }
</style>