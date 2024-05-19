<script>

    import HomeLink from '../../lib/components/HomeLink.svelte';

    const siteName = "ToolsBox 4 DEV"

</script>

<svelte:head>
	<title>{siteName} - Paypal donation link</title>
	<meta name="description" content="{siteName} - Paypal donation link">
</svelte:head>

<HomeLink />
<h1>
    Scan this
</h1> 
<img src="./images/qrcode.png" alt="QRCODE Paypal" />


<style>
    img{
        display: flex;
        max-width: 350px;
        margin: auto;
    }
</style>