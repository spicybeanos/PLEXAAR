<script>
    
    let formData = { email: "", name: "", pass: "" ,type:"sign-up"};
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

<form on:submit|preventDefault={postData}>
    <label>
        Name:
        <input type="text" bind:value={formData.name} />
    </label>
    <br>
    <label>
        Email:
        <input type="email" bind:value={formData.email} />
    </label>
    <br>
    <label>
        Password:
        <input type="password" bind:value={p1} />
    </label>
    <br>
    <label>
        Confirm password:
        <input type="password" bind:value={p2} />
    </label>
    <br>
    <button type="submit">Submit</button>
</form>
