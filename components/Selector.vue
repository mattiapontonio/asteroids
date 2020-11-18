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
                const datetimes = new Array()
                const date = new Date(this.datetime)
                const day = date.getDay()
                const day_of_the_month = date.getDate()
                for (let i = 0; i < 7; i++) {
                    const date = new Date();
                    const day_of_the_month_2 = day_of_the_month + (i - day)
                    date.setDate(day_of_the_month_2)
                    const datetime = date.toISOString()
                    datetimes.push(datetime);
                }
                return datetimes
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
