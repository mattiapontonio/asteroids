<template>
    <div class="bubble">
        <div class="point"></div>
    </div>
</template>
<script>
    export default {
        name: 'bubble'
    }
</script>
<style>
    .bubble {
        width: 100px;
        height: 100px;
        transform-origin: center center;
        transform: translateX(calc(attr(x) * 100%)) translateY(attr(y) * 100%) scale(attr(d))
    }
</style>