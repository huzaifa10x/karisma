<script lang="ts">
  import Button from "../Button.svelte";
  let { items } = $props();
</script>

<section class="py-10 bg-primary">
  <div class="grid md:grid-cols-2 mx-auto max-w-7xl gap-20 px-10">
    <div class="flex justify-center gap-5">
      {#each items.banners
        .filter((item) => item.title === "About us content" || "About us")
        .slice(0, 2) as imgs}
        <div class="max-w-[330px] w-full h-[370px] overflow-hidden first:mt-15 max-sm:first:hidden">
          <img
            src={imgs.desktop_image}
            alt={imgs.title}
            class="w-full h-full object-cover rounded-br-none rounded-2xl"
          />
        </div>
      {/each}
    </div>

    <div class="max-w-2xl space-y-4">
      {#each items.banners.filter((item) => item.title === "About us content") as content}
        <div class="text-secondary text-4xl font-seasons">About Us</div>
        <div class="text-c5 text-lg">{content.description}</div>
      {/each}
      <div class="lg:flex justify-end">
        <Button text="Read more" />
      </div>
    </div>
  </div>
</section>

<section class="py-10 bg-primary">
  <div class="grid md:grid-cols-2 mx-auto max-w-7xl gap-20 px-10">
    <div class="max-w-2xl space-y-4">
      {#each items.banners.filter((item) => item.title === "Why choose us?") as content}
        <div class="text-secondary text-4xl font-seasons">{content.title}</div>
        <div class="text-c5 text-lg">{content.description}</div>
      {/each}
      <Button text="Read more" />
    </div>
    <div>
      {#each items.banners.filter((item) => item.title === "Why choose us?") as imgs}
        <div class="">
          <img
            src={imgs.desktop_image}
            alt={imgs.title}
            class="w-80 block mx-auto rounded-br-none rounded-2xl image-spin"
          />
        </div>
      {/each}
    </div>
  </div>
</section>
