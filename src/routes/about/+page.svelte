<script>
  import CEOMessage from "$lib/components/about/CEOMessage.svelte";
  import OurStory from "$lib/components/about/OurStory.svelte";
  import VisionMission from "$lib/components/about/VisionMission.svelte";
  import GlobalBanner from "$lib/components/GlobalBanner.svelte";
  import Navbar from "$lib/components/Navbar.svelte";

  let { data } = $props();
</script>

<Navbar />
<GlobalBanner items={data.aboutPage} />
<OurStory items={data.aboutPage} />
<VisionMission items={data.aboutPage} />
<CEOMessage items={data.aboutPage} />
