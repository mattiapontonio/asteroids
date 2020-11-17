<template>
    <article>
        <h2>Astronomy Picture of the Day</h2>
        <error v-if="error" v-bind="error"></error>
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
    import Error from './Error.vue';
    export default {
        name: 'apod',
        components: {
            Error
        },
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
        async fetch() {
            this.loading = true
            this.error = undefined
            fetch('/planetary/apod')
            .then(response => response.json())
            .then(data => Object.assign(this, data))
            .catch(error => this.error = error)
            .finally(() => this.loading = false);
        }
    }

</script>
