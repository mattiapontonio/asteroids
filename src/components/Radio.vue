<template>
    <div>
        <input
            type="radio"
            v-bind:id="id"
            name="date"
            class="radio"
            v-bind:checked="checked"
            v-bind:value="date | formatted"
            v-on:change="onchangedate(date)"
        />
        <label
            v-bind:for="id"
            style="
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    line-height: 1;
                    vertical-align: middle;
                    margin-right:8px;
                "
        >{{label}}</label>
    </div>
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
