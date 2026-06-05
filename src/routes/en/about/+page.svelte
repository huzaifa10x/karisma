<script>
  import CEOMessage from "$lib/components/about/CEOMessage.svelte";
  import OurStory from "$lib/components/about/OurStory.svelte";
  import VisionMission from "$lib/components/about/VisionMission.svelte";
  import GlobalBanner from "$lib/components/GlobalBanner.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  let { data } = $props();
</script>

<svelte:head>
  <title>{data?.aboutMeta?.data?.meta_title || "karisma Medical Center"}</title>
  <meta
    name="description"
    content={data?.aboutMeta?.data?.meta_description ||
      "Best aesthetic and cosmetic treatments in Sharjah."}
  />

  <meta
    name="keywords"
    content={data?.aboutMeta?.data?.meta_keyword ||
      "beauty clinic, cosmetic clinic, sharjah, karisma medical center"}
  />

  <meta
    property="og:title"
    content={data?.aboutMeta?.data?.meta_title || "karisma Medical Center"}
  />

  <meta
    property="og:description"
    content={data?.aboutMeta?.data?.meta_description ||
      "Best aesthetic and cosmetic treatments in Sharjah."}
  />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content={data?.aboutMeta?.data?.meta_title || "karisma Medical Center"}
  />
  <meta
    name="twitter:description"
    content={data?.aboutMeta?.data?.meta_description ||
      "Best aesthetic and cosmetic treatments in Sharjah."}
  />
</svelte:head>

<Navbar />
<GlobalBanner image={data.aboutPage.data.banner_image} text={"About us"} />
<OurStory items={data.aboutPage} />
<VisionMission items={data.aboutPage} />
<CEOMessage items={data.aboutPage} />
