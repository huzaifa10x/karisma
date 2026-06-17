<script>
  import emblaCarouselSvelte from 'embla-carousel-svelte';
  import Autoplay from 'embla-carousel-autoplay';
  let { docData } = $props();
  // Configuration for autoplay
  const options = { loop: true };
  const plugins = [Autoplay({ delay: 3000, stopOnInteraction: false })];
</script>

<section class="py-10 space-y-4 block lg:hidden md:hidden">
  <div class="space-y-3 mx-auto max-w-7xl px-6"> <h2 class="text-[26px] font-bold text-[#405d53] font-seasons">Our Doctors</h2>
      <p class="text-c5 text-[20px]">
            Meet our team of experts, dedicated to crafting smiles that define
            sophistication and excellence.
          </p>

    <div class="overflow-hidden" use:emblaCarouselSvelte={{ options, plugins }}>
      <div class="flex gap-4">
        {#each docData as dept}
          <div class="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%]">
            <a href={`/en/doctor/${dept?.canonical_name}`}>
              <div class="bg-white group rounded-2xl p-9 space-y-5 rounded-br-none h-full border border-gray-100">
                <div class="text-[#577065] text-2xl font-medium capitalize truncate">
                  {dept?.doctor_name}
                </div>
                <div class="border-b w-full"></div>
                <div class="text-c5 text-md h-12">{dept?.designation}</div>
                <div class="relative overflow-hidden rounded-2xl rounded-br-none">
                  <img
                    class="w-full aspect-[3/4] object-cover rounded-2xl rounded-br-none"
                    src={"https://admin.karismamc.com/public/storage/" + dept?.photo}
                    alt={dept?.doctor_name}
                    
                  />
                </div>
                <div class="text-secondary font-semibold">Read more</div>
              </div>
            </a>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

 <section class="py-10 space-y-4 hidden md:block lg:block">
        <div class="space-y-3 mx-auto max-w-375 px-6 md:px-20 ">
          <h2 class="text-[26px] font-bold text-[#405d53] font-seasons">
            Our Doctors
          </h2>
          <p class="text-c5 text-[16px] md:text-[17px]/[1.8] lg:text-[20px]/[36px]">
            Meet our team of experts, dedicated to crafting smiles that define
            sophistication and excellence.
          </p>
          <div class="grid md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-fr h-full">
            {#each docData as dept}
              <a href={`/en/doctor/${dept?.canonical_name}`}>
                <div
                  class="bg-white group rounded-2xl p-9 space-y-5 rounded-br-none"
                >
                  <div class="text-[#577065] text-2xl font-medium capitalize">
                    {dept?.doctor_name}
                  </div>
                  <div class="border-b w-full"></div>
                  <div class="text-c5 text-md">{dept?.designation}</div>
                  <div
                    class="relative overflow-hidden rounded-2xl rounded-br-none"
                  >
                    <div
                      class="w-full h-full scale-0 group-hover:scale-100 duration-500 bg-secondary-foreground/50 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    ></div>
                    
                      <img
                      class="w-full object-cover rounded-2xl rounded-br-none h-full"
                      src={"https://admin.karismamc.com/public/storage/" +
                        dept?.photo || "/images/image-placeholder.png"}
                      alt=""
                      
                      />
                  </div>
                  <div class="text-secondary font-semibold">Read more</div>
                </div>
              </a>
            {/each}
          </div>
        </div>
      </section>