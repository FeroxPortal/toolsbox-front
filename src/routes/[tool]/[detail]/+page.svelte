<script>
    
    import { fetchAPI, toast } from '$lib/client/sendData'
    import Copy from '$lib/components/Copy.svelte';

    import HomeLink from '$lib/components/HomeLink.svelte';
    import Submit from '$lib/components/Submit.svelte';

    export let data

    let value = ""
    let state = false

    let path

    let title = "Enter the password to access the request"

    let passwordRequest
    if(!data.passwordRequest){
        title = "Your password request"
        assignData(data)
    } else{
        path = "link/"+data.passwordRequest
    }

    let props = {
        disabled: "disabled",
        readonly: "readonly"
    }

    function assignData(data){
        passwordRequest = {
            raw: data,
            transformed: data.replace(/(?:\r\n|\r|\n)/g, '<br>')
        }
    }

    async function fetchLoad(){
        state = true
        const response = await fetchAPI(path+"?password="+value)
        console.log(response)
        if(response["status"] === 200){
            assignData(response["data"]["data"])
        }
        state = false
    }

    $:{
        props = {
            disabled: "disabled",
            readonly: "readonly"
        }
        if(value !== ""){
            props = {
                disabled: "",
                readonly: ""
            }
        }
    }

</script>

<svelte:head>
	<title>ToolsBox 4 DEV | Password request</title>
	<meta name="description" content={title}>
</svelte:head>

<HomeLink />
{#if passwordRequest}
    <section class="passwordRequest">
        <textarea id="data" hidden>{passwordRequest["raw"]}</textarea>
        <div class="alert">{@html passwordRequest["transformed"]}</div>
        <Copy target="#data" />
    </section>
{:else}
    <h1>Enter the password</h1>
    <section class="flex">
        <div class="alert">This request is locked behind a password</div>
        <form method="POST"
        on:submit|preventDefault={fetchLoad}>
            <input type="text" placeholder="Enter the password here" bind:value />
            {#if value !== ""}
                <Submit {...props}
                        title="Fetch request" 
                        bind:state />
            {/if}
        </form>
    </section>
{/if}

<style>
    .flex{
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .alert{
        background-color: #fff;
        margin-bottom: 1rem;
        padding: 1rem;
        color: #000;
        border-radius: 5px;
        opacity: 1;
    }
    .passwordRequest{
        margin: auto;
        width: fit-content;
        min-width: 50%;
    }
</style>