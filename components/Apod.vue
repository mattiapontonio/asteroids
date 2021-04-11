<template>
    <article>
        <loader v-if="loading" class="loading"></loader>
        <h2>Astronomy Picture of the Day</h2>
        <div v-if="errored" class="errored">{{error}}</div>
        <div v-else>
            <div>
                <p>{{date}}</p>
                <picture>
                    <source
                        media="(min-width:1680px)"
                        v-bind:srcset="hdurl"
                    >
                    <source
                        media="(min-width:465px)"
                        v-bind:srcset="url"
                    >
                    <img
                        loading="lazy"
                        v-bind:src="url"
                        v-bind:alt="title"
                        v-bind:title="title"
                    >
                    <figcaption>{{ explanation }}</figcaption>
                </picture>
            </div>
        </div>
    </article>
</template>
<script>
    import Loader from './Loader.vue';
    export default {
        name: 'apod',
        components:{
            Loader
        },
        data: function () {
            const date = new Date();
            return {
                url: '/api/planetary/apod',
                date,
                response: {},
                loading: false,
                error: false
            }
        },
        mounted() {
            this.fetch();
        },
        methods: {
            fetch() {
                this.loading = true;
                this.errored = false;
                fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_key.value}`)
                .then(response => {
                    this.response = response;
                    return response.json();
                })
                .then(data => {
                    Object.assign(this, data);
                    this.loading = false;
                })
                .catch(error => {
                    this.errored = true;
                    this.error = error;
                });
            }
        }
    }

</script>
