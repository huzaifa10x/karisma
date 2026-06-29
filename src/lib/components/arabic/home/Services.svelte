<script lang="ts">
  import Autoplay from "embla-carousel-autoplay";
  import { CarouselContent } from "$lib/components/ui/carousel/index.ts";
  import CarouselItem from "$lib/components/ui/carousel/carousel-item.svelte";
  import Carousel from "$lib/components/ui/carousel/carousel.svelte";
  
  let { items } = $props();
</script>

<section class="py-10 bg-primary" dir="rtl">
  <div class="mx-auto max-w-7xl px-6 space-y-10">
    <div class="text-[#577065] text-[30px] lg:text-[34px] text-center font-seasons">
      الخدمات:
    </div>
    
    <p class="text-center text-lg text-c5 font-cabinet-grotesk max-w-3xl mx-auto">
نعمل على تعزيز ثقتك بنفسك وجاذبيتك من خالل الجمع بين العلوم الطبية المتقدمة والفن من خالل تقديم الخدمات في األقسام التالية: -
    </p>
    
    <Carousel
      opts={{
        align: "start",
        loop: true,
        direction: "rtl"
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
          <CarouselItem class="md:basis-1/3 lg:basis-1/3">
            <a href={`/ar/departments/${service.link}`}>
              <div
                class="bg-white group rounded-2xl py-10 px-5 lg:p-10 flex justify-between h-107.5 flex-col"
              >
                <div class="text-[#577065] text-[24px] lg:text-2xl">
                  {service.title_arabic || service.title}
                </div>
                
                <div class="border-b w-full"></div>
                
                <div class="text-c5 text-lg">
                  {service.designation_arabic || service.designation || ""}
                </div>
                
                <div class="relative overflow-hidden rounded-2xl">
                  <div
                    class="w-full h-full scale-0 group-hover:scale-100 duration-500 bg-secondary-foreground/50 absolute inset-0"
                  ></div>
                  <img
                    class="w-full h-56 object-cover rounded-2xl"
                    src={service.desktop_image || "/images/image-placeholder.png"}
                    onerror={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        "/images/image-placeholder.png";
                    }}
                    alt={service.title_arabic || service.title || "صورة الخدمة"}
                  />
                </div>
                
                <div class="text-[#577065] font-semibold text-right">
                  عرض التفاصيل
                </div>
              </div>
            </a>
          </CarouselItem>
        {/each}
      </CarouselContent>
    </Carousel>
  </div>
</section>