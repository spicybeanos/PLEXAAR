<script>
    import NavbarButton from "./NavbarButton.svelte";
    import Navbar from "./navbar.svelte";
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<link
    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet"
/>

<style>
    :global(h1, div) {
        font-family: "Poppins", sans-serif;
        --navbtn: #8a2be2 ;
        --txtwhite: #ffffff ;
        --txtblack: #000000;
    }
    .title {
        max-width: 100%;
        text-align: center;
        font-size: 70px;
        font-weight: 200;
    }
</style>

<Navbar />
<h1 class="title">One-stop upliftment for Bengaluru</h1>
<div>All your environmental problems end here.</div>

