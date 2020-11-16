<template>
    <div class="scatter-plot">
        <section v-if="errored" class="errored">
            <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
        </section>
        <div v-else-if="loading" class="loading" style="position:absolute; width:100%; height:100%;"></div>
        <section
            v-else
            class="container"
        >
            <asteroid
                v-for="(item, i) in items"
                v-bind:key="i"
                v-bind:id="item.id"
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
    import get from '../plugins/get.js';
    export default {
        name: 'scatter-plot',
        components: {
            Asteroid
        },
        data: function () {
            return {
                data: {
                    near_earth_objects: {}
                }
            }
        },
        methods: {
            get
        },
        computed: {
            url: function() {
                const url = new URL(window.location.origin);
                url.pathname = 'neo/rest/v1/feed';
                url.searchParams.set('start_date', this.start_date);
                url.searchParams.set('end_date', this.end_date);
                return url;
            },
            date: function () {
                const url = new URL(location);
                return url.searchParams.get('date')
            },
            start_date: function () {
                const url = new URL(location);
                return url.searchParams.get('start_date');
            },
            end_date: function () {
                const url = new URL(location);
                return url.searchParams.get('end_date');
            },
            items: function() {
                return this.data.near_earth_objects[this.date]
            }
        },
        mounted() {
            this.get();
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
