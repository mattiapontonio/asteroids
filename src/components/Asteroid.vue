<template>
    <div
        v-bind:style="{
                        top: 100 - (x * 100) + '%',
                        left: y * 100 + '%',
                        position: 'absolute'
                    }"
        @mouseover="show = true"
        @mouseleave="show = false"
    >
        <bubble
            v-bind:style="{
                        transform: 'translate(-50%, -50%)',
                        position: 'absolute'
                    }"
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
    export default {
        name: 'asteroid',
        components: {
            Bubble,
            Tooltip
        },
        props: ['data', 'x', 'y', 'd', ],
        data: function () {
            return {
                show: false
            }
        }
    }

</script>
