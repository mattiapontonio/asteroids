<template>
    <div class="scatter-plot">
        <section v-if="errored" class="errored">
            <p>{{error}}</p>
        </section>
        <div v-else-if="loading" class="loading" style="position:absolute; width:100%; height:100%;"></div>
        <section
            v-else
            class="container"
        >
            <asteroid
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
            <span class="max" coordinate="x">{{maxX}}</span>
            <span class="min" coordinate="x">{{minX}}</span>
            <span class="max" coordinate="y">{{maxY}}</span>
            <span class="min" coordinate="y">{{minY}}</span>
        </section>
    </div>
</template>
<script>
    import Asteroid from './Asteroid.vue';
  import Vue from 'vue';
  const x = 'velocity_kilometers_per_second';
  const y = 'distance';
    export default {
        name: 'scatter-plot',
        components: {
            Asteroid
        },
        computed: {
            maxX: function () {
                return Vue.filter('max')(this.asteroids.map(e => e[x]))
            },
            minX: function () {
                return Vue.filter('min')(this.asteroids.map(e => e[x]))
            },
            maxY: function () {
                return Vue.filter('max')(this.asteroids.map(e => e[y]))
            },
            minY: function () {
                return Vue.filter('min')(this.asteroids.map(e => e[y]))
            },
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
            },
            error: {
                type: String
            }
        }
    }

</script>
<style>
.loading {
    background: rgba(10,30,26,0.5);
	background-size: 400% 400%;
    justify-self: stretch;
    align-self: stretch;
    flex-grow: 1;
    left:0;
    top:0;
    min-height: 128px;
    align-items: center;
    justify-content: center;
    display: flex;
}
.loading:before{
    content: 'Loading...';
}
</style>
