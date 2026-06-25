<script lang="ts">
  let data = $props();
</script>

<section class="bg-primary py-10 space-y-8 flex flex-col items-center">
  <div class="lg:w-300 px-6">
    <div class="lg:flex items-center gap-7.5 space-y-6">
      <img
        class="rounded-xl lg:w-[30%] md:h-50 object-cover lg:h-57.5"
        src={data.items.data.section1_image || "/images/image-placeholder.png"}
        alt=""
        onerror={(e) => {
          (e.currentTarget as HTMLImageElement).src =
            "/images/image-placeholder.png";
        }}
      />
      <div class="space-y-0 w-full lg:w-[60%]">
        <div
          class="text-[#405d53] text-center lg:text-left font-bold text-[22px] lg:text-[26px]/[34px]"
        >
          {data.items.data.section1.title}
        </div>
        <p
          class="text-c5 font-light text-center lg:text-left px-3 py-2 lg:px-0 lg:py-0
          text-[16px]/[24px]
         lg:text-[20px] lg:leading-7"
        >
          {@html data.items.data.section1.description}
        </p>
      </div>
    </div>
  </div>
  <div class="lg:w-300 px-6">
    <div class="flex md:flex-row justify-end items-center flex-col-reverse gap-7">
      <div class=" w-full md:w-2/4 lg:w-[60%]  px-3 py-2 lg:px-2 lg:py-0">
        <div
          class="text-[#405d53] text-center lg:text-left font-bold text-[22px] lg:text-[26px]/[34px]"
        >
          {data.items.data.section2.title}
        </div>
        <p
          class="text-c5 font-light text-center lg:text-left
          text-[16px]/[24px] lg:text-[20px]/[28px]"
        >
          {@html data.items.data.section2.description}
        </p>
      </div>
        <img
          class="rounded-xl md:w-2/4 lg:w-[30%] w-full md:h-50 object-cover lg:h-57.5"
          src={data.items.data.story_image || "/images/image-placeholder.png"}
          alt=""
          onerror={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "/images/image-placeholder.png";
          }}
        />
    </div>
  </div>
</section>
