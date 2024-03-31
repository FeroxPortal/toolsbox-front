<script>

    import { load } from '$lib/client/sendData'
    import Copy from '../Copy.svelte';
    
    export let tool

    const config = {
        "name":"data",
        "placeholder":"Password Hash",
        "id":"dataPassHash",
        "target":"dataResult",
        "submit":"Hash my password",
        "path":tool.back+"/hash"
    }

</script>

<svelte:head>
	<title>ToolsBox 4 DEV | {tool.name}</title>
	<meta name="description" content="Hash a string">
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