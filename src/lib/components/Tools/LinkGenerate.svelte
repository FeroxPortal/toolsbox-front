<script>

    import { load, toast } from '$lib/client/sendData'
    import Submit from '../Submit.svelte';
    
    export let tool

    let path = tool.back+"/generate"

    let state = false
    let href
    let password = ""

    async function fetchLoad(data){
        href = undefined
        state = true
        const response = await load(data)
        state = false
        if(response["status"] === 200){
            href = tool.back+"/"+response["data"]["idCrypt"]
            if(password !== ''){
                href += "?password="+password
            }
            toast("Your link has been generated", "bg-success")
        }
        state = false
    }


</script>

<svelte:head>
	<title>ToolsBox 4 DEV | {tool.name}</title>
	<meta name="description" content="Encode and decode data to JSON">
</svelte:head>

<h1>{tool.name}</h1>

<div class="flex">
    <form method="POST" class="flex-inline"
    data-path={path}
    on:submit|preventDefault={fetchLoad}>
        <input type="text" 
        name="password" 
        id="password" 
        bind:value={password} 
        placeholder="Lock behind a password" />
        <input type="datetime-local" 
        name="dateTo" 
        id="dateTo" />
        <textarea id="data" 
                name="data" 
                placeholder="Insert the data you wish to share here"></textarea>
        <Submit bind:state title="Save request" />
    </form>
</div>
{#if href !== undefined}
    <a {href} target="_blank">{href}</a>
{/if}

<style>
    a{
        padding: 1rem;
        background: #fff;
        color: #000;
        font-size: 0.8rem;
        word-break: break-all;
        word-wrap: break-word;
        z-index: 1;
        position: relative;
        display: block;
        max-width: 80%;
        margin: auto;
    }
</style>