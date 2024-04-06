<script>
// @ts-nocheck


    import SlideLink from "../SlideLink.svelte"; 
    let LinktoExternal="/";
</script>
    
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet"
/>
<div class="super-root">
    <div class="rowp">
        <div class="rowc">
            <div class="cont-0">
                <h1 class="start">Food</h1>
                <div class="text28">
                    hi
                </div>
            </div>
        </div>
        <div class="rowc">
            <div class="imgs-0">
                
            </div>
        </div>
    </div>
    <h1>
        food<br />
        yo food
    </h1>
    <div class="bold28-ctr">food</div>
    <br />
    <br />
    <div class="cont-centre">
        <SlideLink
            text={"link to foodbanks"}
            link={LinktoExternal};
            --color='green'
        />
    </div>
    <br />
    <br />
    <div class="cont-centre2">
        <div class="bold28-ctr">food</div>
        <div class="text28-ctr">
            food
        </div>
        <div class="spacer50"></div>
    </div>
</div>

<style>
    .spacer50 {
        margin-bottom: 50px;
    }
    .cont-centre {
        display: flex;
        justify-content: center;
    }
    .cont-centre2 {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .super-root {
        display: flex;
        flex-direction: column;
        justify-items: center;
    }
    .imgs-0 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        height: 100%;
    }
    .imgs {
        position: relative;
        display: inline;
        justify-content: center;
    }
    .im1 {
        position: absolute;
        bottom: 100px;
        left: 0;
    }
    .cont-0 {
        padding: 25px;
    }
    .im2 {
        position: absolute;
        bottom: -100px;
        right: 0;
        z-index: -1;
    }
    h1.start {
        max-width: 100%;
        text-align: start;
        font-size: var(--h1ht);
        font-weight: 200;
    }
    h1 {
        max-width: 100%;
        text-align: center;
        font-size: var(--h1ht);
        font-weight: 200;
    }
    .bold28-ctr {
        font-weight: 600;
        font-size: 28px;
        text-align: center;
        margin-top: 50px;
    }
    .rowp {
        display: flex;
        flex-direction: row;
    }
    .rowc {
        display: flexbox;
        width: 50%;
        color: var(--txtblack);
        padding: 15px;
    }
    img {
        clip-path: circle(37%);
        width: 50%;
        height: 288px;
        padding: none;
    }
    .text28 {
        font-size: 28px;
        display: inline;
        text-align: start;
        color: #030303;
    }
    .text28-ctr {
        font-size: 28px;
        display: inline;
        text-align: center;
        color: #030303;
    }
</style>
