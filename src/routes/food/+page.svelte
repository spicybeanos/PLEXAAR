<script>
    import SlideLink from "../SlideLink.svelte";
</script>

<div class="super-root">
    <div class="title">
        <h1>Food</h1>
    </div>
    <div class="blank4">

    </div>
    <div class="subtext">
        <h7>In the city of Bengaluru, food stands as a fundamental pillar of human survival and well-being. Yet, amidst the bustling streets and glittering skyscrapers, many of our fellow residents struggle to access nutritious meals on a daily basis. Recognizing the urgency of this issue, we've devised a solution that not only addresses hunger but also fosters community solidarity: connecting those in need with individuals and organizations willing to donate food.</h7>
    </div>
    <div class="blank">

    </div>
    <div class="solutions">
        <h1>Solutions</h1>
    </div>
    <div class="blank2">

    </div>
    <div class="subtext">
        <h7>In the city of Bengaluru, food stands as a fundamental pillar of human survival and well-being. Yet, amidst the bustling streets and glittering skyscrapers, many of our fellow residents struggle to access nutritious meals on a daily basis. Recognizing the urgency of this issue, we've devised a solution that not only addresses hunger but also fosters community solidarity: connecting those in need with individuals and organizations willing to donate food.</h7>
    </div>
    <div class="blank3">

    </div>
    <div class="quote">
        <h1>Hunger is not an issue of charity. </h1>
        <div class="subqoute">
            <h1><br>It is an issue of justice.</h1>
        </div>
    </div>
    <div class="slide">
        <SlideLink
        text={"Feed people or get food!"} link="/"  --color='rgb(226, 199, 125)'/>
    </div>
</div>


<style>
    .super-root {
    display: flex;
    height: 100%;
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    flex-direction: column; /* Stack children vertically */
    padding: 20px; /* Add padding around the content */
    background: radial-gradient(
        rgb(186, 160, 82),
        rgb(226, 199, 125),
        rgb(230, 212, 170),
        rgb(255, 255, 255),
        rgb(255, 255, 255)
    );
}

/* Adjust the margin for blank divs to use padding instead for better control */
.blank4, .blank, .blank2, .blank3 {
    padding: 45px 0; /* Vertical padding for spacing */
}

/* Ensure text and other elements are centered within their containers */
.title, .subtext, .solutions, .quote, .subquote {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%; /* Ensure they take full width */
    padding:25px;
}

/* Adjust the slide container for better centering */
.slide {
    display: flex;
    justify-content: center;
    margin: 50px; /* Adjust margin as needed */
    width: 100%; /* Ensure it takes full width */
}

</style>
