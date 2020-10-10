<template>
    <article>
        <h2>Astronomy Picture of the Day</h2>
        <div v-if="loading">Loading...</div>
        <div v-else>
            <p>
                {{(
                    date=>{ const d = new Date(date);
                    const f = (new Intl.DateTimeFormat('it-IT')).format(d);
                    return f;
                })(date)}}
            </p>
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
                loading: false
            }
        },
        methods: {
            get() {
                this.loading = true;
                this.errored = false;
                axios.get('/planetary/apod').then(response => Object.assign(this, response.data)).catch(error => {
                    console.log(error)
                    this.errored = true
                }).finally(() => this.loading = false);
            }
        },
        mounted() {
            this.get();
        }
    }

</script>
