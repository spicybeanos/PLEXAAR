<script>
    import Navbar from "./navbar.svelte";
    import Card from "./Card.svelte";
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
            <div class="ctext">
                All your environmental problems end here.
            </div>
            <div class="textbody">
                <h7>Our platform aims to address the current environmental and sustainability crisis in the city of Bengaluru spanning over afforestation, water scarcity and food wastage by using machine learning, AI tools and other software solutions to help individuals and cooperations uplift Bengaluru in a sustainable way forward.</h7>
            </div>
            <div class="second-body">
                <h7>We hope to serve as a catalyst for positive change in Bengaluru, fostering a culture of sustainability and resilience through technological innovation and collective action. By harnessing the power of data and AI, we strive to create a future where environmental stewardship, social equity, and economic prosperity go hand in hand, ensuring a thriving and livable city for generations to come.</h7>
            </div>
        </div>
        <img src="imgs/bng.jpg" alt="">
    </div>
</div>

<style>
    :global(h1,h2,div,p,body) {
        font-family: "Poppins", sans-serif;
        --navbtn: #3ae22b;
        --txtwhite: #ffffff;
        --txtblack: #000000;
        --h1ht: 60px;
        --h2ht: 30px;
    }
    img{
        width: 100%;
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
    .textbody{
        display:flex;
        justify-content: center;
        margin:40px; 
    }
    .second-body{
        display: flex;
        justify-content: center;
        margin:40px;
    }
</style>
