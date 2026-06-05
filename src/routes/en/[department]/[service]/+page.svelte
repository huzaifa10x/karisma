<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";
  import GlobalBanner from "$lib/components/GlobalBanner.svelte";

  let { data } = $props();

  function addCheckToBold(html: string) {
    return html.replace(
      /<b>(.*?)<\/b>/g,
      `<b><span class="inline-flex items-center gap-2">
      <span class='text-[#008000] -ml-5'>✓</span>$1</span>
    </b>`,
    );
  }
</script>

<Navbar />
<GlobalBanner
  image={data?.service?.banner_image}
  text={data?.service?.service_name}
/>

<section class="bg-primary">
  <div class="">
    <div class="bg-[#c4a98863] py-10">
      <div class="mx-auto max-w-375 px-6">
        <div class="grid md:grid-cols-2 gap-10">
          <div>
            <img class="w-full" src={data?.service?.service_image} alt="" />
          </div>
          <div class="space-y-3">
            <h1 class="text-secondary-foreground text-[34px] font-seasons">
              {data?.service?.service_name}
            </h1>
            <div class="text-xl text-c5 space-y-5">
              {@html data?.service?.service_description}
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="py-10">
      <div class="space-y-15">
        {#each data?.service?.servicesections as sections, index}
          <div
            class={`p-8 rounded-xl ${
              index % 2 === 0 ? "bg-primary" : "bg-[#c4a98863]"
            }`}
          >
            <h2
              class="text-3xl text-secondary mx-auto max-w-375 px-6 font-seasons mb-3"
            >
              {sections?.section_title}
            </h2>
            <div
              class="space-y-3 mx-auto max-w-375 px-6 text-xl text-c5 [&_ul]:pl-6 [&_ul]:space-y-3 [&_h4]:text-3xl [&_h4]:text-secondary [&_h4]:font-seasons [&_h4]:mb-3"
            >
              {@html addCheckToBold(sections?.section_description)}
            </div>
          </div>
        {/each}
      </div>
    </section>

    <section class="py-10 bg-[#c4a98863]">
      <div class="space-y-15 mx-auto max-w-375 px-6">
        <div class="grid md:grid-cols-3 gap-9">
          {#each data?.service?.subservices as service}
            <a
              href={`${data.service.canonical_name}/${service.canonical_name}`}
              class="relative group shadow-[0px_0px_15px_8px_rgba(0,0,0,0.19)] overflow-hidden flex flex-col items-start justify-between space-y-3 p-5 rounded-bl-2xl rounded-tr-2xl"
            >
              <div
                class="w-0 h-0 bottom-0 left-0 group-hover:w-full duration-300 group-hover:h-full bg-[#AA9380] absolute top-0"
              ></div>
              <div
                class="text-[22px] font-seasons text-secondary relative z-10"
              >
                {service.sub_service_name}
              </div>
              <p class="[&_b]:hidden text-c5 relative z-10">
                {@html service.small_description}
              </p>
              <div class="text-c5 font-bold relative z-10">Read More</div>
            </a>
          {/each}
        </div>
      </div>
    </section>

    <section class="py-10 space-y-4">
      <div class="space-y-15 mx-auto max-w-375 px-6">
        <h2 class="text-secondary font-seasons text-3xl">Related Doctors</h2>
        <div class="grid md:grid-cols-3 gap-7">
          {#each data?.service?.doctors as service}
            <a href={`/en/doctor/${service?.canonical_name}`}>
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
