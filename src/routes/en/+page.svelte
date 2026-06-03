<script>
  import Navbar from "$lib/components/Navbar.svelte";
  import MainHeroSlider from "$lib/components/MainHeroSlider.svelte";
  import AboutWhyChoose from "$lib/components/home/AboutWhyChoose.svelte";
  import Services from "$lib/components/home/Services.svelte";
  import OurDoctors from "$lib/components/home/OurDoctors.svelte";
  let { data } = $props();
</script>

<svelte:head>
  <title>{data?.homeMeta?.data?.meta_title || "karisma Medical Center"}</title>
  <meta
    name="description"
    content={data?.homeMeta?.data?.meta_description ||
      "Best aesthetic and cosmetic treatments in Sharjah."}
  />

  <meta
    name="keywords"
    content={data?.homeMeta?.data?.meta_keyword ||
      "beauty clinic, cosmetic clinic, sharjah, karisma medical center"}
  />

  <meta
    property="og:title"
    content={data?.homeMeta?.data?.meta_title || "karisma Medical Center"}
  />

  <meta
    property="og:description"
    content={data?.homeMeta?.data?.meta_description ||
      "Best aesthetic and cosmetic treatments in Sharjah."}
  />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content={data?.homeMeta?.data?.meta_title || "karisma Medical Center"}
  />
  <meta
    name="twitter:description"
    content={data?.homeMeta?.data?.meta_description ||
      "Best aesthetic and cosmetic treatments in Sharjah."}
  />
</svelte:head>

<Navbar />
<MainHeroSlider items={data.homepage} />
<AboutWhyChoose items={data.homepage} />
<Services items={data.service} />
<OurDoctors items={data.doctors} />
