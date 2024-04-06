<script>
    import Navbar from "./navbar.svelte";
    import Card from "./Card.svelte";
    import { text } from "@sveltejs/kit";
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<link
    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet"
/>

<div class="super-root">
    <div class="colp">
        <div class="colc">
            <h1 class="title">One-stop upliftment for Bengaluru</h1>
            <div class="ctext">All your environmental problems end here.</div>
        </div>
        <img src="imgs/bng.jpg" alt="">
    </div>
    <h2>
    Domains we cover
    </h2>
    <div class="card-holder">
        <Card text={'fortnite'} imgsrc ={'imgs/bng.jpg'}/>
    </div>
</div>

<style>
    :global(h1,h2,div,p) {
        font-family: "Poppins", sans-serif;
        --navbtn: #3ae22b;
        --txtwhite: #ffffff;
        --txtblack: #000000;
        --h1ht: 60px;
        --h2ht: 30px;
    }
    img{
        width: 50%;
        clip-path: circle(37%);
    }
    .title {
        max-width: 100%;
        text-align: center;
        font-size: var(--h1ht);
        font-weight: 200;
        color: var(--txtblack);
    }
    h2{
        max-width: 100%;
        text-align: center;
        font-size: var(--h2ht);
        font-weight: 500;
        color: var(--txtblack);
    }
    .colp {
        display: flex;
        flex-direction: row;
    }
    .colc {
        max-width: 100%;
        text-align: center;
        color: var(--txtblack);
    }
    .super-root{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .card-holder{
        display: flex;
        justify-content: center;
    }
</style>
