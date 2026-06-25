<script lang="ts">
  import DoctorsSlider from "$lib/components/DoctorsSlider.svelte";
  import GlobalBanner from "$lib/components/GlobalBanner.svelte";
  import Navbar from "$lib/components/Navbar.svelte";

  let { data } = $props();

  function processHtml(html: string | null | undefined): string {
    if (!html || typeof window === "undefined") return html ?? "";

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    doc.querySelectorAll("li").forEach((li) => {
      const isNested = li.parentElement?.closest("li") !== null;
      const icon = isNested ? "−" : "✓";

      const span = document.createElement("span");
      span.className = "text-[#008000] -ml-7 px-2 font-bold";
      span.textContent = icon;

      li.prepend(span);
      li.prepend(document.createTextNode(" "));
    });

    return doc.body.innerHTML;
  }
</script>

<svelte:head>
  <title>{data?.department?.data?.meta_title || "karisma Medical Center"}</title>
  <meta
    name="description"
    content={data?.department?.data?.meta_description ||
      "Best aesthetic and cosmetic treatments in Sharjah."}
  />

  <meta
    name="keywords"
    content={data?.department?.data?.meta_keyword ||
      "beauty clinic, cosmetic clinic, sharjah, karisma medical center"}
  />

  <meta
    property="og:title"
    content={data?.department?.data?.meta_title || "karisma Medical Center"}
  />

  <meta
    property="og:description"
    content={data?.department?.data?.meta_description ||
      "Best aesthetic and cosmetic treatments in Sharjah."}
  />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content={data?.department?.data?.meta_title || "karisma Medical Center"}
  />
  <meta
    name="twitter:description"
    content={data?.department?.data?.meta_description ||
      "Best aesthetic and cosmetic treatments in Sharjah."}
  />

  <link rel="canonical" href={data?.department?.data?.canonical_name} />

</svelte:head>

<Navbar />
<GlobalBanner
  image={data?.department?.data?.banner_image}
  text={data?.department?.data?.department_name}
/>

<section class="bg-primary ">
    <div class="bg-[#c4a98863] py-10 lg:px-10">
      <div class="mx-auto lg:max-w-375 px-6">
        <div class="grid md:grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <img
              class="md:w-2/4 lg:w-full object-cover"
              src={data?.department?.data?.department_image}
              alt=""
            />
          </div>
          <div class="space-y-3 md:w-full lg:w-full">
            <h1
              class="text-[#405d53] font-bold text-[22px] lg:text-[26px]/[34px] font-seasons"
            >
              {data?.department?.data?.department_name}
            </h1>
            <div
              class="text-c5 space-y-5 font-light [&_b]:font-semibold text-[16px]/[24px] lg:text-[18px]/[28px]"
            >
              {@html data?.department?.data?.department_description}
            </div>
          </div>
        </div>
      </div>
    </div>

   
    <section class="">
      {#each data?.department?.data?.sections as sections, index}
        <div
          class={`p-8 lg:px-10 ${
            index % 2 === 0 ? "bg-primary" : "bg-[#c4a98863]"
          }`}
        >
          <div class="px-0 lg:px-2">
            <h2
              class="text-[22px] lg:text-[26px]/[34px] font-bold text-[#405d53] font-seasons mb-3"
            >
              {sections?.section_title}
            </h2>
          </div>

          <div
            class=" lg:space-y-3 text-[16px] lg:text-[18px]/[28px] 
            font-light
            [&_b]:font-semibold [&_li_b]:font-semibold
            text-c5
            [&_ul]:space-y-1 [&_ul]:pl-6
            mx-auto 
        [&_h4]:text-[22px] lg:[&_h4]:text-[26px]/[34px] [&_h4]:text-[#405d53] [&_h4]:font-bold [&_h4]:font-[seasons]"
          >
            <!-- Process each section description individually -->
            {@html processHtml(sections?.section_description)}
          </div>
        </div>
      {/each}
    </section>

    <!-- Related Services -->
     {#if data?.department?.data?.listItems && data.department.data.listItems.length > 0}
    <section class="py-10 space-y-4 bg-[#D1BB9F]">
      <div class="space-y-5 mx-auto max-w-375 lg:px-10">
        <h2 class="text-[26px]/[34px] font-bold text-[#577065] font-seasons">
          Related Services
        </h2>
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-7 w-[95%] bg-[#D1BB9F]">
  {#each data?.department?.data?.listItems as service}
    <a href={`${data?.department?.data?.canonical_name}/${service?.canonical_name}`}>
      <div class="rounded-2xl overflow-hidden shadow-[0_0_13px_#06060659] relative bg-[#D1BB9F] ">
        
        <div class="h-70 lg:h-100 overflow-hidden">
          <img
            src={service?.service_image ?? "/images/image-placeholder.png"}
            class="w-full  object-center object-cover transition-transform duration-500 ease-in-out hover:scale-110 "
            alt={service?.service_name}
          />
        </div>

        <div class="md:p-3 lg:p-6 absolute z-20 bottom-0 bg-primary w-full">
          <div class="text-[#577065] text-[22px]/[33px] font-[serif]">
            {service?.service_name}
          </div>
          <span class="text-c5 font-semibold capitalize">Read more</span>
        </div>
      </div>
    </a>
  {/each}
</div>
      </div>
    </section>
    {/if}

    <!-- Related Doctors -->
    {#if data?.department?.data?.doctors && data.department.data.doctors.length > 0}
      <DoctorsSlider docData={data?.department?.data?.doctors} />
    {/if}
</section>
