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
  <!-- <div class="fixed w-full h-full bg-black/50 z-10 pointer-events-none"></div> -->

  <CarouselContent>
    {#if data?.banners}
      {#each data.banners.filter((item) => item.title === "Home Slider") as slider, i}
        <CarouselItem>
            <img
              src={slider.desktop_image}
              alt="Slide {i}"
              class="object-cover h-screen w-full brightness-50"
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
    <CarouselNext class="static translate-y-0 cursor-pointer" variant="outline" size="icon" />
  </div>
</Carousel>
