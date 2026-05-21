<script>
  import Navbar from "$lib/components/Navbar.svelte";
  import MainHeroSlider from "$lib/components/MainHeroSlider.svelte";
  import AboutWhyChoose from "$lib/components/home/AboutWhyChoose.svelte";
  import Services from "$lib/components/home/Services.svelte";
  import OurDoctors from "$lib/components/home/OurDoctors.svelte";
  let { data } = $props();
  console.log(data.meta.data[0]);
</script>

<svelte:head>
  <title>{data?.meta?.data[0]?.meta_title_ar}</title>
  <meta name="description" content={data?.meta?.data[0]?.meta_description_ar} />
  <!-- <meta property="og:title" content={post.metaTitle} /> -->
  <!-- <meta property="og:description" content={post.metaDescription} /> -->
  <!-- <meta property="og:image" content={post.image} /> -->

  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Navbar />
<MainHeroSlider items={data.homepage} />
<AboutWhyChoose items={data.homepage} />
<Services items={data.service} />
<OurDoctors items={data.doctors} />
