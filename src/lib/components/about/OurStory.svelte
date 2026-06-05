<script>
  let data = $props();
</script>

<section class="bg-primary py-10 space-y-8">
  <div class="max-w-7xl mx-auto px-6">
    <div class="text-center text-secondary font-seasons text-[35px] mb-6">
      Our Story
    </div>
    <div
      class="text-center space-y-5 max-w-4xl text-lg mx-auto text-c5 leading-9"
    >
      {@html data.items.data.our_story.content}
    </div>
  </div>

  <div class="flex items-center justify-center gap-6">
    <div class="w-35 h-0.5 bg-secondary"></div>
    <div
      class="flex items-center justify-center rotate-45 w-5 h-5 border-1 border-secondary"
    >
      <div class="w-2.5 h-2.5 bg-secondary"></div>
    </div>
    <div class="w-35 h-0.5 bg-secondary"></div>
  </div>
</section>
