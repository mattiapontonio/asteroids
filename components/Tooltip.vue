<template>
    <transition name="slide-fade">
        <div
            v-if="show"
            class="tooltip"
        >
            <table>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{{ data.name }}</td>
                    </tr>
                    <tr>
                        <td>Diameter</td>
                        <td>{{ data.diameter }} km</td>
                    </tr>
                    <tr>
                        <td>Magnitude</td>
                        <td>{{ data.magnitude }} h</td>
                    </tr>
                    <tr>
                        <td>Distance</td>
                        <td>{{ data.distance }} au</td>
                    </tr>
                    <tr>
                        <td>Velocity</td>
                        <td>{{ data.velocity_kilometers_per_hour }} km/h</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </transition>
</template>
<script>
    export default {
        name: 'tooltip',
        props: ['show', 'data'],
        methods: {
            get: function() {
                this.loading = true
                this.error = false
                fetch(this.url)
                .then(response => {
                    this.response = response
                    return response.json()
                })
                .then(data => {
                    console.dir(data)
                    this.data = data
                })
                .catch(error => {
                    console.dir(error)
                    this.errored = true
                    this.error = error
                })
                .finally(() => this.loading = false)
            }
        },
        computed: {
            url: function(){
                const url = new URL(window.location.origin);
                url.pathname = `neo/rest/v1/neo/${this.id}`;
                return url;
            },
        }
    }

</script>
