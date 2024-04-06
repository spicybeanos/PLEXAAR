<script>
    import { text } from "@sveltejs/kit";
    import NavbarButton from "./NavbarButton.svelte";
</script>

<div class="bar">
    <NavbarButton link={"/"} text={"Home"} />
    <NavbarButton link={"ilovetrees"} text={"Trees"} />
    <NavbarButton link={"savefood"} text={"Food distribution"} />
    <NavbarButton link={"contact"} text={"Contact us"} />
</div>

<style>
    .bar {
        max-width: 105%;
        max-height: max-content;
        
    }
</style>
