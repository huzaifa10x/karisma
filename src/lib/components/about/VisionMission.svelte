<script lang="ts">
  let data = $props();
</script>

<section class="bg-primary py-10 space-y-8">
  <div class="max-w-5xl mx-auto px-6">
    <div class="md:flex items-center gap-7 space-y-6">
      <div>
        <img
          class="rounded-xl"
          src={data.items.data.section1_image ||
            "/images/image-placeholder.png"}
          alt=""
          onerror={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "/images/image-placeholder.png";
          }}
        />
      </div>
      <div class="space-y-2">
        <div class="text-secondary text-center lg:text-left font-bold lg:font-normal text-[25px] lg:text-3xl">
          {data.items.data.section1.title}
        </div>
        <p class="text-c5 lg:text-xl lg:leading-9 leading-7 max-w-375 text-center lg:text-left">
          {@html data.items.data.section1.description}
        </p>
      </div>
    </div>
  </div>
  <div class="max-w-5xl mx-auto px-6">
    <div class="flex md:flex-row items-center flex-col-reverse gap-7 space-y-6">
      <div class="space-y-2">
        <div class="text-secondary text-center lg:text-left font-bold lg:font-normal text-[25px] lg:text-3xl">
          {data.items.data.section2.title}
        </div>
        <p class="text-c5 lg:text-xl lg:leading-9 leading-7 max-w-375 text-center lg:text-left">
          {@html data.items.data.section2.description}
        </p>
      </div>
      <div>
        <img
          class="rounded-xl"
          src={data.items.data.story_image || "/images/image-placeholder.png"}
          alt=""
          onerror={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "/images/image-placeholder.png";
          }}
        />
      </div>
    </div>
  </div>
</section>
