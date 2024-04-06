<script>

    import Navbar from "../Navbar.svelte";
</script>
<style>
    h1 {
        max-width: 100%;
        text-align: center;
        font-size: var(--h1ht);
        font-weight: 200;
    }
    .rowp{
        display: flex;
        flex-direction: row;
        justify-content:center;
    }
    .rowc{
        max-width: 100%;
        text-align: center;
        color: var(--txtblack);
    }
    .text{
        display: flex;
        justify-content:center;
        text-align:center;
        padding:15px; 
        
    }
    .solutions{
        display: flex;
        justify-content:center;
        text-align:center;
        padding:15px; 
        margin:50px;
    }
</style>
<div class="super-root">
    <div class="rowp">
        <h1>Water</h1>
    </div>
    <div class="text">
        <h7>In recent years, Bengaluru has been grappling with a pressing issue that threatens the very foundation of its existence: water shortage. Once known for its abundance of lakes and lush greenery, the Silicon Valley of India now faces a daunting challenge as its water resources dwindle and demand continues to rise. Let's delve into the factors contributing to the water crisis in Bengaluru and explore potential solutions to mitigate its impact.</h7>
    </div>
    <div class="solutions">
        <h7>Some of the innovative solutions are listed below. </h7>
    </div>
    <div class="blogs">
        <div class="blog1">
            <div class="text_of_blog1">
                <div class="titleofblog">
                    <h5>Innovative Water-Saving Techniques Amind Bengaluru's Crisis</h5>
                </div>
            </div>
        </div>
        <div class="blog2">
            <div class="text_of_blog2">
                <div class="titleofblog">
                    <h5>Crafting sustainable Homes in India</h5>
                </div>
            </div>
        </div> 
    </div>
</div>


