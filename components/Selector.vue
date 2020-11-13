<template>
    <div style="display:flex;">
        <radio
            v-for="(val, i) in days"
            v-bind:id="'radio-'+i"
            v-bind:key="'radio-'+i"
            v-bind:date="val.date"
            v-bind:label="val.label"
            v-bind:onchangedate="onchangedate"
            v-bind:checked="val.date == date"
        />
    </div>
</template>
<script>
import Radio from './Radio';
    export default {
        name: 'selector',
        components: {
            Radio
        },
        props: {
            date: {
                type: Date,
                default: new Date()
            },
            onchangedate: {
                type: Function
            }
        },
        computed: {
            days: function () {
                const days = new Array();
                const label = date => ['sun', 'mon', 'tue', 'wed', 'thur', 'fri', 'sat'][date.getDay()]
                const date = this.date;
                for (let i = 0; i < 7; i++) {
                    const d = new Date();
                    d.setDate(date.getDate() + (i - date.getDay()));
                    days.push({
                        date: date.getDate() == d.getDate() ? date : d,
                        label: label(d)
                    });
                }
                return days
            }
        },
    }

</script>
