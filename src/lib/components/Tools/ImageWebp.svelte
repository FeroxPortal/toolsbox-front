<script>

    import { load } from '$lib/client/sendData'
    import Copy from '../Copy.svelte';
    
    export let tool

    const config = {
        "name":"data",
        "placeholder":"Image to Webp",
        "id":"dataEncode",
        "target":"dataImage",
        "targetRaw":"dataImageRaw",
        "submit":"Encode image to Webp",
        "path":tool.back
    }


    let result

    async function loadData(data){
        const response = await load(data)
        if(response.data){
            result = response.data
        }
    }


</script>

<svelte:head>
	<title>ToolsBox 4 DEV | {tool.name}</title>
	<meta name="description" content="Encode a file to Webp format">
</svelte:head>

<h1>{tool.name}</h1>

<div class="flex">
    <form method="POST"
    data-path={config.path}
    on:submit|preventDefault={loadData}>
        <input type="file" id={config.id} 
        placeholder={config.placeholder} 
        name={config.name} />
        <button type="submit">{config.submit}</button>
    </form>
    {#if result !== undefined}
        <Copy target={"#"+config.targetRaw} />
        <textarea id={config.targetRaw}>{result}</textarea>
        <img id={config.target} src="{result}" alt="Base64 Image" />
    {/if}
</div>

<style>
    img{
        width: 100%;
    }
    input{
        color: #fff;
        margin-bottom: 1rem;
    }
    .flex{
        width: 60%;
        margin: auto;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    @media (max-width: 768px) {
        button{
            display: block;
            width: 100%;
        }
        .flex{
            width: 100%;
        }
    }
</style>
