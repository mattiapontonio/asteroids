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
            <table>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{{val.name}}</td>
                    </tr>
                    <tr>
                        <td>Diameter</td>
                        <td>{{val.estimated_diameter.kilometers.estimated_diameter_max}}</td>
                    </tr>
                    <tr>
                        <td>Magnitude</td>
                        <td>{{val.absolute_magnitude_h}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    import Rhombus from './Rhombus.vue';
    export default {
        name: 'asteroids',
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
