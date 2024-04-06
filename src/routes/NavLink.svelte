<script>
    export let link = "";
    export let text = "";
</script>

<a href={link}>
    {text}
</a>

<style>
    a {
        padding: 10px 10px 10px 10px;
        background-color: rgba(0, 0, 0, 0);
        border-color: var(--navbtn);
        border-width: 2px;
        display: inline-flex;
        position: relative;
        z-index: 1;
        border-style: solid;
        text-decoration: none;
        color: var(--txtblack);
        margin: 10px 10px 10px 10px;
        transition: 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);
        transition-delay: 0s !important;
    }
    a::before {
        position: absolute;
        content: "";
        top: 0;
        right: 0;
        width: 0%;
        height: 100%;
        background: var(--navbtn);
        z-index: -1;
        transition: 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    }
    a:hover::before {
        width: 100%;
        left: unset;
        right: 0;
    }
    a:hover {
        box-shadow:
            0 0 var(--navbtn),
            0 0 #151515;
        color: var(--txtwhite);
    }
</style>
