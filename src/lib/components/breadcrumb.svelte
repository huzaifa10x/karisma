<script lang="ts">
  import { page } from "$app/stores";

  let breadcrumbs = $derived(() => {
    const segments = $page.url.pathname
      .split("/")
      .filter(Boolean)
      .filter((segment) => !["en", "ar"].includes(segment));

    // If no segments (e.g., Home page), just show Home
    if (segments.length === 0) {
      return [{ label: "Home", href: undefined }];
    }

    // Get the last segment
    const lastSegment = segments[segments.length - 1];

    // Format the label (Capitalize first letter, replace hyphens with spaces)
    const label = lastSegment.charAt(0).toUpperCase() + lastSegment.replace(/-/g, " ").slice(1);

    return [
      { label: "Home", href: "/en/" },
      { label: label, href: undefined } // Current page has no href (it's the active state)
    ];
  });
</script>

<nav
  aria-label="breadcrumb"
  class="p-2 border border-[#dbe5e23d] rounded-lg rounded-br-none"
  style="width: fit-content;"
>
  <ol class="flex items-center justify-center gap-2 text-sm">
    {#each breadcrumbs() as item, i}
      <li class="flex items-center gap-2">
        {#if item.href}
          <a href={item.href} class="text-white text-[15px] font-normal transition-colors">
            {item.label}
          </a>
          <span class="text-white text-[15px]">|</span>
        {:else}
          <span class="text-white font-medium text-[15px]">{item.label}</span>
        {/if}
      </li>
    {/each}
  </ol>
</nav>