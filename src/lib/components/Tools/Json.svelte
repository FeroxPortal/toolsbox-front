<script>

    import { load } from '$lib/client/sendData'
    import Copy from '../Copy.svelte';
    
    export let tool


    const config = [
        {
            "name":"data",
            "placeholder":"Data to encode",
            "id":"dataEncode",
            "target":"dataDecode",
            "submit":"Encode data",
            "path":tool.back+"/encode"
        },{
            "copy":true,
            "name":"data",
            "placeholder":"Data to decode",
            "id":"dataDecode",
            "target":"dataEncode",
            "submit":"Decode data",
            "path":tool.back+"/decode"
        }
    ]
    console.log(config)

</script>

<svelte:head>
	<title>ToolsBox 4 DEV | {tool.name}</title>
	<meta name="description" content="Encode and decode data to JSON">
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