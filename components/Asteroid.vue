<template>
    <div
        v-bind:style="{
            top,
            left
        }"
        @mouseover="show = true"
        @mouseleave="show = false"
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
            get() {
                axios
                .get(this.url)
                .then(response => this.data = response.data);
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
            }
        },
        mounted() {
            this.get();
        }
    }

</script>
<style>
</style>