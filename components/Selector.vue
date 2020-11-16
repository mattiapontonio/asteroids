<template>
    <div class="selector">
        <radio
            v-for="(v, i) in dates"
            v-bind:id="'radio-'+i"
            v-bind:key="'radio-'+i"
            v-bind:date="v"
        />
    </div>
</template>
<script>
    import Vue from 'vue';
    import Radio from './Radio';
  import format from '../formatDate.js';
    export default {
        name: 'selector',
        components: {
            Radio
        },
        computed: {
            dates: function () {
                const days = new Array();
                const label = date => ['sun', 'mon', 'tue', 'wed', 'thur', 'fri', 'sat'][date.getDay()]
                const date = new Date(this.date);
                for (let i = 0; i < 7; i++) {
                    const d = new Date();
                    d.setDate(date.getDate() + (i - date.getDay()));
                    days.push(format(date.getDate() == d.getDate() ? date : d));
                }
                return days
            },
            start_date: function () {
                const url = new URL(location);
                return url.searchParams.get('start_date');
            },
            end_date: function () {
                const url = new URL(location);
                return url.searchParams.get('end_date');
            },
            date: function () {
                const url = new URL(location);
                return url.searchParams.get('date') || format(new Date());
            }
        },
    }

</script>
<style>

    .selector {
        display: flex;
        flex-wrap: nowrap;
        max-width:100%;
        overflow-x:scroll;
    }
</style>
