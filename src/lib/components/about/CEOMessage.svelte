<script lang="ts">
  let data = $props();
</script>

<section class="bg-primary py-10 space-y-8 px-0 lg:px-6">
  <div class="md:w-5xl lg:w-7xl mx-auto px-6 bg-[#d1bb9f] rounded-xl">
    <div class="lg:flex items-center gap-7 py-6 space-y-6">
      <div class="flex justify-center item-center">
        <img
          class="md:w-auto md:h-100 md:object-cover lg:object-contain lg:h-110"
          src={data.items.data.ceo_image || "/images/image-placeholder.png"}
          alt=""
          onerror={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "/images/image-placeholder.png";
          }}
        />
      </div>
      <div class="space-y-2">
        <div class="text-[#577065] text-center lg:text-left font-bold lg:font-normal text-[25px] lg:text-3xl">CEO Message</div>
        <p class="text-c5 [&_p]:mt-2 text-[16px] md:text-[17px]/[1.8] lg:text-[20px]/[36px] lg:leading-7 leading-7 max-w-275 text-center lg:text-left">
          {@html data.items.data.ceo_message.ceoMessageContent}
        </p>
        <div class="text-[#577065] font-bold text-2xl text-center lg:text-left">
          {data.items.data.ceo_message.ceoName}
        </div>
        <div class="text-c5 text-center lg:text-left">
          {data.items.data.ceo_message.ceoDesignation}
        </div>
      </div>
    </div>
  </div>
</section>
