<template>
    <article>
        <h2>Astronomy Picture of the Day</h2>
<<<<<<< HEAD
        <div>{{response.statusText}}</div>
        <button v-on:click="get">get</button>
        <div>
            <div>
                <p>{{datetime|DateTimeFormat}}</p>
=======
        <div v-if="errored" class="errored">{{error}}</div>
        <div v-else>
            <div v-if="loading" class="loading"></div>
            <div v-else>
                <p>{{date|DateTimeFormat}}</p>
>>>>>>> develop-3
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
    import get from '../plugins/methods/get.js';
    export default {
        name: 'apod',
        data: function () {
            const date = new Date().toISOString().substring(0, 10);
            return {
                url: '/api/planetary/apod',
                date,
                datetime: new Date(date).toISOString(),
                response: {},
                loading: false,
                error: false
            }
        },
<<<<<<< HEAD
        methods: {
            get
        },
        mounted() {
            this.get()
=======
        mounted() {
            this.fetch();
        },
        methods: {
            fetch() {
                this.loading = true;
                this.errored = false;
                axios
                .get(`https://api.nasa.gov/planetary/apod?api_key=${api_key.value}`)
                .then(({data}) => {
                    Object.assign(this, data);
                    this.loading = false;
                })
                .catch(error => {
                    this.errored = true;
                    this.error = error;
                });
            }
>>>>>>> develop-3
        }
    }

</script>
