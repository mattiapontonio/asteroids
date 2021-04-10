<template>
    <article>
        <h2>Astronomy Picture of the Day</h2>
        <div v-if="errored" class="errored">{{error}}</div>
        <div v-else>
            <div v-if="loading" class="loading"></div>
            <div v-else>
                <p>{{date|DateTimeFormat}}</p>
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
    import axios from 'axios';
    export default {
        name: 'apod',
        data: function () {
            return {
                "date": undefined,
                "explanation": undefined,
                "hdurl": undefined,
                "media_type": undefined,
                "service_version": undefined,
                "title": undefined,
                "url": undefined,
                loading: false,
                msg: ""
            }
        },
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
        }
    }

</script>
