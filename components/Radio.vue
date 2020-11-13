<template>
    <button 
        v-bind:checked="checked"
        v-on:click="onchangedate(date)"
    >{{label}}</button>
</template>
<script>
    export default {
        name: 'radio',
        props: {
            date: {
                type: Date,
                default: new Date()
            },
            id: {
                type: String
            },
            label: {
                type: String
            },
            checked: {
                type: Boolean
            },
            onchangedate: {
                type: Function
            }
        },
        data: function () {
            return {
                count: 0,
                selctedIndex: 0
            }
        }
    }

</script>
