<script>
  let data = $props();
</script>

<section class="bg-primary py-10 space-y-8">
  <div class="max-w-7xl mx-auto px-6">
    <div class="text-center text-secondary font-seasons text-[22px] lg:text-[35px] mb-6">
      Our Story
    </div>
    <div
      class="text-center space-y-5 max-w-4xl text-[16px] md:text-[17px]/[1.8] lg:text-[20px]/[36px] mx-auto text-c5 leading-6 lg:leading-9"
    >
      {@html data.items.data.our_story.content}
    </div>
  </div>

<div class="flex items-center justify-center gap-4">
  <div class="w-24 h-0.5 bg-secondary"></div>

  <div class="flex items-center justify-center w-6 h-6 border border-secondary rotate-45">
    <div class="w-3 h-3 bg-secondary"></div>
  </div>

  <div class="w-24 h-0.5 bg-secondary"></div>
</div>
</section>