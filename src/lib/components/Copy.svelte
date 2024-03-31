<script>
    import { toast } from '$lib/client/sendData'
    export let target

    function copyData(data){
        let item = data.currentTarget
        let scope = document.querySelector(item.getAttribute("data-target"))
        if(scope.value === ""){
            return toast("Value is empty")
        }
        if(!scope){
            return toast("Target cannot be found")
        }
        scope.select()
        scope.setSelectionRange(0, 99999)
        navigator.clipboard.writeText(scope.value)
        return toast("Value copied to clipboard", "bg-success")
    }

</script>


<button type="button" 
        on:click={copyData}
        data-target={target}>Copy value</button>


<style>
    button{
        display: block;
        width: 100%;
        padding: 0.5rem;
        background-color: var(--info);
        color: var(--white);
        border: 3px var(--info) solid;
        transition-duration: 0.4s;
    }
    button:hover{
        background-color: transparent;
        color: var(--info);
        cursor: pointer;
        border: 3px var(--info) solid;
        transition-duration: 0.4s;
    }
</style>