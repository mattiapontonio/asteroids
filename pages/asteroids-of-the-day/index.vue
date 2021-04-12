<template>
    <div>
        <div v-if="response.ok">
            <asteroids-of-the-day
                v-bind:date="date"
                v-bind:items="items"
            />
        </div>
        <div v-else>
            <div>{{response.status}}</div>
            <div>{{response.statusText}}</div>
            <form>
                <label for="api_key">api_key</label>
                <input 
                    type="text" 
                    id="api_key" 
                    name="api_key"
                    value="DEMO_KEY"
                    required>
                <label for="start_date">start_date</label>
                <input 
                    id="start_date" 
                    type="date"
                    name="start_date" 
                    value="2021-04-25"
                    required>
                <label for="start_date">start_date</label>
                <input 
                    id="end_date" 
                    type="date"
                    name="end_date" 
                    value="2021-04-25"
                    required>
                <button type="submit" value="Submit">Submit</button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            response: {},
        }
    },
    async asyncData(context) {
        return { 
            date: context.query.date,
            apiKey: context.query.api_key
        }
    }
}
</script>