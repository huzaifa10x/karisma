<script>
  let { items } = $props();
</script>

<section
  style="background-image: url('{items.data.banner_image}')"
  class="bg-cover bg-center h-150 bg-no-repeat"
>
  <div class="w-full h-full bg-black/40">
    <div class="max-w-7xl px-6 mx-auto flex gap-4 flex-col justify-end h-4/5">
      <div class="text-white relative text-4xl font-seasons z-20">About Us</div>
      <div class="text-white">Home | About Us</div>
    </div>
  </div>
</section>
