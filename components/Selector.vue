<template>
    <div class="selector">
        <radio
            v-for="(datetime, i) in datetimes"
            v-bind:id="'radio-'+i"
            v-bind:key="'radio-'+i"
            v-bind:datetime="datetime"
        />
    </div>
</template>
<script>
    import Vue from 'vue';
    import Radio from './Radio';
  import format from '../formatDate.js';
  import datetime from '../plugins/computed/datetime.js';
  import start_date from '../plugins/computed/start_date.js';
  import end_date from '../plugins/computed/end_date.js';
    export default {
        name: 'selector',
        components: {
            Radio
        },
        computed: {
            datetimes: function () {
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
            datetime,
            start_date,
            end_date
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
