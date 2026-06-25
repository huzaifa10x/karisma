<script>
  import Breadcrumb from "./breadcrumb.svelte";

  let { image, text } = $props();
</script>

<section
  style="background-image: url('{image}')"
  class="bg-cover bg-right lg:bg-center h-80  md:h-[70vh] lg:h-[70vh] bg-no-repeat"
>
  <div class="w-full h-full bg-black/50">
    <div class="max-w-7xl px-4 mx-auto flex gap-4 flex-col justify-end h-full pb-10">
      <div
        class="text-white relative font-light! text-[40px]/[48px] font-seasons z-20"
      >
        {text}
      </div>
      <Breadcrumb />
    </div>
  </div>
</section>
