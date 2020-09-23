<template>
    <div class="scatter-plot">
        <section v-if="errored">
            <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
        </section>
        <section
            v-else
            class="container"
        >
            <div v-if="loading">Loading...</div>
            <asteroid
                v-else
                v-for="(item, i) in items"
                v-bind:data="{
                    ...item
                }"
                v-bind:key="i"
                style="position: absolute;"
                v-bind:x="item.x"
                v-bind:y="item.y"
                v-bind:d="item.d"
            />
        </section>
    </div>
</template>
<script>
    import Asteroid from './Asteroid.vue';
  import Vue from 'vue';
    export default {
        name: 'scatter-plot',
        components: {
            Asteroid
        },
        computed: {
            items: function () {
                const x = 'velocity_kilometers_per_second';
                const y = 'distance';
                const d = 'diameter';
                const scale = Vue.filter('scale');
                const min = Vue.filter('min');
                const max = Vue.filter('max');
                const items = this.asteroids;
                return items.map((e, i, a) => {
                    const elements = a.map(e => e[x]);
                    e.x = scale(e[x], min(elements), max(elements));
                    return e;
                }).map((e, i, a) => {
                    const elements = a.map(e => e[y]);
                    e.y = scale(e[y], min(elements), max(elements));
                    return e;
                }).map((e, i, a) => {
                    const elements = a.map(e => e[d]);
                    e.d = scale(e[d], min(elements), max(elements));
                    return e;
                });
            }
        },
        props: {
            date: {
                type: Date,
                default: new Date()
            },
            asteroids: {
                type: Array,
                default: function () {
                    return new Array();
                }
            },
            loading: {
                type: Boolean,
                default: function () {
                    return false
                }
            },
            errored: {
                type: Boolean,
                default: function () {
                    return false
                }
            }
        }
    }

</script>
