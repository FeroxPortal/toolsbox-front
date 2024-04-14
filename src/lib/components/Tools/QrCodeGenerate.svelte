<script>

    import { fetchAPI } from '$lib/client/sendData'
    import Copy from '../Copy.svelte';
    
    export let tool

    const config = {
        "target":"dataResult",
        "targetRaw":"dataResultWrapper",
        "submit":"Generate my QRCODE",
        "path":tool.back
    }

    let result

    let color = "000000"
    let bg = "ffffff"

    let values = {
        "color":"color="+color,
        "bg":"bg="+bg
    }

    async function loadData(){
        let fixedPath = "?return=base64&"
        let path = tool.back+fixedPath
        for(let key in values){
            path += values[key]+"&"
        }
        path = path.slice(0,-1)
        console.log(path)
        const response = await fetchAPI(path)
        if(response.data){
            console.log(response)
            result = {
                value: response.data,
                path: response.path.replace(fixedPath,"?"),
            }
        }
    }

    function updateValue(data){
        let item = data.currentTarget
        let value = item.value
        value = value.replace("#","")
        values[item.id] = item.id+"="+value
        console.log(values)
    }

</script>


<svelte:head>
	<title>ToolsBox 4 DEV | {tool.name}</title>
	<meta name="description" content="Generate a QRCODE">
</svelte:head>

<h1>{tool.name}</h1>

<div class="flex">
    <form method="POST"
    data-path={config.path}
    data-target={config.target}
    on:submit|preventDefault={loadData}>
        <div class="input-group">
            <label for="data">URL to append to the QR</label>
            <input id="data" name="data" type="text" 
            on:keyup={updateValue}
            placeholder="example: https://www.googe.com" />
        </div>
        <div class="input-group">
            <label for="color">Main color</label>
            <input id="color" name="color" type="color"
            on:change={updateValue}
            placeholder="Main color" value="#{color}" />
        </div>
        <div class="input-group">
            <label for="bg">Background</label>
            <input id="bg" name="bg" type="color" 
            on:change={updateValue}
            placeholder="Background color" value="#{bg}" />
        </div>
        <button type="submit">{config.submit}</button>
    </form>
    {#if result !== undefined}
        <a href="{result.path}" target="_blank">
            {result.path}
        </a>
        <img id={config.target} src="{result.value}" alt="Base64 Image" />
        <Copy target={"#"+config.targetRaw} />
        <textarea id={config.targetRaw}>{result.value}</textarea>
    {/if}
</div>


<style>
    img{
        width: 100%;
    }
    .input-group{
        margin-bottom: 1rem;
    }
    a{
        font-size: 0.8rem;
        margin: 2rem 0 1rem 0;
        position: relative;
        display: block;
        word-break: break-all;
        text-decoration: none;
        color: var(--white);
    }
    .input-group label{
        font-size: 0.8rem;
        padding: 0.5rem 0;
        position: relative;
        display: block;
        color: var(--white);
    }
    input{
        display: block;
        width: 100%;
    }
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