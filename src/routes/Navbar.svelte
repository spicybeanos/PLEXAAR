<script>
    import { text } from "@sveltejs/kit";
    import NavLink from "./NavLink.svelte";
    import NavbarButton from "./SlideLink.svelte";
    import SlideButton from "./SlideButton.svelte";

    function login(){
        alert('log in')
    }
</script>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<link
    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet"
/>
<nav>
    <NavLink link={"/"} text={"Home"} />
    <NavLink link={"trees"} text={"Trees"} />
    <NavLink link={"water"} text={"Water"} />
    <NavLink link={"food"} text={"Food"} />
    <NavLink link={"contactus"} text={"Contact us"} />
    <NavLink link={"aboutus"} text={"About us"} />
    <NavLink link={"sign_up"} text={"Sign up"} />
</nav>
