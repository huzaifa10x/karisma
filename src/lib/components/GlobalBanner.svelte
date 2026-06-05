<script>
  import Breadcrumb from "./breadcrumb.svelte";

  let { image, text } = $props();
</script>

<section
  style="background-image: url('{image}')"
  class="bg-cover bg-center h-150 bg-no-repeat"
>
  <div class="w-full h-full bg-black/40">
    <div class="max-w-7xl px-6 mx-auto flex gap-4 flex-col justify-end h-10/11">
      <div
        class="text-white relative font-light! text-[40px] font-seasons z-20"
      >
        {text}
      </div>
      <Breadcrumb />
    </div>
  </div>
</section>
