<template>
    <transition name="slide-fade">
        <div
            v-if="show"
            class="tooltip"
        >
            <div>Name: {{ data.name }}</div>
            <div>Diameter: {{ data.diameter }} km</div>
            <div>Magnitude: {{ data.magnitude }} h</div>
            <div>Distance: {{ data.distance }} au</div>
            <div>Velocity: {{ data.velocity_kilometers_per_hour }} km/h</div>
        </div>
    </transition>
</template>
<script>
    export default {
        name: 'tooltip',
        props: ['show', 'data']
    }

</script>
