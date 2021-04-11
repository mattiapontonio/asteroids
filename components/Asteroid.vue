<template>
    <circle
        @focus="show = true"
        @blur="show = false"
        tabindex=0
        class="asteroid"
    >
        <bubble 
            v-bind:x="x"
            v-bind:y="y"
            v-bind:d="d"
        />
        <tooltip
            v-bind:show="show"
            v-bind:data="data"
        />
    </circle>
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
        props: {
            id: {
                type: String,
                required: true
            }
        }
    }

</script>
<style>
</style>