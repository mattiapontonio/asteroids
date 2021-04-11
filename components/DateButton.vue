<template>
    <button 
        v-on:click="onclick"
        :data-date="date"
    >{{new Intl.DateTimeFormat('default', { weekday: 'long' }).format(date)}}</button>
</template>
<script>
    export default {
        name: 'date-button',
        props: {
            date: {
                type: Date
            }
        },
        computed: {
            url: function() {
                return new URL(window.location);
            },
            checked: function () {
                const url = new URL(location);
                return url.searchParams.get('date') == this.date;
            }
        },
        methods: {
            onclick() {
                const url = new URL(location);
                url.searchParams.set('date', date);
                history.pushState({
                    date
                }, '', url);
            }
        }
    }

</script>
