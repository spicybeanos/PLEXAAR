<script>
    export let src;
    export let width = "100%";
    export let height = "500px";
  </script>
  
  <iframe
    {src}
    {width}
    {height}
    frameborder="0"
    allowfullscreen
    title="Streamlit App"
  />
  