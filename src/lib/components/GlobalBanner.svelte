<script>
  let { items } = $props();
  console.log(items.data);
</script>

<section>
  <div>
    <img src={items.data.banner_image} alt="" />
  </div>
</section>
