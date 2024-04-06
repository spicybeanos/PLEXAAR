<script>
    import SlideLink from "./SlideLink.svelte";

    export let link = "";
    export let imgUrl = "";
    export let width = 570;
</script>

<div class="root" style="width: {width}px;">
    <div class="rowp">
        <div class="rowc">
            <div class="bold24">
                <slot name="title" />
            </div>
            <div class="text14">
                <slot name="body" />
            </div>
            <br />
            <SlideLink text={"Read more"} {link} fsize={14} --color='#7f97d9'/>
        </div>
        <div class="rowc">
            <img src={imgUrl} alt="blog image" />
        </div>
    </div>
</div>

<style>
    img {
        border-radius: 12px;
        border-width: 2px;
        width: 100%;
        height: 100%;
    }
    .root {
        margin: 30px;
        border-color: #7f97d9;
        border-radius: 12px;
        border-style: solid;
        border-width: 2px;

        background: linear-gradient(
            rgb(173, 210, 237),
            rgb(135, 120, 220),
            rgb(74, 83, 201)
        );
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
    .text14 {
        font-size: 14px;
        display: inline;
        text-align: start;
        color: #030303;
    }
    .bold24 {
        font-weight: 600;
        font-size: 24px;
        text-align: start;
        margin-top: 50px;
    }
</style>
