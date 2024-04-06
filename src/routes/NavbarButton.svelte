<script>
    export let link = "";
    export let text = "";
</script>

<a href={link}>
    {text}
</a>

<style>
    :root {
        --navbtn: #8a2be2 ;
        --txtwhite: #ffffff ;
        --txtblack: #000000;
    }
    a {
        padding: 10px;
        border-radius: 15px;
        background-color: rgba(0, 0, 0, 0);
        border-color: var(--navbtn);
        border-width: 2px;
        border-style: solid;
        text-decoration: none;
        color: var(--txtblack);
    }

    a:hover {
        background-color: var(--navbtn);
        color:var(--txtwhite);
    }
</style>
