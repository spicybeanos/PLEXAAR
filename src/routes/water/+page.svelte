<script>
    import Blog from "../Blog.svelte";

    function fortfun(){
        alert("yip")
    }
</script>

<div class="super-root">
    <h1>Water</h1>
    <div class="text28-ctr">
        In recent years, Bengaluru has been grappling with a pressing issue that
        threatens the very foundation of its existence: water shortage. Once
        known for its abundance of lakes and lush greenery, the Silicon Valley
        of India now faces a daunting challenge as its water resources dwindle
        and demand continues to rise. Let's delve into the factors contributing
        to the water crisis in Bengaluru and explore potential solutions to
        mitigate its impact.
    </div>
    <div class="spacer50"></div>
    <div class="text28-ctr-pad">
        <h7>Some of the innovative solutions are listed below. </h7>
    </div>
    <div class="spacer50"></div>
    <div class="blog-box">
        <Blog
            imgUrl="imgs/water1.webp"
            link="https://economictimes.indiatimes.com/news/india/as-indias-silicon-valley-runs-dry-this-bengaluru-doctor-has-some-water-saving-tips-you-can-use/articleshow/108594307.cms?from=mdr"
        >
            <span slot="title">
                Innovative Water-Saving Techniques Amid Bengaluru's Crisis
            </span>
            <span slot="body">
                Dr. Divya Sharma, a Bengaluru doctor, shares water-saving tips,
                including bucket baths and tap aerators, saving 600 liters daily
                for her family. Her social media post receives praise, sparking
                discussions on water conservation amid Bengaluru's severe water
                crisis. Residents resort to creative measures like working from
                home and ordering food to cope with scarcity.
            </span>
        </Blog>
        <Blog
            imgUrl="imgs/water2.webp"
            link="https://ongrid.design/blogs/sustainable/water-conservation-techniques"
        >
            <span slot="title"> Crafting Sustainable Homes in India </span>
            <span slot="body">
                Amid India's water crisis, sustainable architecture offers
                solutions. Green building guidelines integrate water-saving
                features, reducing residential water footprints. This article
                outlines India's key guidelines, innovative technologies, and
                design principles for water efficiency in homes. Local codes and
                case studies reinforce context-specific measures for sensible
                water budgeting.
            </span>
        </Blog>
        <Blog
            imgUrl="imgs/waterbuildin.jpg"
            link="https://smartwateronline.com/news/the-future-of-water-conservation-innovations-and-technology"
        >
            <span slot="title">
                Precision Agriculture, AI, and Water Efficiency: The Future of
                Farming
            </span>
            <span slot="body">
                Precision agriculture utilizes AI and data-driven technologies
                to enhance water efficiency in farming. AI-driven systems like
                smart irrigation, predictive analytics, and remote sensing
                optimize water usage, reduce waste, and increase crop yields. A
                cloud-based water management system in Australia's
                Murray-Darling Basin, employing satellite data, achieved a 20%
                improvement in irrigation efficiency, cost savings, and
                environmental benefits. As climate change intensifies, AI-driven
                precision agriculture offers promising solutions to global food
                and water challenges, promoting sustainability and resilience in
                farming practices.
            </span>
        </Blog>
        <Blog>
            <span slot="title">Water Neutral Buildings</span>
            <span slot="body"
                >Water-neutral buildings, such as the Green Solution House in
                Denmark, utilize innovative design and technology to achieve a
                zero water footprint. Through rainwater harvesting,
                water-efficient fixtures, and treatment and reuse systems, they
                reduce freshwater demand, improve water quality, and provide
                cost savings. The Green Solution House reduced water consumption
                by 75% compared to conventional hotels, showcasing the
                effectiveness of this approach. Overall, water-neutral buildings
                offer a promising solution to mitigate water scarcity challenges
                and promote sustainability in urban development.</span
            >
        </Blog>
    </div>
</div>

<style>
    .blog-box {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .spacer50 {
        margin-bottom: 50px;
    }

    .super-root {
        display: flex;
        flex-direction: column;
        justify-items: center;
        background: radial-gradient(
            rgb(126, 178, 215),
            rgb(200, 193, 235),
            rgb(255, 255, 255),
            rgb(255, 255, 255)
        );
    }

    h1 {
        max-width: 100%;
        text-align: center;
        font-size: var(--h1ht);
        font-weight: 200;
    }
    .text28-ctr {
        font-size: 28px;
        display: inline;
        text-align: center;
        color: #030303;
    }
    .text28-ctr-pad {
        padding: 25px;
        font-size: 28px;
        display: inline;
        text-align: center;
        color: #030303;
    }
</style>
