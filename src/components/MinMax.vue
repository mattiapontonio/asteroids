<template>
    <div>
        <h3>Diameter</h3>
        <div style="display: flex; align-items: center;">
            <div style="display: flex;align-items: center;">
                <bubble v-bind:d="0" />
                <span style="margin-left:16px">Min km</span>
            </div>
            <div style="
                    display: flex;
                    align-items: center;
                    margin-left:110px;
                ">
                <bubble
                    v-bind:d="1"
                    v-bind:style="{
                            position: 'absolute',
                            transform: 'translateX(-50%)'
                        }"
                />
                <span style="margin-left:16px">Max km</span>
            </div>
        </div>
    </div>
</template>
<script>
import Bubble from './Bubble.vue'
    export default {
        name: 'min-max',
        components: {
            Bubble
        }
    }

</script>
