<script>

    import HomeLink from '../../lib/components/HomeLink.svelte';

    import { 
        Base64, 
        Base64Image, 
        Json, 
        Md5, 
        PasswordGenerator, 
        PasswordHash, 
        PasswordVerify, 
        Sha1, 
        Uuid,
        ImageWebp,
        ImageAvif,
        SvgImage
    } from '../../lib/components/Tools/_loader'

    export let data
    const tool = data
</script>

<HomeLink />
{#if tool.component === "Json"}
    <Json {tool} />
{:else if tool.component === "Base64"}
    <Base64 {tool} />
{:else if tool.component === "Base64Image"}
    <Base64Image {tool} />
{:else if tool.component === "Md5"}
    <Md5 {tool} />
{:else if tool.component === "Sha1"}
    <Sha1 {tool} />
{:else if tool.component === "PasswordHash"}
    <PasswordHash {tool} />
{:else if tool.component === "PasswordVerify"}
    <PasswordVerify {tool} />
{:else if tool.component === "PasswordGenerator"}
    <PasswordGenerator {tool} />
{:else if tool.component === "Uuid"}
    <Uuid {tool} />
{:else if tool.component === "ImageWebp"}
    <ImageWebp {tool} />
{:else if tool.component === "ImageAvif"}
    <ImageAvif {tool} />
{:else if tool.component === "SvgImage"}
    <SvgImage {tool} />
{/if}