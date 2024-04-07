<script>
    import NavLink from "../NavLink.svelte";
    import SlideButton from "../SlideButton.svelte";
    import SlideLink from "../SlideLink.svelte";

    let formData = { email: "", name: "", pass: "", type: "sign-up" };
    let p1 = "";
    let p2 = "";

    async function postData() {
        if (!(p1 === p2)) {
            alert("Passwords must match!");
            return;
        }
        formData.pass = p1;

        try {
            const response = await fetch("http://localhost:10000/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            console.log("Response data:", data);
        } catch (error) {
            // @ts-ignore
            console.error("Error:", error.message);
        }
    }
</script>

<div class="main">
    <form on:submit|preventDefault={postData}>
        <div class="rowp">
            <div class="colp">
                <div class="text24">Name:</div>
                <input type="text" bind:value={formData.name} /><br />
                <div class="text24">Email:</div>
                <input type="email" bind:value={formData.email} /><br />
                <div class="text24">Password:</div>
                <input type="password" bind:value={p1} /><br />
                <div class="text24">Confirm password:</div>
                <input type="password" bind:value={p2} /><br />
            </div>
        </div>
        <div class="submit">
            <SlideButton type="{'submit'};" --color="green"
                ><div class="text24">Sign up</div></SlideButton
            >
        </div>
    </form>
</div>
<div class="slidelink">
    <SlideLink
        text={"Already have an account? Click here to login"}
        link="../log_in"
        fsize={18}
    />
</div>

<style>
    input {
        font-size: 24px;
    }
    .text24 {
        font-size: 24px;
        display: flex;
        text-align: start;
        color: #030303;
    }
    .main {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 50px;
        border: 2px black;
    }
    .slidelink {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .submit {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 30px;
    }
    .rowp {
        display: flex;
        flex-direction: row;
    }
    .colp {
        display: flex;
        flex-direction: column;
    }
</style>
