<script lang="ts">
  import Fade from "embla-carousel-fade";
  import Carousel from "./ui/carousel/carousel.svelte";
  import CarouselItem from "./ui/carousel/carousel-item.svelte";
  import CarouselContent from "./ui/carousel/carousel-content.svelte";
  import CarouselPrevious from "./ui/carousel/carousel-previous.svelte";
  import CarouselNext from "./ui/carousel/carousel-next.svelte";

  let data = $state(null);
  let loading = $state(true);
  let error = $state(null);

  $effect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://admin.karismamc.com/api/homepage",
        );
        if (!response.ok) throw new Error("Network response was not ok");
        data = await response.json();
      } catch (err) {
        error = err.message;
      } finally {
        loading = false;
      }
    };
    fetchData();
  });
</script>

<Carousel
  plugins={[Fade()]}
  opts={{ loop: true }}
  class="relative w-full mx-auto"
>
  <CarouselContent>
    {#if loading}
      <div
        class="w-full flex items-center justify-center md:h-screen h-[400px] bg-primary"
      >
        <div
          class="rounded-full w-[50px] h-[50px] border-secondary-foreground border-2 animate-spin border-r-0"
        ></div>
      </div>
    {/if}
    {#if data?.banners}
      {#each data.banners.filter((item) => item.title === "Home Slider") as slider, i}
        <CarouselItem>
          <img
            src={slider.desktop_image || "/images/image-placeholder.png"}
            alt={`Slide ${i}`}
            class="h-[400px] w-full object-cover brightness-50 md:h-screen"
            onerror={(e) => {
              e.currentTarget.src = "/images/image-placeholder.png";
            }}
          />
        </CarouselItem>
      {/each}
    {/if}
  </CarouselContent>

  <div
    class="mt-4 w-full flex justify-between p-10 gap-4 absolute z-50 bottom-0"
  >
    <CarouselPrevious
      class="static translate-y-0 cursor-pointer"
      variant="outline"
      size="icon"
    />
    <CarouselNext
      class="static translate-y-0 cursor-pointer"
      variant="outline"
      size="icon"
    />
  </div>
</Carousel>
