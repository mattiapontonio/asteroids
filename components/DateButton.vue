<template>
    <button v-on:click="onclick">{{innerText}}</button>
</template>
<script>
    export default {
        name: 'date-button',
        props: {
            datetime: {
                type: String,
                validator: function (value) {
                    return Date.parse(value)
                }
            }
        },
        computed: {
            url: function() {
                return new URL(window.location);
            },
            checked: function () {
                const url = new URL(location);
                return url.searchParams.get('date') == this.date;
            },
            innerText: function () {
                const options = { weekday: 'long' };
                const date = new Date(this.datetime);
                return new Intl.DateTimeFormat('default', options).format(date);
            }
        },
        methods: {
            onclick() {
                const url = new URL(location);
                const date = this.datetime.substring(0, 10);
                url.searchParams.set('date', date);
                history.pushState({
                    date
                }, '', url);
            }
        }
    }

</script>
