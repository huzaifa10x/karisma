<script>
  import GlobalBanner from "$lib/components/GlobalBanner.svelte";
  import Navbar from "$lib/components/Navbar.svelte";

  let { data } = $props();
</script>

<!-- <Navbar items={data.departments} /> -->
<GlobalBanner items={data.aboutPage} />
