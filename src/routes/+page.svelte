<script>
  import Footer from "$lib/components/footer.svelte";
  import MainHeroSlider from "$lib/components/MainHeroSlider.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import AboutWhyChoose from "$lib/components/home/AboutWhyChoose.svelte";
  import OurDoctors from "$lib/components/home/OurDoctors.svelte";
  import Services from "$lib/components/home/Services.svelte";
  let { data } = $props();
</script>

<Navbar />
<MainHeroSlider />
<AboutWhyChoose items={data.homepage} />
<Services items={data.service} />
<OurDoctors items={data.doctors} />
<Footer />