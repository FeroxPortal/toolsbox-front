<script>
    export let tool
    console.log(tool)


</script>

<h1>{tool.name}</h1>

<div class="flex">
    <form method="POST" class="flex-inline"
    data-path={tool.back}>
        <textarea placeholder="Data to encode" name="data"></textarea>
        <button type="submit">Encode data</button>
    </form>
    <div class="flex-inline">
        <textarea placeholder="Data to encode" name="{tool.back}[decpde]"></textarea>
    </div>
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