<script>
    import { text } from "@sveltejs/kit";
import SlideLink from "../SlideLink.svelte";

</script>


<h2 class="names" style="font-weight:300;padding:15px">
    Made by Aryan D, Arnav, Atharv L and Ritu
</h2>
<div class="github" style="padding:15px">
        <SlideLink fsize={16} text="Aryan's GitHub" link="https://github.com/spicybeanos" />
    <br><SlideLink fsize={16} text="Arnav's GitHub" link="https://github.com/PlexiTAURAD" />
    <br><SlideLink fsize={16} text="Atharv's GitHub" link="https://github.com/skadoosh515" />
    <br><SlideLink fsize={16} text="Ritu's GitHub" link="https://github.com/ritukanchi" />
</div>

<style>
    .github{
        display:inline-flex; 
    }
    .names{
        display:flex; 
        left:10px;
    }
</style>