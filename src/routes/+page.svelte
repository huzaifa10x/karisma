<script>
  import Footer from "$lib/components/footer.svelte";
  import MainHeroSlider from "$lib/components/MainHeroSlider.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import AboutWhyChoose from "$lib/components/home/AboutWhyChoose.svelte";
  let { data } = $props();
</script>

<Navbar />
<MainHeroSlider />
<AboutWhyChoose items={data.AboutUs} />
<Footer />
