<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";
  import GlobalBanner from "$lib/components/GlobalBanner.svelte";
    import DoctorsSlider from "$lib/components/DoctorsSlider.svelte";

  let { data } = $props();

 function processHtml(html: string | null | undefined): string {
  // Handle empty or server-side rendering cases
  if (!html || typeof window === 'undefined') return html ?? "";

  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    // Check if the parser failed to return a document
    if (!doc) throw new Error("DOMParser failed to return a document.");

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
  } catch (error) {
    // Log the error for debugging
    console.error("Error processing HTML in processHtml:", error);
    
    // Return the original HTML as a fallback so the page doesn't break
    return html;
  }
}

function truncateHtml(html: string | null | undefined, limit: number): string {
  if (!html) return "";

  const plainText = html.replace(/<[^>]*>/g, '');

  if (plainText.length <= limit) return html;

  return plainText.substring(0, limit);
}  
</script>

<svelte:head>
  <title>{data?.service?.meta_title || "karisma Medical Center"}</title>
  <meta
    name="description"
    content={data?.service?.meta_description ||
      "Best aesthetic and cosmetic treatments in Sharjah."}
  />

  <meta
    name="keywords"
    content={data?.service?.meta_keyword ||
      "beauty clinic, cosmetic clinic, sharjah, karisma medical center"}
  />

  <meta
    property="og:title"
    content={data?.service?.meta_title || "karisma Medical Center"}
  />

  <meta
    property="og:description"
    content={data?.service?.meta_description ||
      "Best aesthetic and cosmetic treatments in Sharjah."}
  />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content={data?.service?.meta_title || "karisma Medical Center"}
  />
  <meta
    name="twitter:description"
    content={data?.service?.meta_description ||
      "Best aesthetic and cosmetic treatments in Sharjah."}
  />

  <link rel="canonical" href={data?.service?.canonical_name} />

</svelte:head>

<Navbar />
<GlobalBanner
  image={data?.service?.banner_image}
  text={data?.service?.service_name}
/>

<section class="bg-primary ">
    <div class="bg-[#c4a98863] py-10 lg:px-10">
      <div class="mx-auto lg:max-w-375 px-6">
        <div class="grid md:grid-cols-1 lg:grid-cols-2 gap-15">
          <div>
            <img class="md:w-2/4 lg:w-full h-147 object-cover" src={data?.service?.service_image} alt="" />
          </div>
          <div class="space-y-3 md:w-full lg:w-full">
            <h1
              class="text-[#405d53] font-bold text-[22px] lg:text-[26px]/[34px] font-seasons"
            >
              {data?.service?.service_name}
            </h1>
            <div
              class="text-c5 space-y-5 font-light [&_b]:font-semibold text-[16px]/[24px] lg:text-[18px]/[28px]"
            >
              {@html data?.service?.service_description}
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="">
      {#each data?.service?.servicesections as sections, index}
        <div
          class={`p-8 lg:px-10 ${
            index % 2 === 0 ? "bg-primary" : "bg-[#c4a98863]"
          }`}
        >
          <h2
         class="text-[22px] lg:text-[26px]/[34px] font-bold text-[#405d53] font-seasons mb-3"
          >
            {sections?.section_title}
          </h2>
           <!-- <div
            class=" lg:space-y-3 text-[16px] lg:text-[18px]/[28px] 
            font-light
            [&_b]:font-semibold [&_li_b]:font-semibold
            text-c5
            [&_ul]:space-y-1 [&_ul]:pl-6
            mx-auto 
        [&_h4]:text-[22px] lg:[&_h4]:text-[26px]/[34px] [&_h4]:text-[#405d53] [&_h4]:font-bold [&_h4]:font-[seasons]"
          >
             {@html processHtml(sections?.section_description)}
          </div> -->
     <div
  class="lg:space-y-3 text-[16px] lg:text-[18px]/[28px] font-light 
  [&_b]:font-semibold [&_li_b]:font-semibold text-c5 mx-auto 
  [&_h4]:text-[22px] lg:[&_h4]:text-[26px]/[34px] [&_h4]:text-[#405d53] [&_h4]:font-bold [&_h4]:font-[seasons]
  
  /* Updated Bullet Point Logic */
  
  [&_ul]:pl-0 [&_ul]:list-none [&_li]:relative [&_li]:pl-7 [&_li]:mb-2
  
  /* Checkmark styling - Added font-size-[14px] for the icon specifically */

  [&_li::before]:content-['✓'] [&_li::before]:text-[#008000] [&_li::before]:font-bold 
  [&_li::before]:absolute [&_li::before]:left-0 [&_li::before]:text-[14px]
  
  /* Nested List styling - Added font-size-[14px] for the icon specifically */

  [&_li_ul_li::before]:content-['−'] [&_li_ul_li::before]:text-[14px]"
>
  {@html sections?.section_description}
</div>
        </div>
      {/each}
    </section>

    {#if data?.service?.subservices && data?.service?.subservices.length > 0}
      <section class="py-10 bg-[#c4a98863]">
        <div class="space-y-15 w-[95%] px-4 md:px-20">
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-9">
            {#each data?.service?.subservices as service}
              <a
                href={`${data.service.canonical_name}/${service.canonical_name}`}
                class="relative group shadow-[0px_0px_13px_#06060659] overflow-hidden flex flex-col 
                items-start justify-between space-y-2 p-6 rounded-bl-2xl rounded-tr-2xl"
              >
                <div
                  class="absolute w-0 h-0 bottom-0 left-0 group-hover:w-full duration-300 group-hover:h-full bg-[#AA9380]  "
                ></div>
                <div
                  class="text-[22px] font-seasons text-[#405d53] relative z-10 font-[serif] py-3 font-normal"
                >
                  {service.sub_service_name}
                </div>
                <div class="[&_p]:inline [&_p]:w-auto [&_p]:block-none text-[#5c4033] [&_b]:font-normal font-normal relative z-10 pb-2">
                   {@html truncateHtml(service.small_description, 1600)}
                </div>
                <div class="text-c5 font-bold relative z-10 pb-2">Read More</div>
              </a>
            {/each}
          </div>
        </div>
      </section>
    {/if}

    
       {#if data?.service?.doctors && data?.service?.doctors.length > 0}
      <DoctorsSlider docData={data?.service?.doctors && data?.service?.doctors} />
    {/if}
 
</section>
