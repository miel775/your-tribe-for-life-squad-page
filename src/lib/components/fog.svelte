<script>
    export let fill = "lightgrey";
    export let className = "fog";
</script>

<div class={className}></div>

<style>
    .fog {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 200px;
        background: linear-gradient(180deg, rgba(13, 155, 129, 0) 0%, rgba(25, 109, 105, 0.3) 50%, rgba(73, 150, 66, 0.6) 90%);
        pointer-events: none;
        z-index: 10;
    }
</style>