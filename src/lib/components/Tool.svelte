<script>
    import { onMount } from "svelte";

    export let tool
    let visible = false

    let color = null

    function randomColor(){
        const r = Math.floor(Math.random() * 256)
        const g = Math.floor(Math.random() * 256)
        const b = Math.floor(Math.random() * 256)
        color = `rgb(${r},${g},${b})`
    }
    randomColor()

    onMount(() => {
        visible = !visible
    })

</script>

{#if !visible}
    <style>.tool{opacity:0;}</style>
{/if}   
<a href="{tool.path}" class="tool" style="background-color: {color};">
    {tool.name}
</a>

<style>
    .tool{
        margin: 0.4rem;
        transition-duration: 0.4s;
        opacity: 1;
        padding: 2rem;
        font-size: 2rem;
        color: var(--white);
        text-decoration: none;
        border: 2px transparent solid;
    }
    .tool:hover{
        background-color: transparent !important;
        border: 2px var(--white) solid;
    }
</style>