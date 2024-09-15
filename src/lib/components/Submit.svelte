<script>
    export let title
    export let state = false

    export let disabled = ""
    export let readonly = ""

    if(state === true){
        disabled = "disabled"
        readonly = "readonly"
    }

</script>

{#if state === true}
    <progress />
{:else}
    <button type="submit" {disabled} {readonly}>
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