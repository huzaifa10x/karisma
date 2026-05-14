<script lang="ts">
  import Floatingsidebar from "$lib/components/Floatingsidebar.svelte";
  import Footer from "$lib/components/footer.svelte";
  import "./layout.css";

  const { children } = $props();
</script>

{@render children()}
<Floatingsidebar />

<Footer />
