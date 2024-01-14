<script>

    import { Json } from '../../lib/components/Tools/_loader'

    export let data
    console.log("Response client", data)
</script>

{#if data.path === "json"}
    <Json />
{/if}