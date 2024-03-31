<script>
    import Tool from '../lib/components/Tool.svelte';

    export let data
</script>

<h1>ToolsBox 4 DEV</h1>
<div id="tools">
    {#each data.tools as tool}
        <Tool {tool} />
    {/each}
</div>  

<style>
    #tools{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
</style>