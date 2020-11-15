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
                v-bind:x="item.x"
                v-bind:y="item.y"
                v-bind:d="item.d"
                v-bind:maxX="maxX"
                v-bind:minX="minX"
                v-bind:maxY="maxY"
                v-bind:minY="minY"
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
    export default {
        name: 'scatter-plot',
        components: {
            Asteroid
        },
        props: {
            date: {
                type: String,
                required: true
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
