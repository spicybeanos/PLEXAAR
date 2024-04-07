<script>
    import NavLink from "../NavLink.svelte";
    import SlideButton from "../SlideButton.svelte";
    import SlideLink from "../SlideLink.svelte";

    let formData = { email: "", pass: "", type: "log-in" };
    let p1 = "";

    async function postData() {
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
                <div class="text24">Email:</div>
                <input type="email" bind:value={formData.email} /><br />
                <div class="text24">Password:</div>
                <input type="password" bind:value={p1} /><br />
            </div>
        </div>
        <div class="submit">
            <SlideButton type="{'submit'};" --color="green"
                ><div class="text24">Log in</div></SlideButton
            >
        </div>
    </form>
</div>
<div class="rowp">
    <SlideLink
        text={"Don't have an account? Sign up!"}
        link="../sign_up"
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
    .submit {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 30px;
    }
    .rowp {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .colp {
        display: flex;
        flex-direction: column;
    }
</style>
