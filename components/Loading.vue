<template>
    <div class='loading' aria-live="polite" role="status">
        <loader></loader>
        <span>Loading...</span>
    </div>
</template>
<script>
    import Loader from './Loader.vue'
    export default {
        name: 'loading',
        components: {
            Loader
        }
    }
</script>