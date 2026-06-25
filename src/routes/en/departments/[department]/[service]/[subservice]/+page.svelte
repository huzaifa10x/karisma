<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";

  const { data } = $props();
  const service = data?.service[0];

  function processHtml(html: string | null | undefined): string {
    if (!html || typeof window === "undefined") return html ?? "";

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    doc.querySelectorAll("li").forEach((li) => {
      const isNested = li.parentElement?.closest("li") !== null;
      const icon = isNested ? "−" : "✓";

      const span = document.createElement("span");
      span.className = "text-[#008000]  px-2 font-bold";
      span.textContent = icon;

      li.prepend(span);
      li.prepend(document.createTextNode(" "));
    });

    return doc.body.innerHTML;
  }
</script>

<Navbar />
<section class="bg-primary py-3">
  <div class="mx-auto w-full  px-5 lg:px-10 pt-20 lg:pt-40">
    <h1
      class="text-[#405d53] font-bold text-[22px]/[26px] lg:text-[26px]/[34px] font-seasons"
    >
      {service.sub_service_name}
    </h1>

    <div
      class="text-c5 space-y-5 font-light [&_b]:font-semibold text-[16px]/[24px] lg:text-[18px]/[28px]"
    >
      {@html service.small_description}
    </div>
    <img
      src={"https://admin.karismamc.com/public/storage/" + service?.image}
      alt={service.sub_service_name}
      class="w-full h-50 lg:h-[70vh] object-cover my-5 px-5"
    />

    {#if service.section1_title}
      <h2
        class="text-[#405d53] font-bold text-[22px] lg:text-[26px]/[34px] font-seasons"
      >
        {service.section1_title}
      </h2>
      <div
        class="text-c5 space-y-5 font-light [&_b]:font-semibold  text-[16px] lg:text-[18px]/[28px] mb-5"
      >
        {@html processHtml(service.section1_description)}
      </div>
    {/if}

    <div class="flex flex-wrap gap-4 lg:gap-4 my-10">
      {#if service.section2_title}
      <div class="bg-[#c4a98863] w-full lg:w-[48%] p-5 rounded border border-[#ccc]">
          <h2
            class="text-[#405d53] font-normal text-[22px] lg:text-[30px]/[39px]"
          >
            {service.section2_title}
          </h2>
          <div
            class="text-c5 space-y-5 font-light [&_b]:font-semibold  text-[16px] lg:text-[18px]/[28px] mb-5"
          >
            {@html processHtml(service.section2_description)}
          </div>
        </div>
        {/if}

        {#if service.section3_title}
      <div class="bg-[#c4a98863] w-full lg:w-[48%] p-5 rounded border border-[#ccc]">
          <h2
            class="text-[#405d53] font-normal text-[22px] lg:text-[30px]/[39px]"
          >
            {service.section3_title}
          </h2>
          <div
            class="text-c5 space-y-5 font-light [&_b]:font-semibold text-[16px] lg:text-[18px]/[28px] mb-5"
          >
            {@html processHtml(service.section3_description)}
          </div>
        </div>
        {/if}
    </div>
    {#if service.section4_title}
      <h2
        class="text-[#405d53] font-bold text-[22px] lg:text-[26px]/[34px] font-seasons"
      >
        {service.section4_title}
      </h2>
      <div
        class="text-c5 space-y-5 font-light [&_b]:font-semibold  text-[16px] lg:text-[18px]/[28px]"
      >
        {@html processHtml(service.section4_description)}
      </div>
    {/if}
  </div>
</section>
 {#if service.section5_title}
<div class="bg-[#D1BB9F] px-5 py-5 lg:py-10 lg:px-10  w-full flex justify-center">
  <div class="w-full">
   
      <h2
        class="text-[#405d53] font-bold text-[22px] lg:text-[26px]/[34px] font-seasons"
      >
        {service.section5_title}
      </h2>
      <div
        class="text-c5 space-y-5 font-light [&_b]:font-semibold  text-[16px] lg:text-[18px]/[28px]"
      >
        {@html processHtml(service.section5_description)}
      </div>
   
  </div>
</div>
 {/if}