<script>
    import FaCoffee from 'svelte-icons/fa/FaCoffee.svelte'
    import Tool from '../lib/components/Tool.svelte';

    export let data

    const siteName = "ToolsBox 4 DEV"

</script>

<svelte:head>
	<title>{siteName}</title>
	<meta name="description" content="{siteName}">
</svelte:head>


<h1>
    <img src="./images/logo.svg" alt="{siteName}" />
</h1>

<div id="tools">
    {#each data.tools as tool}
        <Tool {tool} />
    {/each}
</div>  

<a href="https://paypal.me/pixofheaven/2?country.x=FR&locale.x=fr_FR" target="_blank">
    <i class="icon">
        <FaCoffee />
    </i> Buy me a coffee
</a>

<style> 

    a{
        display: flex;
        padding: 1rem;
        text-align: center;
        width: -webkit-fill-available;
        position: fixed;
        align-items: center;
        justify-content: center;
        bottom: 0;
        color: #fff;
        font-size: 0.8rem;
        background: var(--gradient);
        background-size: 400% 400%;
    }
    a .icon{
        width: 25px;
        height: 25px;
        padding-right: 0.5rem;
    }

    @media (min-width: 768px) {
        img{
            width: 650px;
        }
        #tools{
            text-align: center;
            margin: auto;
        }
    }
    #tools{
        max-width: 100%;
        padding-top: 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    @media (min-width: 991px) {
        #tools{
            max-width: 85%;
        }
    }
</style>