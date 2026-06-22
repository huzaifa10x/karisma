<script lang="ts">
  import Autoplay from "embla-carousel-autoplay";
  import CarouselContent from "../ui/carousel/carousel-content.svelte";
  import CarouselItem from "../ui/carousel/carousel-item.svelte";
  import Carousel from "../ui/carousel/carousel.svelte";
  let { items } = $props();
</script>

<section class="py-10 bg-primary">
  <div class="mx-auto max-w-7xl px-6 space-y-10">
    <div class="text-secondary  text-[30px] lg:text-[34px] text-center font-seasons capitalize">
      Services
    </div>
    <p class="text-center text-lg text-c5 font-cabinet-grotesk">
      We are elevating your confidence and attractiveness by combining advanced
      medical science with artistry by offering services in below departments
    </p>
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
        {#each items.banners as service}
          <CarouselItem class=" md:basis-1/3 lg:basis-1/3">
            <a href={`/en/departments/${service.link}`}>
              <div
                class="bg-white group rounded-2xl py-10 px-5 lg:p-10 flex justify-between h-107.5 flex-col rounded-br-none"
              >
                <div class="text-secondary  text-[24px] lg:text-2xl capitalize">
                  {service.title}
                </div>
                <div class="border-b w-full"></div>
                <div class="text-c5 text-lg">{service.designation}</div>
                <div
                  class="relative overflow-hidden rounded-2xl rounded-br-none"
                >
                  <div
                    class="w-full h-full scale-0 group-hover:scale-100 duration-500 bg-secondary-foreground/50 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  ></div>
                  <img
                    class="w-full h-56 object-cover rounded-2xl rounded-br-none"
                    src={service.desktop_image ||
                      "/images/image-pl'aceholder.png"}
                    onerror={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        "/images/image-placeholder.png";
                    }}
                    alt=""
                  />
                </div>
                <div class="text-secondary font-semibold capitalize">
                  View details
                </div>
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
