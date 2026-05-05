<script lang="ts">
  import Footer from '$lib/components/footer.svelte';
	import './layout.css';

	const { children } = $props();
</script>

{@render children()}
<Footer/>