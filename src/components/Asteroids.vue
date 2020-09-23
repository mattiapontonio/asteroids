<template>
    <div>
        <div
            v-for="(val, i) in asteroids"
            v-bind:key="i"
            style="
                display: flex;
                align-items:center;
                margin: 32px 0px;
            "
        >
            <rhombus v-bind:value="val.scale" />
            <div style="margin-left: 50px;">
                <div>Name: {{val.name}}</div>
                <div>Diameter: {{val.estimated_diameter.kilometers.estimated_diameter_max}}</div>
                <div>Magnitude: {{val.absolute_magnitude_h}}</div>
            </div>
        </div>
    </div>
</template>
<script>
    import Rhombus from './Rhombus.vue';
    export default {
        name:'asteroids',
        components: {
            Rhombus
        },
        props: {
            asteroids: {
                type: Array,
                default: () => new Array()
            }
        }
    }

</script>
