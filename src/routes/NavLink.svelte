<script>
    export let link = "";
    export let text = "";
</script>

<a href={link}>
    {text}
</a>

<style>
    :root{
        --linecolor:#008000;
        --linewidth: 5px;
    }
    a {
        padding: 10px 10px 10px 10px;
        background-color: rgba(0, 0, 0, 0);
        display: inline-flex;
        position: relative;
        z-index: 1;
        text-decoration: none;
        color: var(--txtblack);
        margin: 10px 10px 10px 10px;
        transition: 0.1s cubic-bezier(0.785, 0.135, 0.15, 0.86);
        transition-delay: 0s !important;
    }
    a::before {
        position: absolute;
        content: "";
        box-shadow: 0px 0px 0px 0px var(--linecolor);

        background: var(--navbtn);
        z-index: -1;
        transition: 0.25s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    }
    a:hover::before {
        width: 100%;
        left: unset;
        right: 0;
    }
    a:hover {
        box-shadow: 0px var(--linewidth) 0px 0px var(--linecolor);
       
    }
</style>
