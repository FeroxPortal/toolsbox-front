<script>
    import { page } from '$app/stores'
    console.log(page)
</script>

<h1>{$page.error.message}</h1>

<style>
    h1{
        color: var(--danger);
        text-align: center;
    }
</style>