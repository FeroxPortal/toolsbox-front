<script>
    export let title
    export let state = false

    let disabled = ""
    let readonly = ""

    if(state === true){
        disabled = "disabled"
        readonly = "readonly"
    }

</script>

{#if state === true}
    <progress />
{:else}
    <button type="submit">
        {title}
    </button>
{/if}

<style>
    @media (max-width: 768px) {
        button{
            display: block;
            width: 100%;
        }
    }
</style>