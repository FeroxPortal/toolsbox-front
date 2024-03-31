<script>

    import { load } from '$lib/client/sendData'
    import Copy from '../Copy.svelte';
    
    export let tool

    const config = {
        "target":"dataResult",
        "submit":"Generate a UUID",
        "path":tool.back
    }


</script>

<svelte:head>
	<title>ToolsBox 4 DEV | {tool.name}</title>
	<meta name="description" content="Generate a UUID">
</svelte:head>

<h1>{tool.name}</h1>

<div class="flex">
    <form method="POST"
    data-path={config.path}
    data-target={config.target}
    on:submit|preventDefault={load}>
        <button type="submit">{config.submit}</button>
    </form>
    <input id={config.target} name={config.target} />
    <Copy target={"#"+config.target} />
</div>

<style>
    .flex{
        width: 33%;
        margin: auto;
        flex-direction: column;
    }
    button{
        display: block;
        width: 100%;
    }
    @media (max-width: 768px) {
        .flex{
            width: 100%;
        }
    }
</style>