<script>
  import ContactSection from "$lib/components/ContactSection.svelte";
  import GlobalBanner from "$lib/components/GlobalBanner.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  let { data } = $props();
</script>

<Navbar />
<GlobalBanner image={data?.careersPage[0]?.bannerImage} text={"Careers"} />
