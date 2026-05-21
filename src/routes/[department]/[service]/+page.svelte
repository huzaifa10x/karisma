<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";
  import GlobalBanner from "$lib/components/GlobalBanner.svelte";

  let { data } = $props();
</script>

<Navbar />
<GlobalBanner
  image={data?.service?.banner_image}
  text={data?.service?.service_name}
/>

<section class="py-10 bg-primary">
  <div class="mx-auto max-w-375 px-6">
    <div class="grid md:grid-cols-2 gap-10">
      <div>
        <img class="w-full" src={data?.service?.service_image} alt="" />
      </div>
      <div class="space-y-3">
        <h1 class="text-secondary-foreground text-4xl font-seasons">
          {data?.service?.service_name}
        </h1>
        <div class="text-xl text-c5 space-y-5">
          {@html data?.service?.service_description}
        </div>
      </div>
    </div>

    <section class="py-10">
      <div class="space-y-15">
        {#each data?.service?.servicesections as sections, index}
          <div class="">
            <h2 class="text-3xl text-secondary font-seasons mb-3">
              {sections?.section_title}
            </h2>
            <div
              class="space-y-3 text-xl text-c5 [&_ul]:space-y-3 [&_h4]:text-3xl [&_h4]:text-secondary [&_h4]:font-seasons [&_h4]:mb-3"
            >
              {@html sections?.section_description}
            </div>
          </div>
        {/each}
      </div>
    </section>

    <section class="py-10 space-y-4">
      <h2 class="text-secondary font-seasons text-3xl">Related Doctors</h2>
      <div class="space-y-15">
        <div class="grid md:grid-cols-3 gap-7">
          {#each data?.service?.doctors as service}
            <a href={service?.link}>
              <div
                class="bg-white group rounded-2xl p-10 space-y-5 rounded-br-none"
              >
                <div class="text-secondary text-2xl capitalize">
                  {service?.doctor_name}
                </div>
                <div class="border-b w-full"></div>
                <div class="text-c5 text-lg">{service?.designation}</div>
                <div
                  class="relative overflow-hidden rounded-2xl rounded-br-none"
                >
                  <div
                    class="w-full h-full scale-0 group-hover:scale-100 duration-500 bg-secondary-foreground/50 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  ></div>
                  <img
                    class="w-full object-cover rounded-2xl rounded-br-none"
                    src={"https://admin.karismamc.com/public/storage/" +
                      service?.photo || "/images/image-placeholder.png"}
                    alt=""
                    onerror={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        "/images/image-placeholder.png";
                    }}
                  />
                </div>
                <div class="text-secondary font-semibold">Read more</div>
              </div>
            </a>
          {/each}
        </div>
      </div>
    </section>
  </div>
</section>
