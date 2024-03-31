<script>

    import { load } from '$lib/client/sendData'
    
    export let tool

    const config = {
        "target":"dataResult",
        "submit":"Verify my password",
        "path":tool.back+"/verify"
    }

    let result = {
        class: "",
        message: ""
    }

    async function fetchData(data)
    {
        const resultFetch = await load(data)
        if(resultFetch.data.success === true){
            result.class = "success"
        } else{
            result.class = "error"
        }
        result.message = resultFetch.data.message
        console.log("Result FROM func", resultFetch)
    }


</script>


<svelte:head>
	<title>ToolsBox 4 DEV | {tool.name}</title>
	<meta name="description" content="Verify a string with its hash version">
</svelte:head>

<h1>{tool.name}</h1>

<div class="tool">
    <form method="POST"
    data-path={config.path}
    data-target={config.target}
    on:submit|preventDefault={fetchData}>
        <input type="text" name="check"
        id="check" placeholder="Your password" required />
        <input type="text" name="data"
        id="data" placeholder="Your Hash" required />
        <button type="submit">{config.submit}</button>
    </form>
    <div id={config.target} class="{result.class}">{result.message}</div>
</div>


<style>
    .tool{
        width: 33%;
        margin: auto;
        flex-direction: column;
    }
    @media (max-width: 768px) {
        .tool{
            width: 100%;
        }
    }
    input, button, form{
        display: block;
        width: -webkit-fill-available;
    }
    button{
        margin-bottom: 1rem;
    }
</style>