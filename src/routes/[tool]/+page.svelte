<script>
    import HomeLink from '../../lib/components/HomeLink.svelte';
    import { Json } from '../../lib/components/Tools/_loader'

    export let data
    const tool = data
</script>

<HomeLink />
{#if tool.path === "json"}
    <Json {tool} />
{/if}