<script lang="ts">
  import AppointmentModal from "$lib/components/AppointmentModal.svelte";
  import Button from "$lib/components/Button.svelte";
  import Floatingsidebar from "$lib/components/arabic/Floatingsidebar.svelte";
  import Footer from "$lib/components/footer.svelte";
  import "./layout.css";

  const { children } = $props();
</script>

{@render children()}
<Floatingsidebar />
<AppointmentModal />

<Footer />
