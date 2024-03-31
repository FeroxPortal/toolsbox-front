<script>
    import { page } from '$app/stores'
</script>

<h1>{$page.status}</h1>
<h2>{$page.error.message}</h2>

<style>
    h1{
        color: var(--danger);
        text-shadow: 1px 1px 5px var(--danger);
    }
</style>