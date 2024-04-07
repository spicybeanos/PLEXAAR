<script>
    // @ts-nocheck

    import SlideLink from "../SlideLink.svelte";

    //link to other website goes here
    let linkToExternal = "";
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
                <h1 class="start">Trees</h1>
                <div class="text28">
                    In the bustling urban landscape of Bengaluru, once renowned
                    as the Garden City of India, the significance of trees in
                    maintaining ecological balance cannot be overstated. As
                    rapid urbanization transforms the cityscape, preserving and
                    replenishing the lush greenery that once defined this
                    metropolis is paramount. Here's how you can play a pivotal
                    role in revitalizing Bengaluru's environment and restoring
                    its cherished Garden City status!
                </div>
            </div>
        </div>
        <div class="rowc">
            <div class="imgs-0">
                <div class="imgs">
                    <img src="imgs/tree1.jpg" alt="a tree" />
                    <img src="imgs/tree2.jpg" alt="a tree" class="im1" />
                    <img src="imgs/tree3.jpg" alt="a tree" class=" im2" />
                </div>
            </div>
        </div>
    </div>
    <h1>
        Save the trees,<br />
        Save the planet.
    </h1>
    <div class="bold28-ctr">Plant a tree and get a reward!</div>
    <br />
    <br />
    <div class="cont-centre">
        <SlideLink
            text={"Survey your area"}
            link="https://plexaar-tree.streamlit.app/"
            ;
            --color="green"
        />
        <SlideLink
            text={"See what tree you can plant!"}
            link="https://plexaar-classify.streamlit.app/"
            ;
            --color="green"
        />
    </div>
    <div class="colpi">
        <div class="title_categ1">
            Category 1
            <div class="categ1">
                <ol>
                    <li>Average yearly offset: 22kgs</li>
                    <li>
                        Cosidering 80% of the offset: [(80 x 22 /100)=17.6kg]
                        converting it to tonnes=0.01732
                    </li>
                    <li>0.01732 x 5400 INR = 93.52 INR</li>
                </ol>
            </div>
        </div>
        <div class="title_categ2">
            Category 2
            <div class="categ2">
                <ol>
                    <li>Average yearly offset: 44kgs</li>
                    <li>
                        Cosidering 80% of the offset: [(80 x 44 /100)=35.2kg]
                        converting it to tonnes=0.03464
                    </li>
                    <li>0.03464 x 5400 INR = 187.08 INR</li>
                </ol>
            </div>
        </div>
    </div>
        <div class="title_categ3">
            Category 3</div>
            <div class="categ3">
                <ol>
                    <li>Average yearly offset: 67kgs</li>
                    <li>
                        Cosidering 80% of the offset: [(80 x 67 /100)=53.6kg]
                        converting it to tonnes=0.05275
                    </li>
                    <li>0.05275 x 5400 INR = 284.88 INR</li>
                </ol>
            </div>
        </div>
    

<div class="bold28-ctr">Details about rewards.</div>
<div class="text28-ctr">
    Our fund comes from carbon credits purchased by companies who exceed their
    emissions. Hence this surplus money is used to pay people who are interested
    in planting trees and making a positive impact for the environment
</div>

<style>
    .colpi {
        margin:40px; 
        display: flex; /* Use flex to align items horizontally */
        justify-content: space-between; /* Space out the items evenly */
        flex-wrap: wrap; /* Allow items to wrap onto multiple lines if necessary */
    }
    .categ3{
        display: flex;
        justify-content: center;
        
    }
    .title_categ3{
        display: flex;
        justify-content: center;
    }
    .cont-centre {
        display: flex;
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
        display: flex;
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
        margin: 50px;
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
        display: flex;
        text-align: start;
        color: #030303;
    }
    .text28-ctr {
        font-size: 28px;
        display: flex;
        text-align: center;
        color: #030303;
        margin: 50px;
    }
</style>
