<template>
    <div
        v-bind:style="{
                        width: dimension.outer,
                        height: dimension.outer
                    }"
        style="
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-shrink: 0;
                    "
    >
        <div
            v-bind:style="{
                        width: dimension.inner,
                        height: dimension.inner
                    }"
            style="
                        border: 1px solid white;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        transform: rotate(-45deg);
                        box-sizing: border-box;
                        flex-shrink: 0;
                    "
        >
            <div
                style="
                            width:0px;
                            height:0px;
                            background-color: white;
                            display:flex;
                            justify-content:center;
                            align-items:center;
                        "
                v-bind:style="{ 
                            width: dimension.innerScaled,
                            height: dimension.innerScaled
                        }"
            >
                <div style="
                        width:4px;
                        height:4px; 
                        background-color: black;
                        margin: auto;
                        position: absolute;
                    "></div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'rhombus',
        props: {
            value: {
                type: Number,
                default: () => new Number()
            }
        },
        computed: {
            dimension: function () {
                const unit = 'px';
                const outer = 80;
                const hypotenuse = outer;
                const cathetus = Math.sqrt(Math.pow(hypotenuse, 2) / 2);
                return {
                    outer: hypotenuse + unit,
                    inner: cathetus + unit,
                    innerScaled: this.value * cathetus + unit,
                }
            }
        }
    }

</script>
