<script>
    import { text } from "@sveltejs/kit";
import SlideLink from "../SlideLink.svelte";

</script>


<style>
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      font-family: Arial, sans-serif;
    }
  
    .contact-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: scroll;
    width: 30%;
    padding: 20px;
    border: 1px solid #173517;
    border-radius: 20px;
    background-color: #cfdbfd;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin: 50px auto 0; /* Add a top margin of 50px */
    height: 60vh;
}
  
.contact-container h1 {
    text-align: center;
}
</style>
  
  <div class="contact-container">
    <div id="contact-us">
      <h1>Contact Us</h1>
      <p>Feel free to reach out to us for any assistance or inquiries.</p>
      <p>We are here to help you make a positive impact in Bengaluru!</p>
      <p><strong>Bengaluru Upliftment Project</strong></p>
      <p>Address: 27, 5th Main, Indiranagar, Bengaluru, Karnataka, India - 560008</p>
      <p>Phone: +91-80-XXXXXXX</p>
      <p>Email: info@bengaluruupliftment.org</p>
    </div>
  </div>