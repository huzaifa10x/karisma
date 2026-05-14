<script lang="ts">
  import Autoplay from "embla-carousel-autoplay";
  import CarouselContent from "../ui/carousel/carousel-content.svelte";
  import CarouselItem from "../ui/carousel/carousel-item.svelte";
  import CarouselNext from "../ui/carousel/carousel-next.svelte";
  import CarouselPrevious from "../ui/carousel/carousel-previous.svelte";
  import Carousel from "../ui/carousel/carousel.svelte";
  let { items } = $props();
</script>

<section class="py-10 bg-primary">
  <div class="mx-auto max-w-7xl px-6 space-y-10">
    <div class="text-secondary font-seasons text-4xl text-center capitalize">
      Our doctors
    </div>

    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      class="w-full"
    >
      <CarouselContent>
        {#each items.doctors.slice(1, items.length) as doctor}
          <CarouselItem class="md:basis-1/2 lg:basis-1/3">
            <a href={doctor.link}>
              <div
                class="bg-white group rounded-2xl p-10 space-y-5 rounded-br-none"
              >
                <div class="text-secondary text-2xl capitalize">
                  {doctor.canonical_name}
                </div>
                <div class="border-b w-full"></div>
                <div class="text-c5 text-lg">{doctor.designation}</div>
                <div
                  class="relative overflow-hidden rounded-2xl rounded-br-none"
                >
                  <div
                    class="w-full h-full scale-0 group-hover:scale-100 duration-500 bg-secondary-foreground/50 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  ></div>
                  <img
                    class="w-full object-cover rounded-2xl rounded-br-none"
                    src={doctor.image || "/images/image-placeholder.png"}
                    onerror={(e) => {
                      (e.currentTarget as HTMLImageElement).src = "/images/image-placeholder.png";
                    }}
                    alt=""
                  />
                </div>
                <div class="text-secondary font-semibold">Read more</div>
              </div>
            </a>
          </CarouselItem>
        {/each}
      </CarouselContent>
      <!-- <CarouselPrevious class="left-2" />
      <CarouselNext class="right-2" /> -->
    </Carousel>
  </div>
</section>
