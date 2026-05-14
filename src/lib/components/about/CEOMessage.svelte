<script lang="ts">
  let data = $props();
  $inspect(data.items.data);
</script>

<section class="bg-primary py-10 space-y-8 px-6">
  <div class="max-w-5xl mx-auto px-6 bg-[#d1bb9f] rounded-xl">
    <div class="md:flex items-center gap-7 py-6 space-y-6">
      <div>
        <img
          class="rounded-xl"
          src={data.items.data.ceo_image || "/images/image-placeholder.png"}
          alt=""
          onerror={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "/images/image-placeholder.png";
          }}
        />
      </div>
      <div class="space-y-2">
        <div class="text-secondary font-medium text-3xl">CEO Message</div>
        <p class="text-c5 lg:leading-7 leading-7 max-w-275">
          {@html data.items.data.ceo_message.ceoMessageContent}
        </p>
        <div class="text-secondary font-medium text-2xl">
          {data.items.data.ceo_message.ceoName}
        </div>
        <div class="text-c5">
          {data.items.data.ceo_message.ceoDesignation}
        </div>
      </div>
    </div>
  </div>
</section>
