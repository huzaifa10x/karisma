<script lang="ts">
  import Fade from "embla-carousel-fade";
  // 1. Autoplay plugin import kiya
  import Autoplay from "embla-carousel-autoplay";
  import Carousel from "./ui/carousel/carousel.svelte";
  import CarouselItem from "./ui/carousel/carousel-item.svelte";
  import CarouselContent from "./ui/carousel/carousel-content.svelte";
  import CarouselNext from "./ui/carousel/carousel-next.svelte";
  import CarouselPrevious from "./ui/carousel/carousel-previous.svelte";

  let {
    items,
  }: {
    items: {
      banners: Array<{
        title: string;
        description: string;
        desktop_image?: string;
      }>;
    };
  } = $props();
</script>

<Carousel
  plugins={[Fade(), Autoplay({ delay: 3000, stopOnInteraction: false })]}
  opts={{ loop: true }}
  class="relative w-full mx-auto h-[50vh] lg:h-screen"
>
  <CarouselContent>
    {#if items?.banners}
      {#each items.banners.filter((item: any) => item.title === "Home Slider") as slider, i}
        <CarouselItem>
          <img
            src={slider.desktop_image || "/images/image-placeholder.png"}
            alt={`Slide ${i}`}
            class="h-[50vh] lg:h-screen w-full object-cover brightness-65 md:h-screen topSpacing"
            onerror={(e) => {
              (e.currentTarget as HTMLImageElement).src =
                "/images/image-placeholder.png";
            }}
          />
        </CarouselItem>
      {/each}
    {/if}
  </CarouselContent>

  <div
    class=" mt-0 lg:mt-4 w-full flex justify-between p-0 lg:p-10 gap-4 absolute z-1 bottom-3"
  >
    <CarouselPrevious
      class="static translate-y-0 bg-transparent border-0 cursor-pointer"
      size="icon"
    />
    <CarouselNext
      class="static translate-y-0 bg-transparent border-0 cursor-pointer"
      size="icon"
    />
  </div>
</Carousel>
