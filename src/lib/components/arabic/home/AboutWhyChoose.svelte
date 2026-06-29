<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  
  let {
    items,
  }: {
    items: {
      banners: Array<{
        title: string;
        description: string;
        description_arabic: string;
        desktop_image?: string;
      }>;
    };
  } = $props();
</script>

<section class="py-10 bg-primary" dir="rtl">
  <div
    class="grid md:grid-cols-1 lg:grid-cols-2 mx-auto max-w-7xl gap-20 px-10" >     
  <div class="flex md:justify-start lg:justify-center gap-5">
      <div
        class="max-w-82.5 w-full h-99 md:h-120 lg:h-99 overflow-hidden mt-15"
      >
        <img
          src={items.banners[1]?.desktop_image || "/images/image-placeholder.png"}
          alt="صورة من نحن"
          class="w-full h-full object-cover rounded-2xl"
          onerror={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "/images/image-placeholder.png";
          }}
        />
      </div>
      <div
        class="hidden md:hidden lg:flex max-w-82.5 w-full h-99 overflow-hidden"
      >
        <img
          src={items.banners[0]?.desktop_image || "/images/image-placeholder.png"}
          alt={items.banners[0]?.title || "صورة بانر"}
          class="w-full h-full object-cover rounded-2xl"
          onerror={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "/images/image-placeholder.png";
          }}
        />
      </div>
    </div>
    <div class="max-w-2xl space-y-4">
      {#each items.banners.filter((item) => item.title === "About us content") as content}
        <div class="text-[#577065] text-[35px] font-seasons font-bold">
          من نحن:
        </div>
        <div class="text-c5 text-lg font-cabinet-grotesk">
          {content.description_arabic}
        </div>
      {/each}
      
      <div class="lg:flex justify-start">
        <a href="/ar/about">
          <Button text="اقرأ المزيد" />
        </a>
      </div>
    </div>
  </div>
</section>

<section class="py-10 bg-primary" dir="rtl">
  <div
    class="grid md:grid-cols-1 lg:grid-cols-2 mx-auto max-w-7xl gap-20 px-10"
  >
    <div class="max-w-2xl space-y-4">
      {#each items.banners.filter((item) => item.title === "Why choose us?") as content}
        <div class="text-[#577065] text-[34px] font-seasons font-bold">
          لماذا تختارنا؟
        </div>
        <div class="text-c5 text-lg font-cabinet-grotesk">
          {content.description_arabic}
        </div>
      {/each}
      
      <div class="lg:flex justify-start">
        <a href="/ar/about">
          <Button text="اقرأ المزيد" />
        </a>
      </div>
    </div>

    <div>
      {#each items.banners.filter((item) => item.title === "Why choose us?") as imgs}
        <div>
          <img
            src={imgs.desktop_image || "/images/image-placeholder.png"}
            alt="لماذا تختارنا"
            onerror={(e) => {
              (e.currentTarget as HTMLImageElement).src =
                "/images/image-placeholder.png";
            }}
            class="w-80 block mx-auto rounded-2xl image-spin"
          />
        </div>
      {/each}
    </div>
  </div>
</section>