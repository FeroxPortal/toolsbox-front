<script>

    import { load, toast } from '$lib/client/sendData'
    import Copy from '$lib/components/Copy.svelte'
    import Submit from '$lib/components/Submit.svelte';
    import { onMount } from 'svelte';
    
    export let tool

    let path = tool.back+"/generate"

    let state = false
    let dateRequest = false
    let href
    let password = ""

    async function fetchLoad(data){
        href = undefined
        state = true
        const response = await load(data)
        state = false
        if(response["status"] === 200){
            href = domain+"/"+tool.back+"/"+response["data"]["idCrypt"]
            toast("Your link has been generated", "bg-success")
        }
        state = false
    }

    let minDate = new Date()
    minDate.setHours(minDate.getHours() + 3)
    minDate = minDate.toISOString().substring(0,16)

    let domain
    onMount(() => {
        domain = window.location.origin
    })


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
    <div class="alert">By default, all requests are available for an hour</div>
        <input type="text" 
        name="password" 
        id="password" 
        bind:value={password} 
        placeholder="Lock behind a password" />
        {#if dateRequest}
            <input type="datetime-local" 
            min={minDate}
            value={minDate}
            name="dateTo" 
            id="dateTo" />
            <button type="button" class="btn-default" on:click={() => dateRequest = !dateRequest}>
                Cancel
            </button>
        {:else}
            <button type="button" class="btn-default" on:click={() => dateRequest = !dateRequest}>
                Set a custom expiration date
            </button>
        {/if}
        
        <textarea id="data" 
                name="data" 
                placeholder="Insert the data you wish to share here"></textarea>
        <Submit bind:state title="Save request" />
    </form>
</div>
{#if href !== undefined}
    <div class="full">
        <textarea id="passwordRequest" hidden>{href}</textarea>
        <a {href} target="_blank">{href}</a>
        <Copy target="#passwordRequest" />
    </div>
{/if}

<style>
    .full{
        display: flex;
        flex-direction: column;
        max-width: 35%;
        margin: auto;
    }
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
        margin: auto;
    }
    form .btn-default{
        background-color: var(--info);
        color: var(--white);
        border: 3px var(--info) solid;
    }

    form .btn-default:hover{
        background-color: var(--dark);
        color: var(--info);
        border: 3px var(--info) solid;
    }

</style>