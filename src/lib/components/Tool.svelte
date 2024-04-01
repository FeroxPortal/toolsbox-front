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
    <style>a{opacity:0;}</style>
{/if}   
<a href="{tool.path}" style="--color:{color};">
    {tool.name}
</a>

<style>
    a{
        margin: 0.4rem;
        transition-duration: 0.4s;
        opacity: 1;
        color: var(--white);
        text-decoration: none;
        border: 3px transparent solid;
        background-color: var(--color);
        box-shadow: 0 0 10px 3px var(--dark);
    }
    @media (min-width: 768px) {
        a{
            padding: 1.5rem;
            font-size: 1.5rem;
        }
    }
    @media (max-width: 767px) {
        a{
            width: 100%;
            padding: 1rem;
            font-size: 1rem;
        }
    }
    a:hover{
        background-color: var(--dark) !important;
        color: var(--color);
        border: 3px var(--color) solid;
        transform: scale(1.05);
    }
</style>