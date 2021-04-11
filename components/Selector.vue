<template>
    <div class="selector">
        <date-button
            v-for="(datetime, i) in datetimes"
            v-bind:id="'radio-'+i"
            v-bind:key="'radio-'+i"
            v-bind:datetime="datetime"
        />
    </div>
</template>
<script>
    import DateButton from './DateButton';
    export default {
        name: 'selector',
        components: {
            DateButton
        },
        props: [
        "date",
        "start_date",
        "end_date",
        "api_key"
        ],
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
                    datetimes.push(date);
                }
                return datetimes
            }
        },
    }

</script>
<style>
</style>
