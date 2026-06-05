<script lang="ts">
  import GlobalBanner from "$lib/components/GlobalBanner.svelte";
  import Navbar from "$lib/components/Navbar.svelte";

  let { data } = $props();

  function addCheckToBold(html: string) {
    return html.replace(
      /<b>(.*?)<\/b>/g,
      `<b><span class="inline-flex items-center gap-2">
      <span class='text-[#008000] -ml-5'>✓</span>
      $1
    </span></b>`,
    );
  }
</script>

<Navbar />
<GlobalBanner
  image={data?.department?.data?.banner_image}
  text={data?.department?.data?.department_name}
/>

<section class="bg-primary">
  <div class="">
    <div class="bg-[#c4a98863] py-10">
      <div class="mx-auto max-w-375 px-6">
        <div class="grid md:grid-cols-2 gap-10">
          <div>
            <img
              class="w-full"
              src={data?.department?.data?.department_image}
              alt=""
            />
          </div>
          <div class="space-y-3">
            <h1 class="text-secondary-foreground text-[34px] font-seasons">
              {data?.department?.data?.department_name}
            </h1>
            <div class="text-xl text-c5 space-y-5">
              {@html data?.department?.data?.department_description}
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="py-10">
      <div class="space-y-15">
        {#each data?.department?.data?.sections as sections, index}
          <div
            class={`p-8 rounded-xl ${
              index % 2 === 0 ? "bg-primary" : "bg-[#c4a98863]"
            }`}
          >
            <div class="mx-auto max-w-375 px-6">
              <h2 class="text-[26px] text-secondary font-seasons mb-3">
                {sections?.section_title}
              </h2>
            </div>

            <div
              class="space-y-3 text-[17px] text-c5 [&_ul]:space-y-3 [&_ul]:pl-6 mx-auto max-w-375 px-6"
            >
              {@html addCheckToBold(sections?.section_description ?? "")}
            </div>
          </div>
        {/each}
      </div>
    </section>

    <!-- Related Services -->
    <section class="py-10 space-y-4 bg-[#c4a98863]">
      <div class="space-y-15 mx-auto max-w-375 px-6">
        <h2 class="text-secondary font-seasons text-3xl">Relateds Services</h2>
        <div class="grid md:grid-cols-3 gap-7">
          {#each data?.department?.data?.listItems as service}
            <a
              href={`${data?.department?.data?.canonical_name}/${service?.canonical_name}`}
            >
              <div
                class="rounded-2xl overflow-hidden shadow/50 shadow-lg drop-shadow-2xl relative"
              >
                <img src={service?.service_image} alt="" />
                <div class="p-6 absolute z-20 bottom-0 bg-primary w-full">
                  <div class="text-secondary font-seasons text-2xl">
                    {service?.service_name}
                  </div>
                  <span class="text-c5 font-semibold capitalize">Read more</span
                  >
                </div>
              </div>
            </a>
          {/each}
        </div>
      </div>
    </section>

    <!-- Related Doctors -->
    <section class="py-10 space-y-4">
      <div class="space-y-15 mx-auto max-w-375 px-6">
        <h2 class="text-secondary font-seasons text-3xl">Related Doctors</h2>
        <div class="grid md:grid-cols-3 gap-7">
          {#each data?.department?.data?.doctors as dept}
            <a href={`/en/doctor/${dept?.canonical_name}`}>
              <div
                class="bg-white group rounded-2xl p-10 space-y-5 rounded-br-none"
              >
                <div class="text-secondary text-2xl capitalize">
                  {dept?.doctor_name}
                </div>
                <div class="border-b w-full"></div>
                <div class="text-c5 text-lg">{dept?.designation}</div>
                <div
                  class="relative overflow-hidden rounded-2xl rounded-br-none"
                >
                  <div
                    class="w-full h-full scale-0 group-hover:scale-100 duration-500 bg-secondary-foreground/50 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  ></div>
                  <img
                    class="w-full object-cover rounded-2xl rounded-br-none"
                    src={"https://admin.karismamc.com/public/storage/" +
                      dept?.photo || "/images/image-placeholder.png"}
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
