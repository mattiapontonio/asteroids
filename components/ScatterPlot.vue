<template>
    <svg
        class="scatter-plot"
        viewBox="0 0 200 100"
        preserveAspectRatio="xMidYMid meet" 
    >
        <g>
            <line x1="0" y1="0" x2="0" y2="100%" stroke-width=".5" />
            <line x1="0" y1="0" x2="100%" y2="0" stroke-width=".5" />
            <line v-for="i in 10" :key="i" :x1="i*10+'%'" y1="0" :x2="i*10+'%'" y2="100%" />
            <line v-for="i in 10" :key="i" x1="0" :y1="i*10+'%'" x2="100%" :y2="i*10+'%'" />
        </g>
        <g v-for="(item, i) in items" v-bind:key="i">
            <circle
                :id="'circle'+i"
                :cx="(()=>{
                    const g = items.map(z=>z.close_approach_data[0].relative_velocity.kilometers_per_second);
                    return `${100*(g[i]-Math.min(...g))/(Math.max(...g)-Math.min(...g))}%`;
                })()"
                :cy="(()=>{
                    const g = items.map(z=>z.close_approach_data[0].miss_distance.kilometers);
                    return `${100*(g[i]-Math.min(...g))/(Math.max(...g)-Math.min(...g))}%`;
                })()"
                :r="10"
                class="bubble"
            />
            <use :href="'#circle'+i" r="1" />
        </g>
    </svg>
</template>
<script>
    export default {
        name: 'scatter-plot',
        props: {
            items: {
                type: Array
            }
        }
    }
</script>
<style>
</style>
