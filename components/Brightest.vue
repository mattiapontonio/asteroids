<template>
    
</template>
<script>
    import Vue from 'vue';
    import Loader from './Loader.vue';
    import Rhombus from './Rhombus.vue';
    export default {
        name: 'brightest',
        components: {
            Loader,
            Rhombus
        },
        data: function () {
            return {
                data: new Array(),
                items: new Array(),
                loading: new Boolean(),
                error: new Boolean(),
                near_earth_objects: undefined
            }
        },
        methods: {
            get() {
                const url = new URL("https://api.nasa.gov");
                url.pathname = 'neo/rest/v1/feed';
                url.searchParams.set('start_date', this.$route.query.start_date);
                url.searchParams.set('end_date', this.$route.query.end_date);
                url.searchParams.set('api_key', this.$route.query.api_key);
                this.loading = true;
        this.error=undefined;
                fetch(url)
                .then(response => {
                    this.response = response;
                    this.loading = false;
                    if(response.status==200){
                        response.json().then(data => {
                            Object.assign(this, data);
                            this.items = data.near_earth_objects;
                        });
                    } else if(response.status==400) {
                        response.json().then(data => {
                            this.error = {
                                message: data.error_message
                            };
                        })
                    } else if(response.status==403) {
                        response.json().then(data => {
                            Object.assign(this, data);
                        })
                    }
                })
                .catch(error => {
                    this.error = error;
                })
                .finally(() => this.loading = false);
            }
        },
        mounted() {
            this.get()
        }
    }

</script>
<style>

</style>
