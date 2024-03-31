<script>

    import { load } from '$lib/client/sendData'
    import Copy from '../Copy.svelte';
    
    export let tool

    const config = {
        "target":"dataResult",
        "submit":"Generate a password",
        "path":tool.back+"/generate"
    }

</script>


<svelte:head>
	<title>ToolsBox 4 DEV | {tool.name}</title>
	<meta name="description" content="Generate a random password">
</svelte:head>

<h1>{tool.name}</h1>

<div class="flex">
    <form method="POST" class="flex-inline"
    data-path={config.path}
    data-target={config.target}
    on:submit|preventDefault={load}>
        <input type="number" name="length"
        id="length" placeholder="Longueur" required />
        <select id="symbols" name="symbols" placeholder="Symbols">
            <option value="" selected="selected" disabled readonly>Symboles</option>
            <option value="1">Oui</option>
            <option value="0">Non</option>
        </select>
        <button type="submit">{config.submit}</button>
    </form>
    <div class="flex-inline">
        <textarea id={config.target} name={config.target}></textarea>
        <Copy target={"#"+config.target} />
    </div>
</div>