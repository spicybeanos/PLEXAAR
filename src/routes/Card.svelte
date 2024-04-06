<script>
    export let title = "";
    export let text = "";
    export let imgsrc = "";
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<link
    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet"
/>

<div class="card-root">
    <div class="card-child">
        <div class="text">
            {text}
        </div>
    </div>
    <div class="card-child">
        <img src={imgsrc} alt="" />
    </div>
</div>

<style>
    .card-root {
        height: 200px;
        width: 200px;
        background-color: #d7eafd;
        display: flex;
        flex-direction: column;
        justify-content: center;

        border-radius: 24%;
    }
    .text{
        text-align: center;
        font-weight: 600;
    }
    .card-child {
        width: max-width;
        display: flex;
        justify-content:center;
    }
    img {
        width: 100px;
        height: 100px;
    }
</style>
