<script>
  import ContactSection from "$lib/components/ContactSection.svelte";
  import GlobalBanner from "$lib/components/GlobalBanner.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
    import CareerModal from "./CareerModal.svelte";
  let isModalOpen = $state(false);
  let { data } = $props();
  const desktop_image = data.careerBanner.banners[0].desktop_image;
</script>

<svelte:head>
  <title>{data?.careersMeta?.data?.meta_title || "karisma Medical Center"}</title>
  <meta
    name="description"
    content={data?.careersMeta?.data?.meta_description ||
      "Best aesthetic and cosmetic treatments in Sharjah."}
  />

  <meta
    name="keywords"
    content={data?.careersMeta?.data?.meta_keyword ||
      "beauty clinic, cosmetic clinic, sharjah, karisma medical center"}
  />

  <meta
    property="og:title"
    content={data?.careersMeta?.data?.meta_title || "karisma Medical Center"}
  />

  <meta
    property="og:description"
    content={data?.careersMeta?.data?.meta_description ||
      "Best aesthetic and cosmetic treatments in Sharjah."}
  />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content={data?.careersMeta?.data?.meta_title || "karisma Medical Center"}
  />
  <meta
    name="twitter:description"
    content={data?.careersMeta?.data?.meta_description ||
      "Best aesthetic and cosmetic treatments in Sharjah."}
  />

  <link rel="canonical" href={data?.careersMeta?.data?.canonical_name} />

</svelte:head>
<Navbar />
<GlobalBanner image={data?.careersPage[0]?.bannerImage} text={"Careers"} />

<section class="bg-[#D9C5AD] py-20 text-center">
  <div class="max-w-2xl mx-auto px-6">
    <h2 class="text-[22px] lg:text-[32px]/[38px] font-medium text-[#333] font-[seasons] mb-4 ">Join Our Team</h2>
    <p class="mb-8 text-[#666] text-[16px]/[26px] lg:text-[18px]/[28px] font-light">
      We are always looking for exceptional talent to join our team. Submit your application now and we will contact you when a suitable opportunity becomes available.
    </p>
    <button 
      onclick={() => isModalOpen = true}
      class="bg-[#405d53] text-white rounded px-8 py-3 font-semibold hover:bg-[#4f6e62] transition"
    >
      Apply Now
    </button>
  </div>
</section>

<CareerModal isOpen={isModalOpen} onClose={() => isModalOpen = false} desktop_image={desktop_image}/>

