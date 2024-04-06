<script>
    export let onClick = () =>{;} ;
</script>

<button on:click={onClick}>
    <slot/>
</button>

<style>
    :root{
        --color:#0000ff
    }
    button {
        padding: 10px 10px 10px 10px;
        background-color: rgba(0, 0, 0, 0);
        border-color: var(--color);
        border-width: 2px;
        display: inline-flex;
        position: relative;
        z-index: 1;
        border-style: solid;
        text-decoration: none;
        color: var(--txtblack);
        margin: 10px 10px 10px 10px;
        transition: 0.25s cubic-bezier(0.785, 0.135, 0.15, 0.86);
        transition-delay: 0s !important;
        cursor: pointer;
    }
    button::before {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background: var(--color);
        z-index: -1;
        transition: 0.25s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    }
    button:hover::before {
        width: 100%;
        left: 0;
        right: unset;
    }
    button:hover {
        box-shadow:
            0 0 var(--color),
            0 0 #151515;
        color: var(--txtwhite);
    }
</style>
