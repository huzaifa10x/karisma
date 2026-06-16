<script>
  import ContactSection from "$lib/components/ContactSection.svelte";
  import GlobalBanner from "$lib/components/GlobalBanner.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  let { data } = $props();
  
</script>

<svelte:head>
  <title>{data?.metaa?.data?.meta_title || "karisma Medical Center"}</title>
  <meta
    name="description"
    content={data?.metaa?.data?.meta_description ||
      "Best aesthetic and cosmetic treatments in Sharjah."}
  />

  <meta
    name="keywords"
    content={data?.metaa?.data?.meta_keyword ||
      "beauty clinic, cosmetic clinic, sharjah, karisma medical center"}
  />

  <meta
    property="og:title"
    content={data?.metaa?.data?.meta_title || "karisma Medical Center"}
  />

  <meta
    property="og:description"
    content={data?.metaa?.data?.meta_description ||
      "Best aesthetic and cosmetic treatments in Sharjah."}
  />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content={data?.metaa?.data?.meta_title || "karisma Medical Center"}
  />
  <meta
    name="twitter:description"
    content={data?.metaa?.data?.meta_description ||
      "Best aesthetic and cosmetic treatments in Sharjah."}
  />

  <link rel="canonical" href={data?.metaa?.data?.page_name} />

</svelte:head>


<Navbar />
<GlobalBanner image={data.contactPage.data.bannerImage} text={"Contact Us"} />
<ContactSection items={data.contactPage} />
