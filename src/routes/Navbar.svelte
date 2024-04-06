<script>
    import { text } from "@sveltejs/kit";
    import NavbarButton from "./NavbarButton.svelte";
</script>

<div class="bar">
    <NavbarButton link={"ilovetrees"} text={"Trees"} />
    <NavbarButton link={"savefood"} text={"Food distribution"} />
</div>

<style>
    .bar {
        max-width: 105%;
        max-height: max-content;
        color: rgba(0, 0, 0, 0);
        border-top: 2px solid var(--navbtn);
        border-bottom: 2px solid var(--navbtn);
        padding: 30px;
    }
</style>
