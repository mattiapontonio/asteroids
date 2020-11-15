<template>
    <div
        class="bubble"
        v-bind:style="{
           width,
           height
        }"
    >
        <div class="point"></div>
    </div>
</template>
<script>
    export default {
        name: 'bubble',
        computed: {
            width: function () {
                return this.d * (this.maxD - this.minD) + this.minD + "px";
            },
            height: function () {
                return this.d * (this.maxD - this.minD) + this.minD + "px";
            }
        }
    }

</script>
<style>
    .bubble {
        width: auto;
        min-width: 30px;
        min-height: 30px;
    }
</style>