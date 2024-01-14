<script>
    export let data
    console.log("Response client", data)
</script>

<h1>ToolsBox 4 DEV</h1>
{#each data.tools as tool}
    <div class="tool">

    </div>
{/each}