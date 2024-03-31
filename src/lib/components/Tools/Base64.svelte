<script>

    import { load } from '$lib/client/sendData'
    import Copy from '../Copy.svelte';
    
    export let tool

    const config = [
        {
            "name":"data",
            "placeholder":"Data to base64",
            "id":"dataEncode",
            "target":"dataDecode",
            "submit":"Encode data to base64",
            "path":tool.back+"/encode"
        },{
            "copy":true,
            "name":"data",
            "placeholder":"Base64 to data",
            "id":"dataDecode",
            "target":"dataEncode",
            "submit":"Decode base64 to data",
            "path":tool.back+"/decode"
        }
    ]

</script>

<svelte:head>
	<title>ToolsBox 4 DEV | {tool.name}</title>
	<meta name="description" content="Encode and decode data to base64">
</svelte:head>

<h1>{tool.name}</h1>

<div class="flex">
    {#each config as action}
        <form method="POST" class="flex-inline"
        data-path={action.path}
        data-target={action.target}
        on:submit|preventDefault={load}>
            <textarea id={action.id} 
            placeholder={action.placeholder} 
            name={action.name}></textarea>
            <button type="submit">{action.submit}</button>
            {#if action.copy}
                <Copy target={"#"+action.id} />
            {/if}
        </form>
    {/each}
</div>
