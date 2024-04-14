<script>

    import { load } from '$lib/client/sendData'
    import Copy from '../Copy.svelte';
    
    export let tool

    const config = {
        "name":"data",
        "placeholder":"SVG content to image",
        "id":"dataEncode",
        "target":"dataImage",
        "targetRaw":"dataImageRaw",
        "submit":"Transform",
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
	<meta name="description" content="Transform your raw svg content to a file">
</svelte:head>

<h1>{tool.name}</h1>

<div class="flex">
    <form method="POST"
    data-path={config.path}
    on:submit|preventDefault={loadData}>
        <textarea id={config.id} 
        placeholder={config.placeholder} 
        name={config.name}></textarea>
        <button type="submit">{config.submit}</button>
    </form>
    {#if result}
        <Copy target={"#"+config.targetRaw} />
        <textarea id={config.targetRaw}>{result}</textarea>
        <img id={config.target} src="{result}" alt="Base64 Image" />
    {/if}
</div>

<style>
    img{
        width: 100%;
    }
    button{
        width: 100%;
    }
    .flex{
        width: 33%;
        margin: auto;
        flex-direction: column;
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
