<script>

    import { load } from '$lib/client/sendData'
    import Copy from '../Copy.svelte';
    
    export let tool


    const config = {
        "name":"data",
        "placeholder":"ShA1",
        "id":"dataSha1",
        "target":"dataResult",
        "submit":"Create SHA1",
        "path":tool.back+"/encode"
    }

</script>


<svelte:head>
	<title>ToolsBox 4 DEV | {tool.name}</title>
	<meta name="description" content="Encode a string to a SHA1 hash">
</svelte:head>

<h1>{tool.name}</h1>

<div class="flex">
    <form method="POST" class="flex-inline"
    data-path={config.path}
    data-target={config.target}
    on:submit|preventDefault={load}>
        <textarea id={config.id} 
        placeholder={config.placeholder} 
        name={config.name}></textarea>
        <button type="submit">{config.submit}</button>
    </form>
    <div class="flex-inline">
        <textarea id={config.target} name={config.target}></textarea>
        <Copy target={"#"+config.target} />
    </div>
</div>