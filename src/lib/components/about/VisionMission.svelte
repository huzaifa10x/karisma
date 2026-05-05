<script>
  let data = $props();
  $inspect(data.items.data);
</script>

<section class="bg-primary py-10 space-y-8">
  <div class="max-w-7xl mx-auto px-6">
    <div class="flex items-center gap-7">
      <div>
        <img class="rounded-xl" src={data.items.data.section1_image} alt="" />
      </div>
      <div class="space-y-2">
        <div class="text-secondary font-medium text-3xl">
          {data.items.data.section1.title}
        </div>
        <p class="text-c5 text-xl leading-9">
          {@html data.items.data.section1.description}
        </p>
      </div>
    </div>
  </div>
  <div class="max-w-7xl mx-auto px-6">
    <div class="flex items-center gap-7">
      <div class="space-y-2">
        <div class="text-secondary font-medium text-3xl">
          {data.items.data.section2.title}
        </div>
        <p class="text-c5 text-xl leading-9">
          {@html data.items.data.section2.description}
        </p>
      </div>
      <div>
        <img class="rounded-xl" src={data.items.data.story_image} alt="" />
      </div>
    </div>
  </div>
</section>
