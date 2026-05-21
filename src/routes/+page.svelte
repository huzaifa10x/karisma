<script>
  import Navbar from "$lib/components/Navbar.svelte";
  import MainHeroSlider from "$lib/components/MainHeroSlider.svelte";
  import AboutWhyChoose from "$lib/components/home/AboutWhyChoose.svelte";
  import Services from "$lib/components/home/Services.svelte";
  import OurDoctors from "$lib/components/home/OurDoctors.svelte";
  let { data } = $props();
</script>

<Navbar />
<MainHeroSlider items={data.homepage} />
<AboutWhyChoose items={data.homepage} />
<Services items={data.service} />
<OurDoctors items={data.doctors} />
