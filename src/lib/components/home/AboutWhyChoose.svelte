<script lang="ts">
  let { items } = $props();
</script>

<section>
  {#each items as item}
    {$inspect(item)}
    {/each}
    {$inspect(items)}
    
  <h1>about us</h1>
</section>
