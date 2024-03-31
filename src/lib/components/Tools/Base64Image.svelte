<script>

    import { load } from '$lib/client/sendData'
    import Copy from '../Copy.svelte';
    
    export let tool

    const config = {
        "name":"data",
        "placeholder":"Image to base64",
        "id":"dataEncode",
        "target":"dataImage",
        "targetRaw":"dataImageRaw",
        "submit":"Encode image to base64",
        "path":tool.back+"/image"
    }

    async function loadData(data){
        const response = await load(data)
        if(response.data){
            document.getElementById(config.target).src = response.data
            document.getElementById(config.targetRaw).value = response.data
        }
    }


</script>

<svelte:head>
	<title>ToolsBox 4 DEV | {tool.name}</title>
	<meta name="description" content="Encode a file to base64">
</svelte:head>

<h1>{tool.name}</h1>

<div class="flex">
    <form method="POST"
    data-path={config.path}
    data-target={config.target}
    on:submit|preventDefault={loadData}>
        <input type="file" id={config.id} 
        placeholder={config.placeholder} 
        name={config.name} />
        <button type="submit">{config.submit}</button>
    </form>
    <Copy target={"#"+config.targetRaw} />
    <textarea id={config.targetRaw} type="text" value=""></textarea>
    <img id={config.target} src="https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg" alt="Base64 Image" />
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
