<script>
  let data = $props();
</script>

<section class="bg-primary py-10 space-y-8">
  <div class="max-w-7xl mx-auto px-6">
    <div class="text-center text-secondary font-seasons text-[22px] lg:text-[35px] mb-6">
      Our Story
    </div>
    <div
      class="text-center space-y-5 max-w-4xl text-[16px] lg:text-lg mx-auto text-c5 leading-6 lg:leading-9"
    >
      {@html data.items.data.our_story.content}
    </div>
  </div>

  <div class="flex items-center justify-center gap-6 px-14 lg:px-0">
    <div class="w-35 h-0.5 bg-secondary"></div>
    <div
      class="flex items-center justify-center rotate-45 w-10 h-7 border border-secondary"
    >
      <div class="w-2.5 h-2.5 bg-secondary"></div>
    </div>
    <div class="w-35 h-0.5 bg-secondary"></div>
  </div>
</section>
