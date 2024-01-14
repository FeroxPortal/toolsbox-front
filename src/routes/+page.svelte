<script>
    import Tool from '../lib/components/Tool.svelte';

    export let data
    console.log("Response client", data)
</script>

<h1>ToolsBox 4 DEV</h1>
<div id="tools">
    {#each data.tools as tool}
        <Tool {tool} />
    {/each}
</div>

<style>
    h1{
        text-align: center;
        color: var(--white);
        text-shadow: 1px 1px 5px var(--white);
    }
    #tools{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
</style>