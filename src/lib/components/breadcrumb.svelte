<script lang="ts">
  import { page } from "$app/stores";

  let breadcrumbs = $derived(() => {
    const segments = $page.url.pathname
      .split("/")
      .filter(Boolean)
      .filter((segment) => !["en", "ar"].includes(segment));

    return [
      { label: "Home", href: "/en/" },
      ...segments.map((segment, i) => ({
        label:
          segment.charAt(0).toUpperCase() + segment.replace(/-/g, " ").slice(1),
        href:
          i < segments.length - 1
            ? "/en/" + segments.slice(0, i + 1).join("/")
            : undefined,
      })),
    ];
  });
</script>

<nav
  aria-label="breadcrumb"
  class="p-2 border border-white/40 rounded-lg rounded-br-none"
  style="width: fit-content;"
>
  <ol class="flex items-center gap-2 text-sm">
    {#each breadcrumbs() as item, i}
      <li class="flex items-center gap-2">
        {#if item.href}
          <a
            href={item.href}
            class="text-white/70 hover:text-white transition-colors"
          >
            {item.label}
          </a>
          <span class="text-white/50">|</span>
        {:else}
          <span class="text-white font-medium">{item.label}</span>
        {/if}
      </li>
    {/each}
  </ol>
</nav>
