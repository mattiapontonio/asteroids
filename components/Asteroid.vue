<template>
    <div
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
        props: {
            id: {
                type: String,
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