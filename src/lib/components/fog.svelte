<script>
    export let className = "fog";


</script>


<div class={className}></div>

<style>
    .fog {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 200px;
        background: linear-gradient(180deg, rgba(13, 155, 129, 0) 0%, rgba(255, 255, 255, 0.04) 50%, rgba(255, 255, 255, 0.2) 80%);
        pointer-events: none;
        z-index: 10;
    }
</style>
