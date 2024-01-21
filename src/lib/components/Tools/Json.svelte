<script>

    import { load } from '$lib/client/sendData'
    
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
        </form>
    {/each}
</div>

<style>
    .flex{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }
    .flex-inline{
        display: inline-flex;
        width: 35%;
        padding: 1rem;
    }
    textarea{
        min-height: 250px;
    }
    h1 {
        text-align: center;
        view-transition-name: header;
    }
</style>