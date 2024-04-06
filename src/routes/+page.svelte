<script>
    import Logo from '../lib/components/Logo.svelte';
    import Tool from '../lib/components/Tool.svelte';

    export let data
</script>

<svelte:head>
	<title>ToolsBox 4 DEV</title>
	<meta name="description" content="ToolsBox 4 DEV">
</svelte:head>

<h1>
    <Logo width=450 />
</h1>   

<div id="tools">
    {#each data.tools as tool}
        <Tool {tool} />
    {/each}
</div>  

<style>
    #tools{
        padding-top: 2rem;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    @media (min-width: 768px) {
        #tools{
            text-align: center;
            margin: auto;
            max-width: 80%;
        }
    }
</style>