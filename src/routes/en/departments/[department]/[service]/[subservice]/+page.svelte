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
<section class="bg-primary py-5">
  <div class="mx-auto w-full lg:w-350 px-5 md:px-20 pt-20 lg:px-0 lg:pt-50">
    <h1
      class="text-[#405d53] font-bold text-[22px] lg:text-[26px]/[34px] font-seasons"
    >
      {service.sub_service_name}
    </h1>

    <div
      class="text-c5 space-y-5 [&>b]:font-semibold text-[16px] md:text-[17px]/[1.8] lg:text-[20px]/[36px]"
    >
      {@html service.small_description}
    </div>
    <img
      src={"https://admin.karismamc.com/public/storage/" + service?.image}
      alt={service.sub_service_name}
      class="w-full h-50 lg:h-150 object-cover my-5"
    />

    {#if service.section1_title}
      <h2
        class="text-[#405d53] font-bold text-[22px] lg:text-[26px]/[34px] font-seasons"
      >
        {service.section1_title}
      </h2>
      <div
        class="text-c5 space-y-5 [&>b]:font-semibold text-[16px] md:text-[17px]/[1.8] lg:text-[20px]/[36px] mb-5"
      >
        {@html processHtml(service.section1_description)}
      </div>
    {/if}

    <div class="flex flex-wrap gap-4 md:gap-0 my-10">
      <div class="bg-[#c4a98863] w-full md:w-2/4 lg:w-2/4 p-5 rounded border border-[#ccc]">
        {#if service.section2_title}
          <h2
            class="text-[#405d53] font-bold text-[22px] lg:text-[26px]/[34px] font-seasons"
          >
            {service.section2_title}
          </h2>
          <div
            class="text-c5 space-y-5 [&>b]:font-semibold text-[16px] md:text-[17px]/[1.8] lg:text-[20px]/[36px] mb-5"
          >
            {@html processHtml(service.section2_description)}
          </div>
        {/if}
      </div>

      <div class="bg-[#c4a98863] w-full md:w-2/4 lg:w-2/4 p-5 rounded border border-[#ccc]">
        {#if service.section3_title}
          <h2
            class="text-[#405d53] font-bold text-[22px] lg:text-[26px]/[34px] font-seasons"
          >
            {service.section3_title}
          </h2>
          <div
            class="text-c5 space-y-5 [&>b]:font-semibold text-[16px] md:text-[17px]/[1.8] lg:text-[20px]/[36px] mb-5"
          >
            {@html processHtml(service.section3_description)}
          </div>
        {/if}
      </div>
    </div>
    {#if service.section4_title}
      <h2
        class="text-[#405d53] font-bold text-[22px] lg:text-[26px]/[34px] font-seasons"
      >
        {service.section4_title}
      </h2>
      <div
        class="text-c5 space-y-5 [&>b]:font-semibold text-[16px] md:text-[17px]/[1.8] lg:text-[20px]/[36px]"
      >
        {@html processHtml(service.section4_description)}
      </div>
    {/if}
  </div>
</section>
 {#if service.section5_title}
<div class="bg-[#D1BB9F] p-5 md:px-20 lg:p-8 w-full flex justify-center">
  <div class="w-350">
   
      <h2
        class="text-[#405d53] font-bold text-[22px] lg:text-[26px]/[34px] font-seasons"
      >
        {service.section5_title}
      </h2>
      <div
        class="text-c5 space-y-5 [&>b]:font-semibold text-[16px] md:text-[17px]/[1.8] lg:text-[20px]/[36px]"
      >
        {@html processHtml(service.section5_description)}
      </div>
   
  </div>
</div>
 {/if}