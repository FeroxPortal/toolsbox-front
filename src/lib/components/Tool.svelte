<script>
    import { onMount } from "svelte";

    export let tool
    let visible = false

    let bg
    let color = "rgb(255,255,255)"

    function randomColor(){
        const r = Math.floor(Math.random() * 170)
        const g = Math.floor(Math.random() * 170)
        const b = Math.floor(Math.random() * 170)
        bg = `rgb(${r},${g},${b})`
    }
    randomColor()

    onMount(() => {
        visible = !visible
    })

</script>

{#if !visible}
    <style>a{opacity:0;}</style>
{/if}   
<a href="{tool.path}" style="--bg:{bg};--color:{color}">
    {tool.name}
</a>

<style>
    a{
        margin: 0.4rem;
        transition-duration: 0.4s;
        opacity: 1;
        color: var(--color);
        text-decoration: none;
        border: 3px transparent solid;
        background-color: var(--bg);
        box-shadow: 0 0 10px 1px var(--dark);
    }
    @media (min-width: 768px) {
        a{
            padding: 1.2rem;
            font-size: 1.5rem;
        }
        a:hover{
            transform: scale(1.05);
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
        color: var(--bg);
        border: 3px var(--bg) solid;
    }
</style>